import React, { Suspense } from "react";
import { Route } from "react-router-dom";

const AppRoute = ({ component: Component, path }) => {
  return (
    <Route
      path={path}
      render={(props) => (
        <Suspense fallback={""}>
          <Component {...props} />
        </Suspense>
      )}
    />
  );
};

export default AppRoute;
