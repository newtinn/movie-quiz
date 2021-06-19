from flask import Flask
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

@app.errorhandler(404)
def index():
    return "<h1>App is in development</h1><br/><p>Coming out soon...</p><br/><br/><br/><br/>Made by Newtinn"

if (__name__ == "__main__"):
    app.run(debug=True)