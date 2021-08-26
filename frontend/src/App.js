import React, { useState } from "react";
import "./Bootstrap.css";
import "./App.css";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

import Navbar from "./components/Navbar";
import ChatHeader from "./components/ChatHeader";
import ChatBody from "./components/ChatBody";
import ChatBottom from "./components/ChatBottom";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#00b2ff",
      },
    },
  });
  const [messageInput, setMessageInput] = useState("");

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
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
      </ThemeProvider>
    </div>
  );
}

export default App;
