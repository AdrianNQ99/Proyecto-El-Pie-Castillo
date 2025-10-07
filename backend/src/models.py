from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey, Enum
from enum import Enum as PyEnum

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///yourdb.db'
db = SQLAlchemy(app)

class Client(db.Model):
    __tablename__ = 'clients'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    phone = db.Column(db.String(20), nullable=True)
    reservations = db.relationship('Reservation', backref='client', lazy=True)

    def __repr__(self):
        return f'<Client {self.name}>'

@app.route('/health')
def health():
    return {"status": "ok"}, 200

if __name__ == "__main__":
    app.run(port=5000, debug=True)