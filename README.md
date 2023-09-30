# "Cyber-Lock" AKA my cs50x project.

#### Quick description: This is a web-based password manager that uses vanilla JS, Flask, tailwindcss and PostgreSQL. It first prompts the user for a "master password" upon signing up which is used to generate a key that is stored in the database info of that user. The key is generated using hashlib (a python library) which is then passed on to Fernet in order to encrypt/decrypt the user's password logs. Upon logging in, the user gets displayed a table which has all their stored passwords (nothing is visible if no passwords are entered, obviously). 
