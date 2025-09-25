from flask import Blueprint, render_template, request, flash, jsonify
from flask_login import login_required, current_user
from .models import Note,User
from . import db
import json

views = Blueprint('views', __name__)


@views.route('/', methods=['GET'])
@login_required
def home():
    if request.method == 'GET': 
        pagina = "home"
    return render_template("home.html", user=current_user, pagina=pagina, full_height_container=False)


@views.route('/delete-note', methods=['POST'])
def delete_note():  
    note = json.loads(request.data) # this function expects a JSON from the INDEX.js file 
    noteId = note['noteId']
    note = Note.query.get(noteId)
    if note:
        if note.user_id == current_user.id:
            db.session.delete(note)
            db.session.commit()

    return jsonify({})


@views.route('/sobre-projeto', methods=['GET'])
@login_required
def projeto():
    return render_template("projeto.html", user=current_user, full_height_container=True)


@views.route('/ranking', methods=['GET'])
@login_required
def ranking():
    if request.method == 'GET': 
        args = {'method': 'get', 'suffix': 'ranking', 'route': 'ranking/get'}
        users = User.query.all()
        list_player = []
        for user in users:
            player = User.query.filter_by(id=user.id).first()

            tempo = player.timer or 0
            minutos = tempo // 60
            segundos = tempo % 60

            list_player.append({
                "nome": player.first_name,
                "personagem": player.character,
                "timer": f'{minutos:02}:{segundos:02}',
                "Level": player.level,
                "zerou": player.win,
            }) 

        args['response'] = list_player
        return render_template("ranking.html", user=current_user, full_height_container=True, args=args)

@views.route('/perfil', methods=['GET'])
@login_required
def perfil():
        if request.method == 'GET':
            args = {'method': 'get', 'suffix': 'perfil', 'route': 'perfil/get'}
            user = User.query.filter_by(id=current_user.id).first()
            minutos = user.timer // 60
            segundos = user.timer % 60

            args['response'] = {
                "id": user.id, 
                "email": user.email, 
                "password": user.password, 
                "first_name": user.first_name,
                "character": user.character,
                "win": user.win,
                "level": user.level,
                "timer": f'{minutos:02}:{segundos:02}'
            }
            return render_template("perfil.html", user=current_user, args=args, full_height_container=True)


@views.route('/play-game', methods=['GET', 'POST'])
@login_required
def game():
    if request.method == 'POST':
        data = json.loads(request.data)
        user = User.query.filter_by(id=current_user.id).first()
 
        if(data.get('character')):
            user.character = data['character']
        if(data.get('win')):
            user.win = data['win']
        if(data.get('level') == 0):
            user.level = data['level']
        db.session.commit()
    return render_template("game.html", user=current_user, full_height_container=False)


@views.route('/save-game', methods=['POST'])
@login_required
def save_game():
    if request.method == 'POST':
        args = {'method': 'post', 'suffix': 'game', 'route': 'game/save'}
        data = json.loads(request.data)
        user = User.query.filter_by(id=current_user.id).first()
        user.startX = data['startX']
        user.startY = data['startY']
        user.level = data['level']
        user.timer = data['timer'] 
        db.session.commit()
        return args
    

@views.route('/get-game-data', methods=['GET'])
@login_required
def get_game_data():
    if request.method == 'GET':
        args = {'method': 'get', 'suffix': 'game', 'route': 'game/get'}
        user = User.query.filter_by(id=current_user.id).first()
        args['response'] = {
                "character": user.character,
                "win": user.win,
                "level": user.level,
                "name": user.first_name,
                "startX": user.startX,
                "startY": user.startY,
                "timer": user.timer
            }
        return args