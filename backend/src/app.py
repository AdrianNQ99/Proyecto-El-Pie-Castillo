import sys
import os


import time

from flask import Flask, jsonify
from flask_migrate import Migrate
from flask_cors import CORS

from src.models import db, Client
from src.utils import generate_sitemap

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///yourdb.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

db.init_app(app)
migrate = Migrate(app, db)
CORS(app)

start_time = time.time()

@app.route("/")
def sitemap():
    return generate_sitemap(app)


@app.route("/health", methods=["GET"])
def health_check():
    return jsonify({"status": "ok", "uptime": round(time.time() - start_time, 2)}), 200

if __name__ == "__main__":
    PORT = int(os.environ.get("PORT", 8080))
    app.run(host="0.0.0.0", port=PORT, debug=True)

