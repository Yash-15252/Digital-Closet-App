function saveOutfit(outfit) {
    fetch('/save_outfit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(outfit)
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'saved') {
            alert('Outfit saved successfully!');
            window.location.href = '/outfits';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error saving outfit.');
    });
}

