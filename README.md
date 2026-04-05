# Digital Closet App

A professional web application to manage your digital wardrobe. Upload photos of clothing items, tag them by category, generate random outfits, and save favorites.

## Features
- Upload clothing images with category tags (Tops, Bottoms, Shoes, Accessories, etc.)
- View gallery of all items
- Generate random outfit (one item per category)
- Save and view saved outfits
- Responsive UI with Bootstrap

## Tech Stack
- Backend: Flask, SQLAlchemy (SQLite)
- Frontend: HTML, CSS, JavaScript, Bootstrap 5
- Image handling: Flask-Uploads, Pillow

## Quick Start

1. Clone the repo:
   ```
   git clone https://github.com/yourusername/digital-closet-app.git
   cd digital-closet-app
   ```

2. Create virtual environment and install dependencies:
   ```
   python -m venv venv
   venv\\Scripts\\activate  # Windows
   pip install -r requirements.txt
   ```

3. Run the app:
   ```
   flask run
   ```

4. Open http://127.0.0.1:5000 in your browser.

## Usage
- **Upload**: Go to /upload, select image, choose category, submit.
- **Gallery**: View all items at /gallery.
- **Random Outfit**: Click 'Generate Outfit' on home.
- **Saved Outfits**: View at /outfits.

## Folder Structure
```
digital-closet-app/
├── app.py              # Main Flask app
├── models.py           # DB models
├── config.py           # Config
├── requirements.txt    # Dependencies
├── tests/              # Pytest tests
├── static/             # CSS, JS, uploads/
├── templates/          # HTML templates
├── instance/
│   └── app.db         # SQLite DB (auto-created)
├── .gitignore
└── README.md
```

## Testing
```
pytest tests/
```

## Deployment
Suitable for Heroku, Vercel, or Railway. Set `FLASK_ENV=production`.

## License
MIT License - feel free to use and modify.

