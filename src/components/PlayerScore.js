function PlayerScore(props) {
  return (
    <div className={`card${props.active === true ? ' active' : ''}`}>
      <h1>Player {props.name}</h1>
      <p className='player-score'>{props.score}</p>
    </div>
  );
}
export default PlayerScore;
