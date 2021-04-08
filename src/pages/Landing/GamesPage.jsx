import { useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { GatherTown } from "../../components/LandingComponents/Games/GatherTown";
import { Majalah } from "../../components/LandingComponents/Games/Majalah";
import { Template } from "../Template/Template";
import "./GamesPage.scss";
import Button from "../../components/shared/Button";
import { Loading } from "../../components/shared/Loading/Loading";
const Picrew = lazy(() =>
  import("../../components/LandingComponents/Games/Picrew")
);

const GAMES = [
  {
    title: "Avatar Maker",
    Component: (
      <Suspense fallback={<Loading />}>
        <Picrew />
      </Suspense>
    ),
  },
  {
    title: "Gather Town",
    Component: <GatherTown />,
    afterTgl10: true,
  },
  {
    title: "Mercusuar",
    Component: <Majalah />,
  },
];

const showGT = () => {
  const openDate = new Date("2021-04-10T00:00:01");
  return new Date(openDate).valueOf() < new Date().valueOf();
};

export const GamesPage = () => {
  const [gamesIdx, setGamesIdx] = useState(0);
  const gamesShown = GAMES.filter(
    (game) => (game.afterTgl10 && showGT()) || game.afterTgl10 === undefined
  );
  return (
    <Template>
      <div className="games-container">
        <h1>Wispril Products!</h1>
        <div className="games-switch">
          {gamesShown.map((game, idx) => (
            <Button
              active={idx === gamesIdx}
              key={idx}
              onClick={() => setGamesIdx(idx)}
            >
              {game.title}
            </Button>
          ))}
        </div>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={gamesIdx}
            initial={{ opacity: 0, x: "-50vw" }}
            animate={{ opacity: 1, x: "0vw" }}
            exit={{ opacity: 0, x: "50vw", transition: { delay: -1 } }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 14,
            }}
          >
            {gamesShown[gamesIdx].Component}
          </motion.div>
        </AnimatePresence>
      </div>
    </Template>
  );
};
