from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return 'Server is running'

@app.route('/check_spam', methods=['POST'])
def check_spam():
    try:
        email_input = request.json.get('emailInput')

        spam_result = 'Spam' if 'spam' in email_input.lower() else 'Not Spam'

        return jsonify({'result': spam_result})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
