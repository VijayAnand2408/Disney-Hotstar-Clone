import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import React from 'react'
import Admin from "./components/Admin";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch> 
                  <Route exact path="/"><Login /></Route>
                  
          </Switch>
      </Router>
    
    </div>
  );
}

export default App;