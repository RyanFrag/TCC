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
    email = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(150), nullable=False)
    first_name = db.Column(db.String(150))
    character = db.Column(db.String(150))
    level = db.Column(db.Integer)
    startX = db.Column(db.Integer)
    startY = db.Column(db.Integer)
    timer = db.Column(db.Integer, default=0)  # <-- novo
    win = db.Column(db.Integer, default=0)    # <-- novo
