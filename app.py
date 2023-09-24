from flask import Flask, redirect, render_template, request
from flask_session import Session
from werkzeug.security import check_password_hash, generate_password_hash
import psycopg

app = Flask(__name__)


@app.route('/')
def home_page():
    return render_template('index.html')

@app.route('/signup', methods=['POST', 'GET'])
def signup():
    if request.method == 'GET':
        return render_template('signup.html')

    email = request.form.get('email')
    password = request.form.get('password')
    confirmation = request.form.get('confirmation')

    if not (email and password and confirmation):
        return render_template('error.html', error='empty input field(s), error number 404')
    if password != confirmation:
        return render_template('error.html', error='password and confirmation do not match, error number 2')
    # connect to data base and check if user already exists
    # if not, hash password and then add it to database




