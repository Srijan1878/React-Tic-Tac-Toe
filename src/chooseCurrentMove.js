import { moves } from "./moves"

//*Switch statement to choose the current move in regard to the lastMove
export const chooseCurrentMove = (lastMove) => {    
   switch(lastMove){
    case '':
        return moves.Cross
    case 'X':
        return moves.Circle
    case 'O':
        return moves.Cross
    default: 
        alert('Invalid Input')
   }
}