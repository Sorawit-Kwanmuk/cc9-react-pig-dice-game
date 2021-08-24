import { useContext } from 'react';
import { ScoreContext } from '../contexts/scoreContext';

function DiceScore() {
  const context = useContext(ScoreContext); // {state ,dispatch}
  // console.log(context);
  // state: {  playerScore: [0, 0],
  // currentPlayer: 0,
  // diceScore: 1,
  // roundScore: 0,}
  // const {
  //   state: { diceScore, roundScore },
  //   dispatch,
  // } = useContext(ScoreContext);
  return (
    <div className='card'>
      <div className='row'>
        <button
          className='btn btn-danger btn-fw'
          onClick={() => context.dispatch({ type: 'ROLL' })}>
          Roll
        </button>{' '}
        {/* <button
          className='btn btn-danger btn-fw'
          onClick={() => dispatch({ type: 'ROLL' })}>
          Roll
        </button> */}
        <button
          className='btn btn-success btn-fw'
          onClick={() => context.dispatch({ type: 'KEEP' })}>
          {/* onClick={() => dispatch({ type: 'KEEP' })}> */}
          Keep
        </button>
      </div>
      <div className='row'>
        <div className='dice-score'>{context.state.diceScore}</div>
        {/* <div className='dice-score'>{diceScore}</div> */}
      </div>
      <div className='row'>
        <p className='round-score'>Round Score: {context.state.roundScore}</p>
        {/* <p className='round-score'>Round Score: {roundScore}</p> */}
      </div>
    </div>
  );
}

export default DiceScore;
