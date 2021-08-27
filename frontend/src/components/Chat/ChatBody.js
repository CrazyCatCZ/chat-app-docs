import React, { useState, useEffect } from "react";
import axios from "axios";
import Message from "./Message";
import { axiosInstance } from "../axios";

const localHost = "127.0.0.1:8000";
const ws = new WebSocket("ws://" + localHost + "/ws/chat/public_chat/");

const ChatBody = ({ messageInput }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const {
        data: { messages: allMessages },
      } = await axiosInstance.get("/chat/public-chatroom/19/");
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
        <>
          {messages.map(({ id, username, text, date }) => {
            return (
              <Message key={id} username={username} text={text} date={date} />
            );
          })}

          <div
            className="ps-scrollbar-x-rail"
            style={{ left: "0px", bottom: "0px" }}
          >
            <div
              className="ps-scrollbar-x"
              tabIndex="0"
              style={{ left: "0px", width: "0px" }}
            ></div>
          </div>
          <div
            className="ps-scrollbar-y-rail"
            style={{ top: "0px", height: "0px", right: "2px" }}
          >
            <div
              className="ps-scrollbar-y"
              tabIndex="0"
              style={{ top: "0px", height: "2px" }}
            ></div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ChatBody;
