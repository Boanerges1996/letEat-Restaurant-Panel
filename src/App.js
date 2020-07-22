import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/landing/landing";
import Login from "./components/login/login";
import SignUp from "./components/signup/signup";
import "./App.css";
import Main from "./components/main/Main";
import ErrorPage from "./components/404page";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/main" component={Main} />
            <Route component={ErrorPage} /> {/** Default 404 error page */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
