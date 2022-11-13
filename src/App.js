import * as React from "react";
import Login1 from "./components/Login1/Login1.jsx";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login2 from "./components/Login2/Login2.jsx";

function App() {
  return (
    <>
      <Router>
        <div>
        <div class="btn-group m-4"  role="group" aria-label="Basic example">
          <Link to="/login1" type="button" class="btn btn-primary">
            Login1
          </Link>
          <Link to="/login2" type="button" class="btn btn-primary">
            Login2
          </Link>
        </div>
        <Switch>
          <Route exact path="/login1" component={Login1} />
          <Route exact path="/login2" component={Login2} />

        </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
