import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const ChatContext = createContext();

// Replace this with your backend URL
const SOCKET_SERVER_URL = "http://localhost:4000";

export const ChatProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);
    const [currentRoom, setCurrentRoom] = useState(null);

    useEffect(() => {
        const newSocket = io(SOCKET_SERVER_URL);
        setSocket(newSocket);

        newSocket.on("receive_message", (data) => {
            setMessages((prev) => [...prev, data]);
        });

        return () => newSocket.disconnect();
    }, []);

    const joinRoom = (roomId) => {
        if (socket && roomId) {
            socket.emit("join_room", roomId);
            setCurrentRoom(roomId);
        }
    };

    const sendMessage = (message) => {

        if (socket && currentRoom && message) {

            socket.emit("send_message", { roomId: currentRoom, message });
            setMessages((prev) => [
                ...prev,
                {
                    message,
                    sender: socket.id,
                    isSend: true,
                    time: new Date().toLocaleTimeString(),
                },
            ]);
        }
    };

    return (
        <ChatContext.Provider value={{ socket, messages, sendMessage, joinRoom, currentRoom }}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => useContext(ChatContext);
