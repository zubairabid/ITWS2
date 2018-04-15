import os
basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    POSTS_PER_PAGE = 3

    # UPLOAD_FOLDER = basedir + 'static/img/'
    UPLOADS_DEFAULT_DEST = basedir + '/static/img/'
    UPLOADED_PHOTOS_DEST = basedir + '/static/img/'
