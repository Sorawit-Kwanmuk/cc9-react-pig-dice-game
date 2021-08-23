import Header from '../src copy/components/Header';
import './App.css';
import PlayerScore from './components/PlayerScore';

function App() {
  //มี3 action reset roll keep
  //state มี4ตัว
  return (
    <div>
      <Header />
      <div className='container'>
        <PlayerScore />
        <PlayerScore />
      </div>
    </div>
  );
}

export default App;
