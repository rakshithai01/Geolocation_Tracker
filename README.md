# 🌍 Geolocation Tracker (IP-Based)

## 📌 Project Overview
The **Geolocation Tracker** is a full-stack web application developed using **Python (Flask)**, **HTML**, **CSS**, and **JavaScript**.  
It automatically detects a user's **public IP address from the browser**, fetches the **approximate geographical location** using an IP Geolocation API, and displays the location on an interactive map using **Leaflet.js** and **OpenStreetMap**.

This project follows an industry-standard approach where the frontend fetches the public IP and the backend processes geolocation data.

---

## 🚀 Features
- Automatic public IP detection
- No manual input required
- No GPS permission popup
- IP-based geolocation (city, region, country, latitude, longitude)
- Interactive map visualization
- Flask-based backend API
- Beginner-friendly and internship-ready

---

## 🛠 Technologies Used
- **Backend:** Python, Flask  
- **Frontend:** HTML, CSS, JavaScript  
- **Geolocation API:** ipinfo.io  
- **Map Library:** Leaflet.js  
- **Map Provider:** OpenStreetMap  

---

## 📂 Project Structure
```
Geolocation_Tracker/
│
├── app.py
├── templates/
│   └── index.html
└── static/
    ├── style.css
    └── script.js
```

---

## ⚙️ How It Works
1. Browser fetches the user's public IP.
2. IP is sent to Flask backend.
3. Backend queries the geolocation API.
4. Latitude & longitude are extracted.
5. Location is shown on an interactive map.

---

## ▶️ How to Run the Project

### 1️⃣ Install Dependencies
```bash
pip install flask requests
```

### 2️⃣ Run the App
```bash
python app.py
```

### 3️⃣ Open Browser
```
http://127.0.0.1:5000
```

---

## ⚠️ Important Notes
- Location accuracy is approximate
- VPNs/proxies may affect results
- IP-based geolocation is not GPS-accurate
- Intended for educational use only

---

## 🎯 Use Cases
- Internship / academic projects
- Flask learning projects
- API & map integration demos

---

## 👤 Author
**B Rakshith**  
🔗 LinkedIn: https://www.linkedin.com/in/buddineni-rakshith-4088a92a5/

---

## ⭐ Acknowledgements
- ipinfo.io  
- Leaflet.js  
- OpenStreetMap  

---

## 📜 License
Open-source project for learning and educational purposes.
