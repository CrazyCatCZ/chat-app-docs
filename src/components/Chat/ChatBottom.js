import React, { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { UserContext } from "../Context/UserContext";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ws_scheme = window.location.protocol === "https:" ? "wss://" : "ws://";
const ws = new WebSocket("ws://" + BASE_URL + "/ws/chat/public_chat/");

const ChatBottom = ({ messageInput, setMessageInput }) => {
  const { user } = useContext(UserContext);
  const message = {
    action: "subscribe_instance",
    user: user,
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
    <form onSubmit={sendMessage}>
      <div className="publisher bt-1 border-light">
        <input
          onChange={(e) => setMessageInput(e.target.value)}
          value={messageInput}
          className="publisher-input"
          placeholder="Write something..."
        />{" "}
        <FontAwesomeIcon
          onClick={sendMessage}
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
