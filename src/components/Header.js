import { useContext } from 'react';
import { ScoreContext } from '../contexts/scoreContext';

function Header() {
  const context = useContext(ScoreContext);
  // const { dispatch } = useContext(ScoreContext);
  return (
    <header className='header'>
      <button className='btn' onClick={() => context.dispatch({ type: 'RESET' })}>
        {/* <button className='btn' onClick={() => dispatch({ type: 'RESET' })}> */}
        New Game
      </button>
    </header>
  );
}

export default Header;
