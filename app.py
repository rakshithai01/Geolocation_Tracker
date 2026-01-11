from flask import Flask, render_template, jsonify, request
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get-location')
def get_location():
    ip = request.args.get('ip')

    if not ip:
        return jsonify({"error": "IP not provided"}), 400

    url = f"https://ipinfo.io/{ip}/json"
    response = requests.get(url)
    data = response.json()

    # Convert "lat,long" string to numbers
    if "loc" in data:
        lat, lon = data["loc"].split(",")
        data["latitude"] = float(lat)
        data["longitude"] = float(lon)

    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
