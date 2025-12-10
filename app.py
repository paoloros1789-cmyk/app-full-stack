from flask import Flask, jsonify, request
from flask_cors import CORS
from database_wrapper import DatabaseWrapper

app = Flask(__name__)
CORS(app)

@app.route("/Task")
def index():
    data = "recupero informazione"
    return data
    
db = DatabaseWrapper(
    host="",
    user="",
    password="",
    database="",
    port=
)

@app.route("/Task", methods=["GET"])
def get_Task():
    Task = db.get_Task()
    return jsonify(Task)




if __name__ == "__main__":
    app.run(debug=True)