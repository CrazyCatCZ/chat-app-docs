import React, { useState, useRef, useEffect } from "react";
import Message from "./Message";
import { axiosInstance } from "../axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ws_scheme = window.location.protocol === "https:" ? "wss://" : "ws://";
const ws = new WebSocket(ws_scheme + BASE_URL + "/ws/chat/public_chat/");

const ChatBody = ({ messageInput }) => {
  const messageRef = useRef(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (messageRef) {
      messageRef.current.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const {
        data: { messages: allMessages },
      } = await axiosInstance.get("/chat/get-first-chatroom/");
      setMessages(allMessages);
    };
    fetch();
  }, []);

  ws.onmessage = (e) => {
    const messageObject = JSON.parse(e.data);
    setMessages([...messages, messageObject]);
  };

  return (
    <div
      className="ps-container ps-theme-default ps-active-y"
      id="chat-content"
      style={{
        overflowY: "scroll !important",
        height: "400px !important",
      }}
    >
      {messages ? (
        <div ref={messageRef} className="messages-container">
          {messages.map(({ id, username, text }, index) => {
            // If previous user is not same as a current user, then show a name above message
            let previousUser = "";
            const previousMessage = messages[index - 1];
            if (previousMessage !== undefined) {
              previousUser = previousMessage.username;
            }

            return (
              <Message
                key={id}
                username={username}
                text={text}
                previousUser={previousUser}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default ChatBody;
