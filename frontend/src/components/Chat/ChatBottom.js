import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const localHost = "127.0.0.1:8000";
const ws = new WebSocket("ws://" + localHost + "/ws/chat/public_chat/");

const ChatBottom = ({ messageInput, setMessageInput }) => {
  const message = {
    action: "subscribe_instance",
    user: "admin",
    text: messageInput,
    room_name: "Official Public Chat",
  };

  const sendMessage = (e) => {
    e.preventDefault();

    if (messageInput !== "") {
      setMessageInput("");
      ws.send(JSON.stringify(message));
    }
  };

  return (
    <form onClick={sendMessage} onSubmit={sendMessage}>
      <div className="publisher bt-1 border-light">
        <input
          onChange={(e) => setMessageInput(e.target.value)}
          value={messageInput}
          className="publisher-input"
          placeholder="Write something..."
        />{" "}
        <FontAwesomeIcon className="icons" size="lg" icon={faSmile} />
        <FontAwesomeIcon
          type="submit"
          className="icons"
          size="lg"
          icon={faPaperPlane}
        />
      </div>
    </form>
  );
};

export default ChatBottom;
