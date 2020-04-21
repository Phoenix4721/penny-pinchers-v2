import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Provider } from 'react-globally'
import ChatApp from './components/ChatApp/ChatApp.js';

const initialState = {
    id: ''
  }


ReactDOM.render(
<Provider globalState={initialState}>
  <App />
</Provider>
, document.getElementById("root"));

ReactDOM.render(
  <React.StrictMode>
    <ChatApp />
  </React.StrictMode>,
  document.getElementById('chat-root')
);