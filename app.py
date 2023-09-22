from flask import Flask, redirect, render_template, request
from flask_session import Session
from werkzeug.security import check_password_hash, generate_password_hash
import psycopg

app = Flask(__name__)


@app.route('/')
def home_page():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=7000)

