from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey
from enum import Enum as PyEnum

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///yourdb.db"
db = SQLAlchemy(app)

if __name__ == "__main__":
    app.run(port=5000, debug=True)


class TableStatus(PyEnum):
    AVAILABLE = "available"
    RESERVED = "reserved"
    OCCUPIED = "occupied"


class Client(db.Model):
    __tablename__ = "clients"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    phone = db.Column(db.String(20), nullable=True)
    reservations = db.relationship("Reservation", backref="client", lazy=True)

    def __repr__(self):
        return f"<Client {self.name}>"


class Reservation(db.Model):
    __tablename__ = "reservations"
    id = db.Column(db.Integer, primary_key=True)
    client_id = db.Column(db.Integer, ForeignKey("clients.id"), nullable=False)
    reservation_time = db.Column(db.DateTime, nullable=False)
    number_of_people = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f"<Reservation {self.id} for Client {self.client_id} at Table {self.table_id}>"


class MenuItem(db.Model):
    __tablename__ = "menu_items"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255), nullable=True)
    price = db.Column(db.Float, nullable=False)
    image_url = db.Column(db.String(255), nullable=True)

    def __repr__(self):
        return f"<MenuItem {self.name} - ${self.price}>"
