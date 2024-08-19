from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/trello-webhook', methods=['POST'])
def trello_webhook():
    data = request.json
    card_name = data.get('card', {}).get('name')
    card_id = data.get('card', {}).get('id')
    
    # Print "Hello World!" when the webhook is received
    print(f"Hello World! - Card Name: {card_name}, Card ID: {card_id}")
    
    return jsonify({'status': 'success'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
