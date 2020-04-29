import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Provider } from 'react-globally'

const initialState = {
    id: ''
  }


ReactDOM.render(
<Provider globalState={initialState}>
  <App />
</Provider>
, document.getElementById("root"));
