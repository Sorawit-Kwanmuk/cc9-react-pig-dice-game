import './App.css';
import { useState } from 'react';

function App() {
  const [diceScore, setDiceScore] = useState(1);
  const [roundScore, setRoundScore] = useState(0);

  // const [playerOneScore, setPlayerOneScore] = useState(0);
  // const [playerTwoScore, setPlayerTwoScore] = useState(0);
  // const [currentPlayer, setCurrentPlayer] = useState('One');

  const [playerScore, setPlayerScore] = useState([0, 0]);
  const [currentPlayer, setCurrentPlayer] = useState(0);

  const handleClickRoll = () => {
    const newDiceScore = Math.floor(Math.random() * 6) + 1;
    setDiceScore(newDiceScore);
    if (newDiceScore === 1) {
      const newCurrentPlayer = currentPlayer === 0 ? 1 : 0;
      setCurrentPlayer(newCurrentPlayer);
      setRoundScore(0);
    } else {
      setRoundScore(curRoundScore => curRoundScore + newDiceScore);
    }
    if (playerScore[currentPlayer] + roundScore + newDiceScore > 20) {
      alert(`Player ${currentPlayer + 1} Win`);
    }
  };

  const handleClickNew = () => {
    setDiceScore(1);
    setRoundScore(0);
    setCurrentPlayer(0);
    setPlayerScore([0, 0]);
  };

  const handleClickKeep = () => {
    // const newPlayerScore = [...playerScore];
    // newPlayerScore[currentPlayer] = newPlayerScore[currentPlayer] + roundScore;
    const newPlayerScore = playerScore.map((item, index) =>
      currentPlayer === index ? item + roundScore : item
    );

    // currentPlayer = 0;
    // roundScore = 15;
    // [10, 25].map((item, index) => {
    //   if (index === currentPlayer) {
    //     return item + roundScore;
    //   } else {
    //     return item;
    //   }
    // }); //
    // Iteration#1
    // item => 10, index => 0, currentPlayer => 0 updateScore return  item + roundScore
    // Iteration#2
    // item => 25 index => 1, currentPlayer => 0 not update return item

    // resultFromMap [30, 25]

    setPlayerScore(newPlayerScore);
    setRoundScore(0);
    const newCurrentPlayer = currentPlayer === 0 ? 1 : 0;
    setCurrentPlayer(newCurrentPlayer);
  };

  return (
    <div>
      <div className='header'>
        <button className='btn' onClick={handleClickNew}>
          New Game
        </button>
      </div>
      <div className='container'>
        <div className={`card${currentPlayer === 0 ? ' active' : ''}`}>
          <h1>Player 1</h1>
          <p className='player-score'>{playerScore[0]}</p>
        </div>
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
            <div className='dice-score'>{diceScore}</div>
          </div>
          <div className='row'>
            <p className='round-score'>Round Score: {roundScore}</p>
          </div>
        </div>
        <div className={`card${currentPlayer === 1 ? ' active' : ''}`}>
          <h1>Player 2</h1>
          <p className='player-score'>{playerScore[1]}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
