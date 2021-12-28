import { moves } from "../moves";

//*The main logic function which checks if the game is over by traversing over the 2D array of the board.
export const checkIfGameOver = (gameMatrixStatus) => {
  let MatchFoundStatus = false
  for (let i = 0; i < gameMatrixStatus.length; i++) {
    let j = 0;
    let MatchCount = {
      PlayerOne: {
        horizontal: 0,
        vertical: 0,
        diagonal: {
          normal: 0,
          reverse: 0,
        },
      },
      PlayerTwo: {
        horizontal: 0,
        vertical: 0,
        diagonal: {
          normal: 0,
          reverse: 0,
        },
      },
    };
    while (j < gameMatrixStatus[i].length) {
      if (gameMatrixStatus[i][j] === moves.Cross) {
        MatchCount.PlayerOne.horizontal++;
      }
      if (gameMatrixStatus[i][j] === moves.Circle) {
        MatchCount.PlayerTwo.horizontal++;
      }
      if (gameMatrixStatus[j][i] === moves.Circle){
        MatchCount.PlayerTwo.vertical++;
      }
      if (gameMatrixStatus[j][i] === moves.Cross){
        MatchCount.PlayerOne.vertical++;
      }      
      if (gameMatrixStatus[j][j] === moves.Cross)
        MatchCount.PlayerOne.diagonal.normal++;
      if (gameMatrixStatus[j][j] === moves.Circle)
        MatchCount.PlayerTwo.diagonal.normal++;
      if (
        gameMatrixStatus[j][gameMatrixStatus.length - 1 - j] === moves.Cross
      ) {
        MatchCount.PlayerOne.diagonal.reverse++;
      }
      if (gameMatrixStatus[j][gameMatrixStatus.length - 1 - j] === moves.Circle)
        MatchCount.PlayerTwo.diagonal.reverse++;
      j++;
    }
    Object.keys(MatchCount).map((element) => {
     Object.keys(MatchCount[element]).map((innerKey)=>{
        if(innerKey!=='diagonal') {
          if(MatchCount[element][innerKey] > 2) {
            MatchFoundStatus = true
          }
        }
        else {
          if(MatchCount[element][innerKey].normal > 2 || MatchCount[element][innerKey].reverse > 2) {
            MatchFoundStatus = true
          }
        }
    })
    })
  }
  return MatchFoundStatus
};
