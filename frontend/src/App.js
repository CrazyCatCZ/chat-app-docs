import React from "react";
import "./Bootstrap.css";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faPaperPlane,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <div className=" page-content page-container" id="page-content">
        <div className="padding">
          <div className="main-container row container d-flex justify-content-center">
            <div className="col-md-6">
              <div className="card card-bordered">
                <div className="card-header">
                  <h4 className="card-title">
                    <strong>Chat</strong>
                  </h4>{" "}
                  Let's Chat App
                </div>
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
                      <p>We will go on sunday? </p>
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
                      tabindex="0"
                      style={{ left: "0px", width: "0px" }}
                    ></div>
                  </div>
                  <div
                    className="ps-scrollbar-y-rail"
                    style={{ top: "0px", height: "0px", right: "2px" }}
                  >
                    <div
                      className="ps-scrollbar-y"
                      tabindex="0"
                      style={{ top: "0px", height: "2px" }}
                    ></div>
                  </div>
                </div>
                <div className="publisher bt-1 border-light">
                  {" "}
                  <input
                    className="publisher-input"
                    type="text"
                    placeholder="Write something..."
                  />{" "}
                  <FontAwesomeIcon className="icons" size="lg" icon={faSmile} />
                  <FontAwesomeIcon
                    className="icons"
                    size="lg"
                    icon={faPaperPlane}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
