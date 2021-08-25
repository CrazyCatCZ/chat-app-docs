import React, { useEffect } from "react";
import "./Bootstrap.css";
import "./App.css";

import ChatHeader from "./components/ChatHeader";
import ChatBody from "./components/ChatBody";
import ChatBottom from "./components/ChatBottom";

function App() {
  useEffect(() => {
    const localHost = "127.0.0.1:8000";
    const ws = new WebSocket("ws://" + localHost + "/ws/chat/fdsfsdf/");

    const message = {
      action: "subscribe_instance",
      message: "test",
      //pk: 42,
      //request_id: 4,
    };
    ws.onopen = () => {
      ws.send(JSON.stringify(message));
    };
    ws.onmessage = (e) => {
      console.log(e.data);
    };
  }, []);

  return (
    <div className="App">
      <div className=" page-content page-container" id="page-content">
        <div className="padding">
          <div className="main-container row container d-flex justify-content-center">
            <div className="col-md-6">
              <div className="card card-bordered">
                <ChatHeader />
                <ChatBody />
                <ChatBottom />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
