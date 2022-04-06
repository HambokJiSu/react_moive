import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./routes/Home"
import Detail from "./routes/Detail"

//  Switch : 한 번에 하나의 Route만 랜더링 될 수 있게 지원

function App() {
  
  return (
    <Router>
      <Switch> 
      <Route path="/moive/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;