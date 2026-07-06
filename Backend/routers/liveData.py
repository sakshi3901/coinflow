from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from WebSocket_Folder.client import manager
from services.cryptoData import CandleData

router = APIRouter()

@router.websocket('/ws')
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)

    try:
        while True:
            await websocket.receive_text()
    except WebSocketDisconnect:
        manager.disconnect(websocket)

@router.get('/chart')
def chartData():
    return CandleData()