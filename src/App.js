import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/a-propos" exact component={About} />
          <Route component={NotFound}/>

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
