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
- Image handling: Manual secure upload

## Quick Start

1. Clone the repo:
   ```
   git clone https://github.com/Yash-15252/digital-closet-app.git
   cd digital-closet-app
   ```

2. Create virtual environment and install dependencies:
   ```
   python -m venv venv
   venv\Scripts\activate  # Windows
   pip install -r requirements.txt
   ```

3. Run the app:
   ```
   python app.py
   ```

4. Open http://127.0.0.1:5000

## Usage
- **Upload**: /upload
- **Gallery**: /gallery
- **Random Outfit**: Home button
- **Saved Outfits**: /outfits

## Folder Structure
```
digital-closet-app/
├── app.py
├── models.py
├── config.py
├── requirements.txt
├── tests/
├── static/
├── templates/
├── .gitignore
└── README.md
```

## Testing
```
pytest tests/
```

MIT License.
