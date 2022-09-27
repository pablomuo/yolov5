#https://websockets.readthedocs.io/en/stable/ 
#https://websockets.readthedocs.io/en/stable/intro/tutorial2.html#broadcast

import websockets
import asyncio

PORT = 8000

connected = set()

async def echo(websocket, path):
    connected.add(websocket)
    async for message in websocket:
        #print("receive msg: ", message)
        # for conn in connected:
        #     if conn!= websocket:
        #         await conn.send(message)
        websockets.broadcast(connected, message)



start_server = websockets.serve(echo, "10.236.52.237", PORT)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
