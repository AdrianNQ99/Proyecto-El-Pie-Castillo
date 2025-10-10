from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey
from enum import Enum as PyEnum

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///yourdb.db"
db = SQLAlchemy(app)

if __name__ == "__main__":
    app.run(port=5000, debug=True)

class SeccionCarta(PyEnum):
    ParaCompartir = "Para Compartir"
    PlatosTipicosFranceses = "Platos Típicos Franceses"
    AlHorno = "Al Horno"
    PorEncargo = "Por Encargo"
    Carnes = "Carnes"
    Pescados = "Pescados"
    PostresCaseros = "Postres Caseros"

class Cliente(db.Model):
    __tablename__ = "clientes"
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50), nullable=False)
    correo = db.Column(db.String(120), unique=True, nullable=False)
    telefono = db.Column(db.String(20), nullable=True)
    reservas = db.relationship("Reserva", backref="cliente", lazy=True)

    def __repr__(self):
        return f"<Cliente {self.nombre}>"

class Reserva(db.Model):
    __tablename__ = "reservas"
    id = db.Column(db.Integer, primary_key=True)
    cliente_id = db.Column(db.Integer, ForeignKey("clientes.id"), nullable=False)
    fecha_hora = db.Column(db.DateTime, nullable=False)
    numero_personas = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f"<Reserva {self.id} para Cliente {self.cliente_id}>"

class PlatoCarta(db.Model):
    __tablename__ = "platos_carta"
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    descripcion = db.Column(db.String(255), nullable=True)
    precio = db.Column(db.Float, nullable=False)
    imagen_url = db.Column(db.String(255), nullable=True)
    seccion = db.Column(db.Enum(SeccionCarta), nullable=False)

    def __repr__(self):
        return f"<PlatoCarta {self.nombre} - ${self.precio}>"
