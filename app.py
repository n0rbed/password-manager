from flask import Flask, redirect, render_template, request, session
from flask_session import Session
from werkzeug.security import check_password_hash, generate_password_hash
import psycopg
from datetime import datetime
from cryptography.fernet import Fernet
import base64
import os
import hashlib




app = Flask(__name__)

conn = psycopg.connect(host='localhost', dbname='password_db', user='yassin',
                       password='123', port=5432)
conn.autocommit = True
cur = conn.cursor()

app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)


@app.route('/', methods=['GET', 'POST'])
def home_page():
    user_id = session.get('user_id')
    if not user_id:
        return render_template('index.html', passwords=[])

    cur.execute('SELECT password from passwords WHERE owner_id = %s', [user_id])
    try:
        encrypted_passwords = cur.fetchall() 
    except psycopg.ProgrammingError:
        return render_template('index.html', passwords=[])
        
    cur.execute('SELECT key FROM users WHERE id = %s', [user_id])
    key = cur.fetchall()[0][0]

    f = Fernet(key) 


    if request.method == 'POST':
        new_account = request.form.get('account_name')
        new_password = request.form.get('password')
        username = request.form.get('username')

        if not (new_account and new_password):
            return render_template('error.html', user_id=1, error='input field \
            of new password or account is empty')

        if check_exists(new_account, user_id):
            return render_template('error.html', user_id=1, error='You can not \
            have 2 accounts with the same name')

        new_password = f.encrypt(new_password.encode('utf-8'))
        
        

        cur.execute('INSERT INTO passwords (owner_id, account_name, username, password) VALUES(%s, %s, %s, %s)',
                    [user_id, new_account, username, new_password])
        return redirect('/')

    if request.method == 'GET':
        decrypted_passwords = []
        if not encrypted_passwords:
            return render_template('index.html', passwords=[])
        
        for password in encrypted_passwords:
            decrypted_passwords.append(f.decrypt(password[0]))

        cur.execute('SELECT (account_name, username) FROM passwords WHERE owner_id = %s', [user_id])
        data = cur.fetchall()
        results = []

        for i, row in enumerate(data):
            results.append([row[0][0], row[0][1], decrypted_passwords[i].decode('utf-8')])
            

        return render_template('index.html', results=results)
        





@app.route('/signup', methods=['POST', 'GET'])
def signup():
    session.clear()
    if request.method == 'GET':
        return render_template('signup.html')

    email = request.form.get('email')
    password = request.form.get('password')
    confirmation = request.form.get('confirmation')

    if not (email and password and confirmation):
        return render_template('error.html', error='empty input field(s), error number 404')
    if password != confirmation:
        return render_template('error.html', error='password and confirmation do not match, error number 2')

    # check if user exists
    cur.execute("SELECT * FROM users WHERE email = %s", [email])
    email_taken = cur.fetchall()

    if email_taken:
        return render_template('error.html', error='There is an existing account with the submitted email')

    key = generate_master_key(password)
    hash = generate_password_hash(password)
    date = datetime.now()

    cur.execute("INSERT INTO users (email, hash, date_created, key) VALUES (%s, %s, %s, %s)",
                [email, hash, date, key]);
    return redirect('/login')


@app.route('/login', methods=['GET', 'POST'])
def login():
    session.clear()
    if request.method == 'GET':
        return render_template('login.html')
    email = request.form.get('email')
    password = request.form.get('password')

    if not (email and password):
        return render_template('error.html', error='Input field(s) empty')

    cur.execute('SELECT hash FROM users WHERE email = %s', [email])
    database_hash = cur.fetchall()[0][0]
    if not database_hash:
        return render_template('error.html', error='Email or password are invalid')
    
    if not check_password_hash(database_hash, password):
        return render_template('error.html', error='Email or password are invalid')
    
    cur.execute('SELECT id FROM USERS WHERE email = %s', [email])
    session['user_id'] = cur.fetchall()[0][0]

    return redirect('/')


@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')

@app.route('/delete', methods=['POST'])
def delete():
    user_id = session.get('user_id')
    if not user_id:
        return redirect('/login')

    if not request.form.get('account'):
        return render_template('error.html', user_id = 1, error='Invalid input')

    account_name = request.form.get('account')

    cur.execute('SELECT account_name FROM passwords WHERE owner_id = %s AND account_name = %s',
                [user_id, account_name]) 

    if len(cur.fetchall()) == 0:
        return render_template('error.html', user_id=1, error='You have no accounts with the submitted account name')


    cur.execute('DELETE FROM passwords WHERE owner_id = %s AND account_name = %s', [user_id, account_name])
    return redirect('/')
    

@app.route('/edit', methods=['GET', 'POST'])
def edit():
    if request.method == 'GET':
        return render_template('edit.html', account=request.args['account'])

    user_id = session.get('user_id')
    if not user_id:
        return redirect('/')

    cur.execute('SELECT key FROM users WHERE id = %s', [user_id])
    key = cur.fetchall()[0][0]

    f = Fernet(key) 

    old_account = request.form.get('old_account')
    account_name = request.form.get('account_name')
    username = request.form.get('username')
    password = request.form.get('password')

    cur.execute('SELECT * FROM passwords WHERE account_name = %s', [account_name])
    if cur.fetchall():
        return render_template('error.html', error='You can not have 2 accounts with the same name')

    if not (account_name and username and password):
        return render_template('error.html', error='input field empty')


    password = f.encrypt(password.encode('utf-8'))

    cur.execute('UPDATE passwords SET account_name = %s, username = %s, password = %s \
    WHERE owner_id = %s AND account_name = %s', 
                [account_name, username, password, user_id, old_account])
    return redirect('/')




def check_exists(account, user_id):
    cur.execute('SELECT account_name from passwords WHERE owner_id = %s AND account_name = %s',
                [user_id, account])
    if len(cur.fetchall()) == 1:
        return True

    return False



def generate_master_key(password):
    bytes_password = password.encode('utf-8')

    salt = os.urandom(16)
    #kdf = PBKDF2HMAC(
    #    algorithm=hashes.SHA256(),
    #    length=32,
    #    salt=salt,
    #    iterations=480000,
    #)
    key = hashlib.scrypt(
        bytes_password,
        salt=salt,
        n=128,
        r=256,
        p=8,
        dklen=32,
    )

    key = base64.urlsafe_b64encode(key)
    return key


def password_to_bytes(password):
    try:
        bytes_password = bytes(password, 'ascii')
        if ' ' in password:
            raise TypeError
    except UnicodeEncodeError or TypeError:
        return render_template('error.html', errror='Password should only contain ASCII \
        characters and no spaces.')

    return bytes_password

    
