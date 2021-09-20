import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import React, { useState } from 'react';
import Home from "./components/Home";
import Admin from "./components/Admin";
import Notfound from "./components/Notfound";
import Detail from "./components/Detail";

export const adminContext = React.createContext();

export default function App() {

  const [state, setstate] = useState(false);

  return (
    <div className="App">
      <Router>
        <Switch>
          <adminContext.Provider value={[state, setstate]}>
            <Route exact path="/"><Login /></Route>
            <Route exact path='/admin'><Admin /></Route>
            <Route exact path="/home"><Home /></Route>
            <Route exact path="/detail/:id"><Detail /></Route>
            <Route component={Notfound} />
          </adminContext.Provider>
        </Switch>
      </Router>

    </div>
  );
}

