import "./App.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const pageSize = 5;
  //api key

  // surendar api key- c7ceae77aef34e06a6119a5668fbb9f9
  // afrith  const apiKey = '74c081ee99fc45baab65b34c02be0f11'
  const apiKey = "c7ceae77aef34e06a6119a5668fbb9f9";
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Switch>
          <Route exact path="/">
            <News
              darkMode={darkMode}
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/NewsMonkey/business">
            <News
              darkMode={darkMode}
              setProgress={setProgress}
              apiKey={apiKey}
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
            />
          </Route>
          <Route exact path="/NewsMonkey/entertainment">
            <News
              darkMode={darkMode}
              setProgress={setProgress}
              apiKey={apiKey}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          </Route>
          <Route exact path="/NewsMonkey/general">
            <News
              darkMode={darkMode}
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          </Route>
    
          <Route exact path="/NewsMonkey/health">
            <News
              darkMode={darkMode}
              setProgress={setProgress}
              apiKey={apiKey}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />
          </Route>
          <Route exact path="/NewsMonkey/science">
            <News
              darkMode={darkMode}
              setProgress={setProgress}
              apiKey={apiKey}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />
          </Route>
          <Route exact path="/sports">
            <News
              darkMode={darkMode}
              setProgress={setProgress}
              apiKey={apiKey}
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          </Route>
          <Route exact path="/NewsMonkey/technology">
            <News
              darkMode={darkMode}
              setProgress={setProgress}
              apiKey={apiKey}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
