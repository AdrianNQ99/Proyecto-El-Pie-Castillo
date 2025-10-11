import os
from flask_admin import Admin
from models import db, Cliente, Reserva, PlatoCarta, SeccionCarta
from flask_admin.contrib.sqla import ModelView
from sqlalchemy.orm.properties import RelationshipProperty
from wtforms import SelectField


class AdminView(ModelView):
    def __init__(self, model, *args, **kwargs):
        super().__init__(model, *args, **kwargs)


class PlatoCartaAdmin(ModelView):
    form_overrides = {
        'seccion': SelectField
    }
    
    form_args = {
        'seccion': {
            'choices': [(choice.name, choice.value) for choice in SeccionCarta]
        }
    }


def setup_admin(app):
    app.secret_key = os.environ.get("FLASK_APP_KEY", "sample key")
    app.config["FLASK_ADMIN_SWATCH"] = "cerulean"
    admin = Admin(app, name="El Pie Castillo Admin", template_mode="bootstrap3")

    admin.add_view(AdminView(Cliente, db.session))
    admin.add_view(AdminView(Reserva, db.session))
    admin.add_view(PlatoCartaAdmin(PlatoCarta, db.session))
