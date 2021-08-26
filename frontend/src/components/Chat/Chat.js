import React, { useState } from "react";

import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatBottom from "./ChatBottom";

const Chat = () => {
  const [messageInput, setMessageInput] = useState("");

  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="main-container row container d-flex justify-content-center">
          <div className="col-md-6">
            <div className="card card-bordered">
              <ChatHeader />
              <ChatBody messageInput={messageInput} />
              <ChatBottom
                messageInput={messageInput}
                setMessageInput={setMessageInput}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
