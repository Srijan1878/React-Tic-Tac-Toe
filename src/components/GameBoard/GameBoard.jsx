import React from "react";
import SingleSquare from "../SingleSquare/SingleSquare";
import classes from "./GameBoard.module.css";

const GameBoard = (props) => {
  let { gameBoard, gameOverStatus } = props;
  return (
    <div className={!gameOverStatus?classes.gameBoardContainer:classes.lockedGameBoardContainer}>
      {gameBoard.map((innerSet, outerIndex) =>
        innerSet.map((element, innerIndex) => (
          <SingleSquare
            innerIndex={innerIndex}
            outerIndex={outerIndex}
            {...props}
          />
        ))
      )}
    </div>
  );
};
export default React.memo(GameBoard);
