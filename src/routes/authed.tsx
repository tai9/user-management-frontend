import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Footer from "../components/Footer";
import ManagementContainer from "../containers/Management/ManagementContainer";
import ProfileContainer from "../containers/Profile/ProfileContainer";

const Routes: React.FC = () => {
  return (
    <Router>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path="/" component={ProfileContainer} />
        <Route exact path="/me" component={ProfileContainer} />
        <Route exact path="/management" component={ManagementContainer} />

        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
