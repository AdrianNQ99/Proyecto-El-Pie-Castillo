from flask_sqlalchemy import SQLAlchemy
from enum import Enum as PyEnum

db = SQLAlchemy()

class SeccionCarta(PyEnum):
    ParaCompartir = "Para Compartir"
    PlatosTipicosFranceses = "Platos Típicos Franceses"
    AlHorno = "Al Horno"
    PorEncargo = "Por Encargo"
    Carnes = "Carnes"
    Pescados = "Pescados"
    PostresCaseros = "Postres Caseros"

class Reserva(db.Model):
    __tablename__ = "reservas"
    id = db.Column(db.Integer, primary_key=True)
    nombre_cliente = db.Column(db.String(100), nullable=False)
    fecha_hora = db.Column(db.DateTime, nullable=False)
    numero_personas = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f"<Reserva {self.id} para {self.nombre_cliente} el {self.fecha_hora}>"

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
