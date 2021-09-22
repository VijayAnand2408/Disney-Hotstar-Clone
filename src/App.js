import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import React, { useState } from 'react';
import Home from "./components/Home";
import Admin from "./components/admin/Admin";
import Notfound from "./components/Notfound";
import Detail from "./components/Detail";
import Edit from "./components/admin/Edit";
import Add from "./components/admin/Add";
import Delete from "./components/admin/Delete";


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
            <Route exact path="/add"><Add /></Route>
            <Route exact path="/detail/:id"><Detail /></Route>
            <Route exact path="/edit/:id"><Edit /></Route>
            <Route exact path="/delete/:id"><Delete/></Route>
          </adminContext.Provider>
          <Route component={Notfound} />
        </Switch>
      </Router>

    </div>
  );
}

