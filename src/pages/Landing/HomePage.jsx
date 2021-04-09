import React, { lazy, Suspense } from "react";

import { Template } from "../Template/Template";
import { VisiMisi } from "../VisiMisi";
import "./HomePage.scss";

const Parallax = lazy(() =>
  import("../../components/LandingComponents/Parallax")
);

export const HomePage = () => {
  return (
    <Template nocontain>
      <Suspense fallback={""}>
        <Parallax />
      </Suspense>
      <VisiMisi />
    </Template>
  );
};
