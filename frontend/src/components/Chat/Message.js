import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const Message = ({ username, text, date }) => {
  const { user } = useContext(UserContext);

  return (
    <>
      {username === user ? (
        <div className="user-chat-container media media-chat media-chat-reverse">
          <div className="media-body">
            <p>{text}</p>
          </div>
        </div>
      ) : (
        <div className="media media-chat">
          <div className="media-body">
            <p>{text}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
