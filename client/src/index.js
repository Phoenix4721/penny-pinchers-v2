import React from "react";
import ReactDOM from "react-dom";
import ChatApp from './components/ChatApp/ChatApp.js';
import App from "./App";


ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
    <React.StrictMode>
      <ChatApp />
    </React.StrictMode>,
    document.getElementById('chat-root')
  );