import { useEffect, Suspense } from "react";
import { Redirect, Route } from "react-router-dom";
import ReactGA from "react-ga";

import { AnimatedRoutes } from "./routes/AnimatedRoutes";
import { AllRoutes, HOME_PAGE } from "./routes/routes";

function App() {
  // Analytics
  useEffect(() => {
    ReactGA.initialize("UA-190561410-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  // components
  return (
    <div className="App">
      <Suspense fallback={""}>
        <AnimatedRoutes exitBeforeEnter initial={false}>
          {AllRoutes.map(({ path, component: Component }) => (
            <Route exact key={path} path={path} render={() => <Component />} />
          ))}
          <Redirect to={HOME_PAGE.path} />
        </AnimatedRoutes>
      </Suspense>
    </div>
  );
}

export default App;
