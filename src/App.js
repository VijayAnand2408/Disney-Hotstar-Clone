import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import React, { useEffect, useState } from 'react';
import Home from "./components/Home";
import ProtectedRoute from './components/ProtectedRoute'
import Admin from "./components/Admin";
import Notfound from "./components/Notfound";

function App() {
  const [state, setstate] = useState(false);

  const handleLogout = e => {
    e.preventDefault();
    setstate(false);
  }

  return (
    <div className="App">
      <h1>{state}</h1>
      <Router>
      <Header />
        <Switch> 
                  <Route exact path="/"><Login handler={state => setstate(state)}/></Route>
                  <Route path="/home"><Home /></Route>
                  {
                    setstate ? <Route exact path = '/admin'><Admin/></Route> : null 
                  }
                  <Route component={Notfound} />
          </Switch>
      </Router>
    
    </div>
  );
}

export default App;