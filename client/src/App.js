import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/home";
import Signup from "./pages/signup";

function App() {
  return (
    <Router>
      <div>
       
      
          
            <Route exact path="/" component={Home} />
            <Route  path="/login" component={Home} />
            <Route  path="/signup" component={Signup} />
           
          

      </div>
    </Router>
  );
}

export default App;
