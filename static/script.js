// Step 1: Get public IP from browser
fetch('https://api.ipify.org?format=json')
    .then(res => res.json())
    .then(ipData => {

        const userIP = ipData.ip;

        // Step 2: Send IP to Flask backend
        return fetch(`/get-location?ip=${userIP}`);
    })
    .then(res => res.json())
    .then(data => {

        console.log(data); // DEBUG

        // Safety check
        if (!data.latitude || !data.longitude) {
    alert("Unable to fetch location data.");
    return;
}

document.getElementById("ip").innerText = data.ip || "N/A";
document.getElementById("city").innerText = data.city || "N/A";
document.getElementById("region").innerText = data.region || "N/A";
document.getElementById("country").innerText = data.country || "N/A";
document.getElementById("lat").innerText = data.latitude;
document.getElementById("lon").innerText = data.longitude;

        const map = L.map('map').setView(
            [data.latitude, data.longitude],
            10
        );

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        L.marker([data.latitude, data.longitude])
            .addTo(map)
            .bindPopup("User Location (IP Based)")
            .openPopup();
    })
    .catch(err => {
        console.error("Error fetching location:", err);
        alert("Error fetching location");
    });
