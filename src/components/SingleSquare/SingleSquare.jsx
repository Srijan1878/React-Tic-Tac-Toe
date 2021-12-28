import React, { useState, useEffect } from "react";
import { chooseCurrentMove } from "../../chooseCurrentMove";
import { moves } from "../../moves";
import Cross from "../Cross/Cross";
import classes from "./SingleSquare.module.css";
import Circle from '../Circle/Circle'

export default function SingleSquare(props) {
  let {
    innerIndex,
    outerIndex,
    setNumberOfMoves,
    setGameBoard,
    lastMove,
    setLastMove,
    gameOverStatus,
  } = props;

  //*States
  const [makeMove, setMakeMove] = useState(false);
  const [nextMove, setNextMove] = useState();

  //* function to find the current the move and populating the 2D matrix accordingly
  const extractIndexHandler = () => {
    setMakeMove(true);
    let FindMoveElement = chooseCurrentMove(lastMove);
    setNextMove(FindMoveElement);
    setGameBoard((prevGameStatus) =>
      prevGameStatus.map((element, outerindex) =>
        element.map((innerElement, innerindex) => {
          if (outerIndex === outerindex && innerIndex === innerindex) {
            setLastMove(FindMoveElement);
            return FindMoveElement;
          } else return prevGameStatus[outerindex][innerindex];
        })
      )
    );
    setNumberOfMoves((prevCount) => prevCount + 1);
  };
  
  //*Emptying the board if game is over
  useEffect(() => {
   setMakeMove(false);
  },[gameOverStatus])

  return (
    <div className={classes.singleSquare} onClick={extractIndexHandler}>
      {makeMove && (nextMove === moves.Circle ? <Circle /> : <Cross />)}
    </div>
  );
}
