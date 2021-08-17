import React, { useEffect } from "react";
import logo from "./logo512.png";
import "./App.css";

import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";

function App() {
  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      addResponseMessage("test 1");
    }
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    console.log(newMessage);
    // Now send the message throught the backend API
  };

  return (
    <div className="App">
      <Widget
        title="Chat app"
        subtitle="Chat with your buddies"
        profileAvatar={logo}
        handleNewUserMessage={handleNewUserMessage}
        resizable={true}
        fullScreenMode={false}
        emojis={true}
        showTimeStamp={false}
      />
    </div>
  );
}

export default App;
