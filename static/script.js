fetch('/get-location')
    .then(response => response.json())
    .then(data => {

        document.getElementById("ip").innerText = data.ip;
        document.getElementById("city").innerText = data.city;
        document.getElementById("region").innerText = data.region;
        document.getElementById("country").innerText = data.country_name;
        document.getElementById("lat").innerText = data.latitude;
        document.getElementById("lon").innerText = data.longitude;

        // Initialize Map
        const map = L.map('map').setView([data.latitude, data.longitude], 10);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap'
        }).addTo(map);

        L.marker([data.latitude, data.longitude])
            .addTo(map)
            .bindPopup("User Location (IP Based)")
            .openPopup();
    })
    .catch(error => {
        console.error("Error fetching location:", error);
    });
