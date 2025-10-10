import os
from flask_admin import Admin
from models import db, Cliente, Reserva, PlatoCarta
from flask_admin.contrib.sqla import ModelView
from sqlalchemy.orm.properties import RelationshipProperty


class AdminView(ModelView):
    def __init__(self, model, *args, **kwargs):
        super().__init__(model, *args, **kwargs)


def setup_admin(app):
    app.secret_key = os.environ.get("FLASK_APP_KEY", "sample key")
    app.config["FLASK_ADMIN_SWATCH"] = "cerulean"
    admin = Admin(app, name="El Pie Castillo Admin", template_mode="bootstrap3")

    admin.add_view(AdminView(Cliente, db.session))
    admin.add_view(AdminView(Reserva, db.session))
    admin.add_view(AdminView(PlatoCarta, db.session))
