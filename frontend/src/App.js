import React, { useState } from "react";
import "./Bootstrap.css";
import "./App.css";

import ChatHeader from "./components/ChatHeader";
import ChatBody from "./components/ChatBody";
import ChatBottom from "./components/ChatBottom";

function App() {
  const [messageInput, setMessageInput] = useState("");

  return (
    <div className="App">
      <div className=" page-content page-container" id="page-content">
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
    </div>
  );
}

export default App;
