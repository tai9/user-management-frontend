import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignInContainer from "../containers/SignIn/SignInContainer";
import SignUpContainer from "../containers/SignUp/SignUpContainer";
import Footer from "../components/Footer";

const Routes: React.FC = () => {
  return (
    <Router>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path="/" component={SignInContainer} />
        <Route exact path="/signin" component={SignInContainer} />
        <Route exact path="/signup" component={SignUpContainer} />

        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
