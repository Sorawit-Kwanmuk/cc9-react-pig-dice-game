function Card() {
  return (
    <div>
      <div className='card'>
        <div className='row'>
          <div className='btn btn-danger btn-fw'>Roll</div>
          <div className='btn btn-success btn-fw'>Keep</div>
        </div>
        <div className='row'>
          <div className='dice-score'>0</div>
        </div>
        <div className='row'>
          <p className='round-score'>Round Score: 0</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
