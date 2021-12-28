import React from 'react'
import classes from './GameOverModal.module.css'

export default function GameOverModal({Player, drawStatus}) {
    return (
        <div className={classes.gameOverModalContainer}>
            {drawStatus?<h1>Draw</h1>:<h1>Player {Player} Wins</h1>}
        </div>
    )
}
