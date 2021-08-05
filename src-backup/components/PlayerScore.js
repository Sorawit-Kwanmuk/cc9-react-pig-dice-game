import React, { useState } from 'react';
function PlayerScore(props) {
  let classes = 'card';
  if (props.active) {
    classes += ' active'; // 'card active'
  }

  return (
    <div className={classes}>
      <h1>Player {props.name}</h1>
      <p className='player-score'>0</p>
    </div>
  );
}

export default PlayerScore;
