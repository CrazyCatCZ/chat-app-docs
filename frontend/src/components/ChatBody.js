import React from "react";

const localHost = "127.0.0.1:8000";
const ws = new WebSocket("ws://" + localHost + "/ws/chat/public_chat/");

const ChatBody = ({ messageInput }) => {
  ws.onmessage = (e) => {
    const text = JSON.parse(e.data)["message"];
    const div = document.createElement("div");
    div.innerHTML = text;
    document.getElementById("chat-content").appendChild(div);
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
      <div className="media media-chat">
        <div className="media-body">
          <p>Okay</p>
        </div>
      </div>
      <div className="media media-chat">
        <div className="media-body">
          <p>Okay</p>
        </div>
      </div>
      <div className="user-chat-container media media-chat media-chat-reverse">
        <div className="media-body">
          <p>That's awesome!</p>
          <p>I will meet you Sandon Square sharp at 10 AM</p>
          <p>Is that okay?</p>
        </div>
      </div>
      <div className="media media-chat">
        {" "}
        <div className="media-body">
          <p>Okay i will meet you on Sandon Square </p>
        </div>
      </div>
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
    </div>
  );
};

export default ChatBody;
