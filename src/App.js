import AppRoute from "./routes/AppRoute";
import { Switch, Redirect, useLocation, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { AllRoutes, HOME_PAGE } from "./routes/routes";
import { Panellum } from "./pages/Landing/Panellum";
import { HomePage } from "./pages/Landing/HomePage";
import { EventPage } from "./pages/Landing/EventPage";
import { WisudawanPage } from "./pages/Galeri/WisudawanPage";
import { OrganisasiPage } from "./pages/Galeri/OrganisasiPage";
import { GaleriWisudawan } from "./pages/Galeri/GaleriWisudawan";
import { ApresiasiPage } from "./pages/Galeri/ApresiasiPage";
import { Navbar } from "./components/Template/Navbar";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          {AllRoutes.map((route) => (
            <AppRoute
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
          <Redirect to={HOME_PAGE.path} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
