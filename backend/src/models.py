from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey, Enum
from enum import Enum as PyEnum

db = SQLAlchemy()

class Client(db.Model):
    __tablename__ = 'clients'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    phone = db.Column(db.String(20), nullable=True)
    reservations = db.relationship('Reservation', backref='client', lazy=True)

    def __repr__(self):
        return f'<Client {self.name}>'