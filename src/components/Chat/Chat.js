import React, { useState } from "react";

import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatBottom from "./ChatBottom";

import Grid from "@material-ui/core/Grid";

const Chat = () => {
  const [messageInput, setMessageInput] = useState("");

  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <Grid container className="chat-container">
          <Grid item xs={11} sm={10} md={9} lg={7} xl={6}>
            <div className="card card-bordered">
              <ChatHeader />
              <ChatBody messageInput={messageInput} />
              <ChatBottom
                messageInput={messageInput}
                setMessageInput={setMessageInput}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Chat;
