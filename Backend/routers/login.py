from fastapi import APIRouter
from services.auth_service import login_user
from pydantic import BaseModel

router = APIRouter()

class LoginRequest(BaseModel):
    token: str

@router.post('/auth')
def auth_login(param: LoginRequest):
    token = param.token
    return login_user(token)