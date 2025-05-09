# Basic Socket Server (server.py)
import socket

def start_server():
    host = '127.0.0.1'
    port = 65432

    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_socket.bind((host, port))
    server_socket.listen()
    print(f"Server started. Listening on {host}:{port}")

    conn, addr = server_socket.accept()
    with conn:
        print('Connected by', addr)
        while True:
            data = conn.recv(1024)
            if not data:
                break
            print("Received from client:", data.decode())
            conn.sendall(data)  # Echo back to client

if __name__ == "__main__":
    start_server()
