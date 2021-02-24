import React, { Suspense } from "react";
import { Route } from "react-router-dom";

const AppRoute = ({ component: Component, path }) => {
  return (
    <Route exact={path === "/"} path={path}>
      <Suspense fallback={""}>
        <Component />
      </Suspense>
    </Route>
  );
};

export default AppRoute;
