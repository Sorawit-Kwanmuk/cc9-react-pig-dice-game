import { useContext, useEffect } from 'react';
import { ScoreContext } from '../contexts/scoreContext';
import DiceScore from './DiceScore';
import PlayerScore from './PlayerScore';

function Container() {
  const context = useContext(ScoreContext);
  //   const { state: PlayerScore } = context;
  useEffect(() => {
    if (
      context.state.playerScores[context.state.currentPlayer] + context.state.roundScore >
      20
    ) {
      context.dispatch({ type: 'KEEP' });
    }
  }, [context.state.roundScore]);
  useEffect(() => {
    if (
      context.state.playerScores[context.state.currentPlayer] + context.state.roundScore >
      20
    ) {
      alert(`Player ${context.state.currentPlayer === 0 ? 'One' : 'Two'} win`);
    }
  }, [context.state.isEnd]);
  return (
    <div className='container'>
      <PlayerScore
        name='One'
        score={context.state.playerScores[0]}
        active={context.state.currentPlayer === 0}
      />
      <DiceScore />
      <PlayerScore
        name='Two'
        score={context.state.playerScores[1]}
        active={context.state.currentPlayer === 1}
      />
    </div>
  );
}

export default Container;
