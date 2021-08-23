const INITIAL_SCORE = {
  //state 4ตัว
  playerScore: [0, 0],
  currentPlayer: 0,
  diceScore: 1,
  roundScore: 0,
};
const scoreReducer = (state, action) => {
  switch (action.tvpe) {
    case 'ROLL': {
      const newDiceScore = Math.floor(Math.random() * 6) + 1;
      if (newDiceScore === 1) {
        return {
          ...state,
          currentPlayer: state.currentPlayer === 0 ? 1 : 0,
          diceScore: 1,
          roundScore: 0,
        };
      } else {
        return {
          ...state,
          diceScore: newDiceScore,
          roundScore: state.roundScore + newDiceScore,
          //state.roundScore คือ ค่าคะแนนเดิม
        };
      }
    }
    case 'KEEP': {
      const newPlayerScore = [...state.playerScore];
      newPlayerScore[state.currentPlayer] =
        newPlayerScore[state.currentPlayer] + state.roundScore;
      return {
        ...state,
        playerScore: newPlayerScore,
        currentPlayer: state.currentPlayer === 0 ? 1 : 0,
        diceScore: 0,
      };
    }
    case 'RESET': {
      return INITIAL_SCORE;
    }
    default: {
      return state;
    }
  }
};
