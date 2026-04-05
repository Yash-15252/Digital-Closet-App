from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
from flask_uploads import UploadSet, IMAGES, configure_uploads
from flask_sqlalchemy import SQLAlchemy
from models import db, Clothing, Outfit
from config import Config
from werkzeug.utils import secure_filename
from random import choice
import os
import json

app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)

# Uploads setup
images = UploadSet('images', IMAGES)
configure_uploads(app, images)



@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        file = request.files.get('file')
        category = request.form.get('category')
        if file and category:
            filename = images.save(file)
            clothing = Clothing(image_path=images.url(filename), category=category)
            db.session.add(clothing)
            db.session.commit()
            flash('Clothing item uploaded successfully!')
            return redirect(url_for('gallery'))
        flash('Please select a file and category.')
    categories = ['Tops', 'Bottoms', 'Shoes', 'Accessories', 'Outerwear']
    return render_template('upload.html', categories=categories)

@app.route('/gallery')
def gallery():
    clothings = Clothing.query.all()
    return render_template('gallery.html', clothings=clothings)

@app.route('/generate_outfit')
def generate_outfit():
    categories = ['Tops', 'Bottoms', 'Shoes', 'Accessories']
    outfit = {}
    for cat in categories:
        items = Clothing.query.filter_by(category=cat).all()
        if items:
            outfit[cat] = choice(items).image_path
    if outfit:
        outfit_obj = Outfit(outfit_data=json.dumps(outfit))
        db.session.add(outfit_obj)
        db.session.commit()
        return render_template('outfit.html', outfit=outfit)
    flash('No items in some categories. Upload more clothes!')
    return redirect(url_for('index'))

@app.route('/outfits')
def outfits():
    outfits_list = Outfit.query.all()
    return render_template('outfits.html', outfits=outfits_list)

@app.route('/save_outfit', methods=['POST'])
def save_outfit():
    data = request.json
    outfit_obj = Outfit(outfit_data=json.dumps(data))
    db.session.add(outfit_obj)
    db.session.commit()
    return jsonify({'status': 'saved'})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)

