from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from WebSocket_Folder.client import manager

router = APIRouter()

@router.websocket('/ws')
async def websocket_endpoint(websocket: WebSocket):
    print("🔥 CONNECTED SUCCESS")
    await manager.connect(websocket)

    try:
        while True:
            await websocket.receive_text()
    except WebSocketDisconnect:
        manager.disconnect(websocket)