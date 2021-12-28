import React, { useEffect, useState } from "react";
import { GameMatrix } from "../../Matrix";
import { moves } from "../../moves";
import { checkIfGameOver } from "../checkIfGameOver";
import GameBoard from "../GameBoard/GameBoard";
import GameOverModal from "../GameOverModal/GameOverModal";
import classes from "./GameLayout.module.css";

export default function GameLayout() {

  //*States
  const [gameBoard, setGameBoard] = useState(GameMatrix);
  const [numberOfMoves, setNumberOfMoves] = useState(0);
  const [lastMove, setLastMove] = React.useState("");
  const [showGameOverModal, setShowGameOverModal] = React.useState(false);
  const [dynamicColor, setDynamocColor] = useState(
    `#${Math.random().toString(16).slice(2, 8)}`
  );
  
  //* checking if game is over, if yes, show game over text 
  useEffect(() => {
    if (numberOfMoves >= 5 && numberOfMoves < 9) {
      let Status = checkIfGameOver(gameBoard);
      if (Status) {
        setShowGameOverModal(true);
        setTimeout(() => {
          setShowGameOverModal(false);
          setLastMove("");
          setGameBoard(GameMatrix);
        }, 1000);
      }
    }
    if (numberOfMoves === 9) {
        setShowGameOverModal(true);
        setTimeout(() => {
          setShowGameOverModal(false);
          setLastMove("");
          setGameBoard(GameMatrix);
        }, 1000);
    }
  }, [gameBoard, numberOfMoves]);
  
  //* changing color of the background
  useEffect(() => {
    let colorChangeTimeOut = setTimeout(() => {
      setDynamocColor(`#${Math.random().toString(16).slice(2, 8)}`);
    }, 2000);
    return () => {
      clearTimeout(colorChangeTimeOut);
    };
  }, [dynamicColor]);

  return (
    <div
      className={classes.GameLayoutContainer}
      style={{ backgroundColor: dynamicColor }}
    >
      <GameBoard
        gameBoard={gameBoard}
        setGameBoard={setGameBoard}
        lastMove={lastMove}
        setLastMove={setLastMove}
        setNumberOfMoves={setNumberOfMoves}
        gameOverStatus={showGameOverModal}
      />
      {showGameOverModal && (
        <GameOverModal
          Player={lastMove === moves.Cross ? "One" : "Two"}
          drawStatus={numberOfMoves === 9 ? true : false}
        />
      )}
    </div>
  );
}
