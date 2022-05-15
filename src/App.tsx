import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Activity } from "./pages/Activity/index";
import { Statistics } from "./pages/Statistics/index";
import { Scoreboard } from "./pages/Scoreboard/index";
import Navbar from "./components/Navbar";

function App() {
  const config = {
    links: [
      { to: "/", text: "Home", component: Home },
      { to: "/activity", text: "Start activity", component: Activity },
      { to: "/statistics", text: "Statistics", component: Statistics },
      { to: "/scoreboard", text: "Score board", component: Scoreboard },
    ],
  };
  return (
    <Router>
      <Navbar config={config} />
      <Switch>
        {config.links.map((link: any) => (
          <Route exact path={link.to} component={link.component} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
