import React, { useContext, useEffect, useState } from "react";
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { useChat } from "../../contexts/ChatContext";
import { useParams } from "react-router-dom";

import './chat.css';

const Chat = () => {
    const [input, setInput] = useState("");
    const params = useParams()
    const { socket, messages, sendMessage, joinRoom, currentRoom }
        = useChat()

    useEffect(() => {
        const roomId = params.id.split(":")[1]
        console.log("roomid", roomId);

        joinRoom(roomId)
    }, [socket])


    const handleSendMessage = () => {
        sendMessage(input)
        setInput("")
    }
    return (
        <div className="w-full min-h-[80vh] flex items-center justify-center  p-4">
            <div className="w-full md:w-1/3 h-[80vh]    rounded-lg ">
                <MainContainer className="bg-transparent border-none">
                    <ChatContainer className=" bg-transparent py-3">
                        <MessageList className="bg-transparent ">
                            {messages.map((data, index) => (
                                <Message
                                    key={index}
                                    model={{
                                        message: data.message,
                                        sentTime: data.sentTime,
                                        sender: data.sender,
                                        direction: data.isSend ? "outgoing" : "incoming"
                                    }}
                                />
                            ))}
                        </MessageList>

                        <MessageInput
                            className="bg-transparent"
                            value={input}
                            onSend={handleSendMessage}
                            onChange={(val) => setInput(val)}
                            placeholder="Type your message..."
                        />
                    </ChatContainer>
                </MainContainer>
            </div>
        </div>
    );
};

export default Chat;
