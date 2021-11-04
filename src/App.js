import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Rank from "./pages/Rank";
import Tft from "./pages/Tft";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/a-propos" exact component={About} />
          <Route path="/rank" exact component={Rank} />
          <Route path="/tft" exact component={Tft} />
          <Route component={NotFound}/>

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
