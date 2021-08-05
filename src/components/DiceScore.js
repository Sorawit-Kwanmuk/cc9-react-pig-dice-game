// import React, { useState } from 'react';

function DiceScore(props) {
  const handleClickRoll = () => {
    // const newDiceScore = Math.floor(Math.random() * 6 + 1);
    // // props.setDiceScore(newDiceScore);
    // if (newDiceScore !== 1) {
    //   props.setRoundScore(props.roundScore + newDiceScore);
    // } else {
    //   const newCurrentPlayer = props.currentPlayer === 0 ? 1 : 0;
    //   props.setCurrentPlayer(newCurrentPlayer);
    //   props.setRoundScore(0);
    // }
    props.rollDice();
  };
  return (
    <div className='card'>
      <div className='row'>
        <button className='btn btn-danger btn-fw' onClick={handleClickRoll}>
          Roll
        </button>
        <button className='btn btn-success btn-fw' onClick={props.keepScore}>
          Keep
        </button>
      </div>
      <div className='row'>
        <div className='dice-score'>{props.diceScore}</div>
      </div>
      <div className='row'>
        <p className='round-score'>Round Score: {props.roundScore}</p>
      </div>
    </div>
  );
}

export default DiceScore;
