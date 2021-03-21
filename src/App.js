import { useEffect, Suspense, Component } from "react";
import { Redirect, Route, withRouter } from "react-router-dom";
import ReactGA from "react-ga";

import { AnimatedRoutes } from "./routes/AnimatedRoutes";
import { AllRoutes, HOME_PAGE } from "./routes/routes";
import { Loading } from "./components/shared/Loading/Loading";

function App() {
  // Analytics
  useEffect(() => {
    ReactGA.initialize("UA-190561410-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  // Scroll to top on switch pages
  class _ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0);
      }
    }
    render() {
      return this.props.children;
    }
  }
  const ScrollToTop = withRouter(_ScrollToTop);

  // components
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <ScrollToTop>
          <AnimatedRoutes>
            {AllRoutes.map(({ path, component: Component }) => (
              <Route
                exact
                key={path}
                path={path}
                render={() => <Component />}
              />
            ))}
            <Redirect to={HOME_PAGE.path} />
          </AnimatedRoutes>
        </ScrollToTop>
      </Suspense>
    </div>
  );
}

export default App;
