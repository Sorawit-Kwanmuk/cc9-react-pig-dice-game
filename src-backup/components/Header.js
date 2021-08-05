import React, { useState } from 'react';
function Header() {
  const handleClickNew = props => {
    props.setDiceScore(1);
    props.setRoundScore(0);
    props.setCurrentPlayer(0);
    props.setPlayerScore([0, 0]);
  };
  return (
    <div className='header'>
      <button className='btn' onClick={handleClickNew}>
        New Game
      </button>
    </div>
  );
}

export default Header;
