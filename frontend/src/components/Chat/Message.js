import React from "react";

const Message = ({ username, text, date }) => {
  return (
    <>
      {username === "admin" ? (
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
