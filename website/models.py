from . import db
from flask_login import UserMixin
from sqlalchemy.sql import func


class Note(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    data = db.Column(db.String(10000))
    date = db.Column(db.DateTime(timezone=True), default=func.now())
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.String(150))
    first_name = db.Column(db.String(150))
    character = db.Column(db.String(150), nullable=True)
    level = db.Column(db.Integer, default=0)
    startX = db.Column(db.Integer, default=128)
    startY = db.Column(db.Integer, default=700)
    win = db.Column(db.Boolean, default=False)

