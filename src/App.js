import './App.css';
import Header from './components/Header';
import PlayerScore from './components/PlayerScore';
import DiceScore from './components/DiceScore';

function App() {
  const [diceScore, setDiceScore] = useState(1);
  const [roundScore, setRoundScore] = useState(0);
  const [playerScore, setPlayerScore] = useState([0, 0]);
  const [currentPlayer, setCurrentPlayer] = useState(0);

  return (
    <div>
      <Header />
      <div className='container'>
        <PlayerScore name='1' active />
        <DiceScore />
        <PlayerScore name='2' />
      </div>
    </div>
  );
}

export default App;
