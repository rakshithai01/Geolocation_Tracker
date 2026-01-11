from flask import Flask, render_template, jsonify, request
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get-location')
def get_location():
    # Get user's IP
    ip = request.remote_addr

    # If running locally, this helps testing
    if ip == '127.0.0.1':
        ip = ''

    # Free IP Geolocation API
    url = f"https://ipapi.co/{ip}/json/"
    response = requests.get(url)
    data = response.json()

    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
