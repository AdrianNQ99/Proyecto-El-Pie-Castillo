import sys
import os


import time

from flask import Flask, jsonify, request
from flask_migrate import Migrate
from flask_cors import CORS

from models import db, Client, Reservation, MenuItem
from utils import generate_sitemap

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

#clients routes
@app.route("/clients", methods=["GET"])
def get_clients():
    clients = Client.query.all()
    return jsonify([{
        "id": client.id,
        "name": client.name,
        "email": client.email,
        "phone": client.phone
    } for client in clients]), 200

@app.route("/clients/<int:client_id>", methods=["GET"])
def get_client(client_id):
    client = Client.query.get_or_404(client_id)
    return jsonify({
        "id": client.id,
        "name": client.name,
        "email": client.email,
        "phone": client.phone
    }), 200

@app.route("/clients/int", methods=["POST"])
def create_client():
    from flask import request
    data = request.get_json()
    new_client = Client(
        name=data.get("name"),
        email=data.get("email"),
        phone=data.get("phone")
    )
    db.session.add(new_client)
    db.session.commit()
    return jsonify({
        "id": new_client.id,
        "name": new_client.name,
        "email": new_client.email,
        "phone": new_client.phone
    }), 201

#reservations routes
@app.route("/reservations", methods=["GET"])
def get_reservations():
    reservations = Reservation.query.all()
    return jsonify([{
        "id": reservation.id,
        "client_id": reservation.client_id,
        "reservation_time": reservation.reservation_time.isoformat(),
        "number_of_people": reservation.number_of_people
    } for reservation in reservations]), 200
@app.route("/reservations", methods=["POST"])
def create_reservation():
    data = request.get_json()
    new_reservation = Reservation(
        client_id=data.get("client_id"),
        table_id=data.get("table_id"),
        reservation_time=data.get("reservation_time"),
        number_of_people=data.get("number_of_people")
    )
    db.session.add(new_reservation)
    db.session.commit()
    return jsonify({
        "id": new_reservation.id,
        "client_id": new_reservation.client_id,
        "reservation_time": new_reservation.reservation_time.isoformat(),
        "number_of_people": new_reservation.number_of_people
    }), 201
#menu items routes
@app.route("/menu_items>", methods=["POST"])
def create_menu_item():
    data = request.get_json()
    new_menu_item = MenuItem(
        name=data.get("name"),
        description=data.get("description"),
        price=data.get("price"),
        image_url=data.get("image_url")
    )
    db.session.add(new_menu_item)
    db.session.commit()
    return jsonify({
        "id": new_menu_item.id,
        "name": new_menu_item.name,
        "description": new_menu_item.description,
        "price": new_menu_item.price,
        "image_url": new_menu_item.image_url
    }), 201

@app.route("/menu_items", methods=["GET"])
def get_menu_items():
    menu_items = MenuItem.query.all()
    return jsonify([{
        "id": item.id,
        "name": item.name,
        "description": item.description,
        "price": item.price,
        "image_url": item.image_url
    } for item in menu_items]), 200

