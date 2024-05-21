from flask import Flask, jsonify, render_template
import requests

app = Flask(__name__)

# Define your API endpoint
API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key=${AIzaSyDOlx-o_m8mlGU8OWG0TgM8peNfZqB1ZNo} '
# Define a route to render the HTML page
@app.route('/')
def index():
    return render_template('index.html')

# Define a route to fetch data from the API
@app.route('/api/data')
def get_data():
    # Make a request to the API
    response = requests.get(API_URL)
    
    # Check if the request was successful
    if response.status_code == 200:
        # Return the data as JSON
        return jsonify(response.json())
    else:
        # Return an error message if the request failed
        return jsonify({'error': 'Failed to fetch data from API'}), 500

if __name__ == '__main__':
    # Run the Flask app
    app.run(debug=True)
