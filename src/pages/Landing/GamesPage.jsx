import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Picrew } from "../../components/LandingComponents/Games/Picrew";
import { GatherTown } from "../../components/LandingComponents/Games/GatherTown";
import { Majalah } from "../../components/LandingComponents/Games/Majalah";
import { Template } from "../Template/Template";
import "./GamesPage.scss";
import Button from "../../components/shared/Button";

const GAMES = [
  {
    title: "Avatar Maker",
    Component: <Picrew />,
  },
  {
    title: "Gather Town",
    Component: <GatherTown />,
  },
  {
    title: "Mercusuar",
    Component: <Majalah />,
  },
];

export const GamesPage = () => {
  const [gamesIdx, setGamesIdx] = useState(0);
  return (
    <Template>
      <div className="games-container">
        <h1>Wispril Products!</h1>
        <div className="games-switch">
          {GAMES.map((game, idx) => (
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
            {GAMES[gamesIdx].Component}
          </motion.div>
        </AnimatePresence>
      </div>
    </Template>
  );
};
