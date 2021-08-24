// import { useReducer } from 'react';

import './App.css';
import Container from './components/Container';
import Header from './components/Header';

// import DiceScore from './components/DiceScore';
// import PlayerScore from './components/PlayerScore';
import {
  // INITIAL_SCORE,
  // ScoreContext,
  ScoreProvider,
  // scoreReducer,
} from './contexts/scoreContext';

function App() {
  //มี3 action reset roll keep
  //state มี4ตัว
  // const [state, dispatch] = useReducer(scoreReducer, INITIAL_SCORE);
  return (
    // <ScoreContext.Provider value={{ state, dispatch }}>
    //   <Header />
    //   <div className='container'>
    //     <PlayerScore />
    //     <DiceScore />
    //     <PlayerScore />
    //   </div>
    // </ScoreContext.Provider>
    <ScoreProvider>
      <Header />
      <Container />
    </ScoreProvider>
  );
}

export default App;
