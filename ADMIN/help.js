
const map = L.map('map').setView([20.5937, 78.9629], 5); // Centered on India


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);


let marker;
map.on('click', function (e) {
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;

    
    if (marker) {
        marker.setLatLng(e.latlng);
    } else {
        marker = L.marker(e.latlng).addTo(map);
    }

    
    document.getElementById('latitude').value = lat;
    document.getElementById('longitude').value = lng;
});


document.getElementById('location-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const lat = document.getElementById('latitude').value;
    const lng = document.getElementById('longitude').value;
    const message = document.getElementById('message').value;

    if (lat && lng && message) {
       
        const data = {
            latitude: lat,
            longitude: lng,
            message: message,
        };

        
        fetch('https://example.com/api/ndrf', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (response.ok) {
                alert('Location sent to NDRF successfully!');
            } else {
                alert('Failed to send location to NDRF.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while sending the data.');
        });
    } else {
        alert('Please mark a location on the map and fill in the message.');
    }
});
