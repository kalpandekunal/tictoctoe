import React from 'react'
import "./ScoreBoard.css";

export const ScoreBoard = ({Score,xPlaying}) => {
    const {xScore,oScore} = Score;

  return (
    <div className='scoreboard'>
        <span className={`score x-score ${!xPlaying && "inactive"}`}>X : {xScore}</span>
        <span className={`score o-score ${xPlaying && "inactive"}`}>O : {oScore}</span>
    </div>
  )
}
