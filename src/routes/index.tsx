import React from "react";

import Authed from "./authed";
import Public from "./public";

const Routes: React.FC = () => {
  const loggedIn = true;
  return loggedIn ? <Authed /> : <Public />;
};

export default Routes;
