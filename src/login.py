
from flask import Flask
from flask import Flask, flash, redirect, render_template, request, session, abort, url_for
import os


# app = Flask(__name__) # to make the app run without any
app = Flask(__name__)


@app.route('/')
def index():
    return redirect(url_for("login"))


@app.route('/login', methods=['GET', 'POST'])
def login():
    # Output message if something goes wrong...
    msg = ''
    account = {"id": -5, "username": "None"}
    # Check if "username" and "password" POST requests exist (user submitted form)
    if request.method == 'POST':
        #  and 'username' in request.form and 'password' in request.form:
        # Create variables for easy access
        # username = request.form['username']
        # password = request.form['password']
        # Check if account exists using MySQL
        # Fetch one record and return result
        account = {"id": 23, "username": "Admin"}
        # If account exists in accounts table in out database
        if account:
            # Create session data, we can access this data in other routes
            session['loggedin'] = True
            session['id'] = account['id']
            session['username'] = account['username']
            # Redirect to home page
            # return 'Logged in successfully!'
        else:
            # Account doesnt exist or username/password incorrect
            msg = 'Incorrect username/password!'
    # Show the login form with message (if any)
    return render_template('index.html', msg=msg, id=account["id"])


@app.route('/logout')
def logout():
    # Remove session data, this will log the user out
    session.pop('loggedin', None)
    session.pop('id', None)
    session.pop('username', None)
    # Redirect to login page

    return redirect(url_for("login"))


if __name__ == "__main__":
    # This replaces your existing "app = Flask(__name__)"
    app.secret_key = os.urandom(12)
    app.run(debug=True, host='127.0.0.1', port=6625)

