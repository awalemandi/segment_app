from flask import Flask

app = Flask(__name__)

@app.route('/test', methods=['GET'])
def api():
    return {'quote': 'All that is gold does not glitter.'}
