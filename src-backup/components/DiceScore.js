import React, { useState } from 'react';

function DiceScore() {
  const handleClickRoll = props => {
    const newDiceScore = Math.floor(Math.random() * 6) + 1;
    props.setDiceScore(newDiceScore);
    if (newDiceScore === 1) {
      const newCurrentPlayer = props.currentPlayer === 0 ? 1 : 0;
      props.setCurrentPlayer(newCurrentPlayer);
      props.setRoundScore(0);
    } else {
      props.setRoundScore(curRoundScore => curRoundScore + newDiceScore);
    }
    if (props.playerScore[props.currentPlayer] + props.roundScore + newDiceScore > 20) {
      alert(`Player ${props.currentPlayer + 1} Win`);
    }
  };
  const handleClickKeep = props => {
    // const newPlayerScore = [...props.];
    // newPlayerScore[props.currentPlayer] = newPlayerScore[props.currentPlayer] + props.roundScore;
    const newPlayerScore = props.map((item, index) =>
      props.currentPlayer === index ? item + props.roundScore : item
    );
    props.setPlayerScore(newPlayerScore);
    props.setRoundScore(0);
    const newCurrentPlayer = props.currentPlayer === 0 ? 1 : 0;
    props.setCurrentPlayer(newCurrentPlayer);
  };
  return (
    <div className='card'>
      <div className='row'>
        <button className='btn btn-danger btn-fw' onClick={handleClickRoll}>
          Roll
        </button>
        <button className='btn btn-success btn-fw' onClick={handleClickKeep}>
          Keep
        </button>
      </div>
      <div className='row'>
        <div className='dice-score'>{this.props.diceScore}</div>
      </div>
      <div className='row'>
        <p className='round-score'>Round Score: {this.props.roundScore}</p>
      </div>
    </div>
  );
}

export default DiceScore;
