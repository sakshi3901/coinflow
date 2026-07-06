from google.oauth2 import id_token
from google.auth.transport import requests
from jose import jwt
import os
from dotenv import load_dotenv
from datetime import datetime, timedelta

load_dotenv()

GOOGLE_CLIENT_ID = os.getenv('google_client_id')
SECRET_KEY = "ASDRGFEWLPK"
ALGORITHM = "HS256"

def verify_google_token(token: str):
    try:
        payload = id_token.verify_oauth2_token(token, requests.Request(), GOOGLE_CLIENT_ID)
        return payload
    except Exception as e:
        print("Google token verification failed:", str(e))
        raise ValueError(f"Invalid Google token: {e}")
    
def login_user(token: str):
    decodedToken = verify_google_token(token)


    if not decodedToken:
        raise ValueError("Token verification returned None")

    user = {
        'sub': decodedToken['sub'],
        'email': decodedToken['email'],
        'exp': datetime.utcnow() + timedelta(hours=3) 
    }

    return jwt.encode(user, SECRET_KEY, ALGORITHM)