import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import PlayerScore from './components/PlayerScore';
import DiceScore from './components/DiceScore';

function App() {
  const [diceScore, setDiceScore] = useState(1);
  const [roundScore, setRoundScore] = useState(0);
  const [playerScore, setPlayerScore] = useState([0, 0]); //index[0] คือคะแนน player1 และ index[1] คือคะแนน player2
  //playerScore[currentPlayer] ถ้่า currentPlayer =0 => playerScore[0]
  const [currentPlayer, setCurrentPlayer] = useState(0); //currentPlayer=0 หมายถึง player1 กำลังเล่น แต่ถ้า currentPlayer=1 คือplayer2 กำลังเล่น
  const rollDice = () => {
    const newDiceScore = Math.floor(Math.random() * 6 + 1);
    setDiceScore(newDiceScore);
    if (newDiceScore !== 1) {
      setRoundScore(curRoundScore => curRoundScore + newDiceScore);
    } else {
      const newCurrentPlayer = currentPlayer === 0 ? 1 : 0;
      setCurrentPlayer(newCurrentPlayer);
      setRoundScore(0);
    }
  };

  const keepScore = () => {
    const newPlayerScore = [...playerScore]; //สมมุติให้คนแรกกดสุ่มไ้ด้ 9 จะไปเก็บอยู่ในรูป [9,0] ตามรูปแบบ useState([0, 0]) ถ้าเป็นคนที่สองจะบันทึกคะแนนในindex[1]
    newPlayerScore[currentPlayer] = newPlayerScore[currentPlayer] + roundScore;
    //ถ้าเป็นผู้เล่นคนแรก currentPlayer = 0 ดังนั้น newPlayerScore[0] = การแก้ไขค่า  newPlayerScore[0]
    setPlayerScore(newPlayerScore);
    setRoundScore(0);
    setCurrentPlayer(curPlayer => (curPlayer === 0 ? 1 : 0)); //(curPlayer === false ? true : false)
    // setCurrentPlayer(function (curPlayer) {
    //   return curPlayer === 0 ? 1 : 0;
    // });
    // setRoundScore(function(a){return a+ newDiceScore});//a คือค่า setRoundScoreในรอบปัจจุบัน
  };
  const reset = () => {
    setRoundScore(0);
    setDiceScore(1);
    setCurrentPlayer(0);
    setPlayerScore([0, 0]);
  };
  return (
    <div>
      <Header reset={reset} />
      <div className='container'>
        <PlayerScore name='One' active={currentPlayer === 0} score={playerScore[0]} />
        <DiceScore
          diceScore={diceScore}
          roundScore={roundScore}
          setDiceScore={setDiceScore}
          rollDice={rollDice}
          setRoundScore={setRoundScore}
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          keepScore={keepScore}
        />
        <PlayerScore name='Two' active={currentPlayer === 1} score={playerScore[1]} />
      </div>
    </div>
  );
}

export default App;
