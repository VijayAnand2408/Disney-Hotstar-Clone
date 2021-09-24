import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import React from 'react';
import Home from "./components/Home";
import Admin from "./components/admin/Admin";
import Notfound from "./components/Notfound";
import Detail from "./components/Detail";
import Edit from "./components/admin/Edit";
import Add from "./components/admin/Add";
import Delete from "./components/admin/Delete";


export default function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><Login /></Route>
          <Route exact path='/admin'><Admin /></Route>
          <Route exact path="/home"><Home /></Route>
          <Route exact path="/add"><Add /></Route>
          <Route exact path="/detail/:id"><Detail /></Route>
          <Route exact path="/edit/:id"><Edit /></Route>
          <Route exact path="/delete/:id"><Delete /></Route>
          <Route component={Notfound} />
        </Switch>
      </Router>

    </div>
  );
}

