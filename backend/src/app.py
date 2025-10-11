import sys
import os
import time

import cloudinary

from flask import Flask, jsonify, request
from flask_migrate import Migrate
from flask_cors import CORS

from admin import setup_admin
from models import db, Reserva, PlatoCarta, SeccionCarta
from utils import generate_sitemap

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///yourdb.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

db.init_app(app)
migrate = Migrate(app, db)
CORS(app)
setup_admin(app)

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

# Rutas de reservas
@app.route("/reservas", methods=["GET"])
def get_reservas():
    reservas = Reserva.query.all()
    return (
        jsonify(
            [
                {
                    "id": reserva.id,
                    "nombre_cliente": reserva.nombre_cliente,
                    "fecha_hora": reserva.fecha_hora.isoformat(),
                    "numero_personas": reserva.numero_personas,
                }
                for reserva in reservas
            ]
        ),
        200,
    )


@app.route("/reservas", methods=["POST"])
def create_reserva():
    data = request.get_json()
    nueva_reserva = Reserva(
        nombre_cliente=data.get("nombre_cliente"),
        fecha_hora=data.get("fecha_hora"),
        numero_personas=data.get("numero_personas"),
    )
    db.session.add(nueva_reserva)
    db.session.commit()
    return (
        jsonify(
            {
                "id": nueva_reserva.id,
                "nombre_cliente": nueva_reserva.nombre_cliente,
                "fecha_hora": nueva_reserva.fecha_hora.isoformat(),
                "numero_personas": nueva_reserva.numero_personas,
            }
        ),
        201,
    )


# Rutas de platos de la carta
@app.route("/platos_carta", methods=["GET"])
def get_platos_carta():
    platos = PlatoCarta.query.all()
    return (
        jsonify(
            [
                {
                    "id": plato.id,
                    "nombre": plato.nombre,
                    "descripcion": plato.descripcion,
                    "precio": plato.precio,
                    "imagen_url": plato.imagen_url,
                    "seccion": plato.seccion.value,
                }
                for plato in platos
            ]
        ),
        200,
    )


@app.route("/platos_carta", methods=["POST"])
def create_plato_carta():
    data = request.get_json()
    nuevo_plato = PlatoCarta(
        nombre=data.get("nombre"),
        descripcion=data.get("descripcion"),
        precio=data.get("precio"),
        imagen_url=data.get("imagen_url"),
        seccion=SeccionCarta[data.get("seccion")],
    )
    db.session.add(nuevo_plato)
    db.session.commit()
    return (
        jsonify(
            {
                "id": nuevo_plato.id,
                "nombre": nuevo_plato.nombre,
                "descripcion": nuevo_plato.descripcion,
                "precio": nuevo_plato.precio,
                "imagen_url": nuevo_plato.imagen_url,
                "seccion": nuevo_plato.seccion.value,
            }
        ),
        201,
    )


# Configuración de Cloudinary
cloudinary.config(
    cloud_name=os.getenv("CLOUDINARY_CLOUD_NAME"),
    api_key=os.getenv("CLOUDINARY_API_KEY"),
    api_secret=os.getenv("CLOUDINARY_API_SECRET"),
    secure=True
)
