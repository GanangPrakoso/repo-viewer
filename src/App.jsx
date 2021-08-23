import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Home from "./views/home";
import RepoViewer from "./views/repoViewer";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/repoviewer">
              <RepoViewer />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
