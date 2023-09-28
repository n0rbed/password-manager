from flask import Flask, redirect, render_template, request, session
from flask_session import Session
from werkzeug.security import check_password_hash, generate_password_hash
import psycopg
from datetime import datetime

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
    if user_id:
        cur.execute('SELECT * from passwords WHERE owner_id = %s', [user_id])

    try:
        passwords = cur.fetchall() 
    except psycopg.ProgrammingError:
        return render_template('index.html', passwords=None)
    


    if request.method == 'POST':
        new_account = request.form.get('account_name')
        new_password = request.form.get('password')
        username = request.form.get('username')

        if not (new_account and new_password):
            return render_template('error.html', error='input field of new password or account is empty')

        if check_exists(new_account, user_id):
            return render_template('error.html', error='You can not have 2 accounts with the same name')

        cur.execute('INSERT INTO passwords (owner_id, account_name, username, password) VALUES(%s, %s, %s, %s)',
                    [user_id, new_account, username, new_password])
        return redirect('/')

    if request.method == 'GET':
        return render_template('index.html', passwords=passwords)
        





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

    # if not, hash password and then add it to database
    hash = generate_password_hash(password)
    date = datetime.now()
    cur.execute("INSERT INTO users (email, hash, date_created) VALUES (%s, %s, %s)", [email, hash, date]);
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
    if not request.form.get('account'):
        return render_template('error.html', error='Invalid input')

    account_name = request.form.get('account')
    user_id = session.get('user_id')

    cur.execute('SELECT account_name FROM passwords WHERE owner_id = %s AND account_name = %s',
                [user_id, account_name]) 

    if len(cur.fetchall()) == 0:
        return render_template('error.html', error='You have no accounts with the submitted account name')


    cur.execute('DELETE FROM passwords WHERE owner_id = %s AND account_name = %s', [user_id, account_name])
    return redirect('/')
    

@app.route('/edit', methods=['GET', 'POST'])
def edit():
    if request.method == 'GET':
        return render_template('edit.html', account=request.args['account'])

    user_id = session.get('user_id')
    if not user_id:
        return redirect('/')

    account_name = request.form.get('account_name')
    username = request.form.get('username')
    password = request.form.get('password')


    cur.execute('UPDATE passwords SET account_name = %s, username = %s, password = %s', 
                [account_name, username, password])
    return redirect('/')




def check_exists(account, user_id):
    cur.execute('SELECT account_name from passwords WHERE owner_id = %s AND account_name = %s',
                [user_id, account])
    if len(cur.fetchall()) == 1:
        return True

    return False

