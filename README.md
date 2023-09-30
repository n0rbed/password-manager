# "Cyber-Lock" AKA my cs50x project.

#### Video demo: https://www.youtube.com/watch?v=lf7GOhiyKzU

#### Quick description: This is a web-based password manager that uses vanilla JS, Flask, tailwindcss and PostgreSQL. It first prompts the user for a "master password" upon signing up which is used to generate a key that is stored in the database info of that user. The key is generated using hashlib (a python library) which is then passed on to Fernet in order to encrypt/decrypt the user's password logs. Upon logging in, the user gets displayed a table which has all their stored passwords (nothing is visible if no passwords are entered, obviously). 

#### Oh also youll need to make a local database labelled "password_db" and change the username and password used to login in the app.py file in order to get the project running locally. 
