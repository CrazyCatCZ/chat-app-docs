import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ChatBottom = () => {
  return (
    <div className="publisher bt-1 border-light">
      {" "}
      <input
        className="publisher-input"
        type="text"
        placeholder="Write something..."
      />{" "}
      <FontAwesomeIcon className="icons" size="lg" icon={faSmile} />
      <FontAwesomeIcon className="icons" size="lg" icon={faPaperPlane} />
    </div>
  );
};

export default ChatBottom;
