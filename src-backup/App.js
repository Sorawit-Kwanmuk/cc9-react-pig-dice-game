import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import PlayerScore from './components/PlayerScore';
import DiceScore from './components/DiceScore';

function App() {
  const [diceScore, setDiceScore] = useState(1);
  const [roundScore, setRoundScore] = useState(0);
  const [playerScore, setPlayerScore] = useState([0, 0]);
  const [currentPlayer, setCurrentPlayer] = useState(0);

  return (
    <div>
      <Header
        setDiceScore={setDiceScore}
        setRoundScore={setRoundScore}
        setPlayerScore={setPlayerScore}
        setCurrentPlayer={setCurrentPlayer}
      />
      <div className='container'>
        <PlayerScore name='1' active />
        <DiceScore
          setDiceScore={setDiceScore}
          setCurrentPlayer={setCurrentPlayer}
          setRoundScore={setRoundScore}
          playerScore={playerScore}
          currentPlayer={currentPlayer}
          roundScore={roundScore}
        />
        <PlayerScore name='2' />
      </div>
    </div>
  );
}

export default App;
