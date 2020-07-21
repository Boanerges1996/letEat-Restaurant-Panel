import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./components/landing/landing";
import Login from "./components/login/login";
import SignUp from "./components/signup/signup";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
