import { createContext, useReducer } from 'react';

const INITIAL_SCORE = {
  //state 4ตัว
  playerScores: [0, 0],
  currentPlayer: 0,
  diceScore: 1,
  roundScore: 0,
  isEnd: false,
};
const scoreReducer = (state, action) => {
  switch (action.type) {
    case 'ROLL': {
      const newDiceScore = Math.floor(Math.random() * 6) + 1;
      if (newDiceScore === 1) {
        //ทอดลูกเต๋าได้ 1 จะเกิด change player, reset round score to zero ,update dice score
        return {
          //สิ่งที่ return ออกมาจาก Reducer function คือค่า state ถัดไป หรือ setState
          ...state,
          //คือการ spread key currentPlayer playerScores: [0, 0], currentPlayer: 0, diceScore: 1, roundScore: 0,
          //หลังจากนั้นค่าที่อยู่ด้าานล่าง จะ overwrite ค่าstate
          currentPlayer: state.currentPlayer === 0 ? 1 : 0,
          diceScore: 1,
          roundScore: 0,
        };
      } else {
        //กรณีที่แต้มลูกเต๋ามากกว่า 1
        return {
          // update round score,update dice score
          ...state,
          diceScore: newDiceScore,

          roundScore: state.roundScore + newDiceScore,
          //state.roundScore คือ ค่าคะแนนเดิม
        };
      }
    }
    case 'KEEP': {
      //change current player, update player score, reset round score to zero
      const newPlayerScores = [...state.playerScores]; //[0, 0]
      newPlayerScores[state.currentPlayer] =
        newPlayerScores[state.currentPlayer] + state.roundScore;

      let currentPlayer = state.currentPlayer;
      if (newPlayerScores[state.currentPlayer] < 20) {
        currentPlayer = state.currentPlayer === 0 ? 1 : 0;
      }

      return {
        ...state,
        playerScores: newPlayerScores,
        currentPlayer: currentPlayer,
        diceScore: 0,
        isEnd: newPlayerScores[state.currentPlayer] > 20,
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

const ScoreContext = createContext();

function ScoreProvider({ children }) {
  const [state, dispatch] = useReducer(scoreReducer, INITIAL_SCORE);
  return (
    <ScoreContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </ScoreContext.Provider>
  );
}

export { INITIAL_SCORE, scoreReducer, ScoreContext, ScoreProvider };
