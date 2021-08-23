function DiceScore() {
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
        <div className='dice-score'>{diceScore}</div>
      </div>
      <div className='row'>
        <p className='round-score'>Round Score: {roundScore}</p>
      </div>
    </div>
  );
}

export default DiceScore;
