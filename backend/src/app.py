import os
from flask import Flask, request, jsonify, url_for
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from src.utils import APIException, generate_sitemap
from src.admin import setup_admin
from src.models import db, User, Vuelos,Hoteles,Coches,Company,Excursiones,Favourite
import os
import time

from flask import Flask, jsonify

app = Flask(__name__)
start_time = time.time()


@app.route("/health", methods=["GET"])
def health_check():
    return jsonify({"status": "ok", "uptime": round(time.time() - start_time, 2)}), 200


if __name__ == "__main__":
    PORT = int(os.environ.get("PORT", 8080))
    app.run(host="0.0.0.0", port=PORT, debug=False)