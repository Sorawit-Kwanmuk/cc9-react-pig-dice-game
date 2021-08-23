function PlayerScore({ name, score, active }) {
  return (
    <>
      <div className={`card${active ? ' active' : ''}`}>
        <h1>Player {name}</h1>
        <p className='player-score'>{score}</p>
      </div>
    </>
  );
}

export default PlayerScore;
