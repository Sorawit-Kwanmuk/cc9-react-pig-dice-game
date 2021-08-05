// import React, { useState } from 'react';
function handleClickKeep(props) {
  props.keep();
}
function Header() {
  return (
    <div className='header'>
      <button className='btn' onClick={handleClickKeep}>
        New Game
      </button>
    </div>
  );
}

export default Header;
