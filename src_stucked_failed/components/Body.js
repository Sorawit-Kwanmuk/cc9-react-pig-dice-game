import Card from './Card';

function Body() {
  return (
    <>
      <div className='container'>
        <div className='card active'>
          <h1>Player 1</h1>
          <p className='player-score'>0</p>
        </div>
        <Card />
        <div className='card'>
          <h1>Player 2</h1>
          <p className='player-score'>0</p>
        </div>
      </div>
    </>
  );
}

export default Body;
