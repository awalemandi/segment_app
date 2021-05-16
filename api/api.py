import os
from flask import Flask, request, redirect, session
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin


app = Flask(__name__)

ALLOWED_EXTENSION = {'mp4'}

app.config['UPLOAD_FOLDER'] = '/Users/jo/Mandi/Code/segment_app/api/uploads'

@app.route('/upload-video', methods=['POST'])
def upload_video():
    if request.method == 'POST':
        
        if request.files:
            video = request.files['video']
            video_name = secure_filename(file.filename)
            video.save(os.path.join(app.config["UPLOAD_FOLDER"], video_name))
            print(video)
            response='Video uploaded'
            return response

if __name__ == '__main__':
    app.run(debug=True)

CORS(app, expose_headers='Authorization')
