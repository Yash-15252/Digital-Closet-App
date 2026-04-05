import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import pytest
from app import app
from models import db, Clothing
from config import Config

@pytest.fixture
def client():
    app.config.from_object(Config)
    
    with app.test_client() as client:
        with app.app_context():
            db.create_all()
        yield client
        with app.app_context():
            db.drop_all()

def test_index(client):
    rv = client.get('/')
    assert rv.status_code == 200
    assert b'Digital Closet' in rv.data

def test_upload_get(client):
    rv = client.get('/upload')
    assert rv.status_code == 200

def test_gallery(client):
    rv = client.get('/gallery')
    assert rv.status_code == 200

