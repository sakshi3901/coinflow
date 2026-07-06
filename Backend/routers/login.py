from fastapi import APIRouter, HTTPException
from services.auth_service import login_user
from pydantic import BaseModel

router = APIRouter()

class LoginRequest(BaseModel):
    token: str

@router.post('/auth')
def auth_login(param: LoginRequest):
    try:
        jwt_token = login_user(param.token)
        return {"access_token": jwt_token}

    except Exception as e:
        raise HTTPException(status_code=401, detail=str(e))