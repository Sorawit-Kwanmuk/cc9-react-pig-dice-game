// import { createContext, useReducer, useState } from 'react';

// const DiceContext = createContext();
// const INITIAL = { diceScore: 1, roundScore: 0, playerScore: [0, 0], currentPlayer: 0 };

// const Reducer = (state, action) => {
//     switch (action.type) {
//         case 'Roll':
//             handleClickNew()
//             return {}
// }

// // const [diceScore, setDiceScore] = useState(1);
// // const [roundScore, setRoundScore] = useState(0);
// // const [playerScore, setPlayerScore] = useState([0, 0]);
// // const [currentPlayer, setCurrentPlayer] = useState(0);

// const handleClickRoll = () => {
//   const newDiceScore = Math.floor(Math.random() * 6) + 1;
//   setDiceScore(newDiceScore);
//   if (newDiceScore === 1) {
//     const newCurrentPlayer = currentPlayer === 0 ? 1 : 0;
//     setCurrentPlayer(newCurrentPlayer);
//     setRoundScore(0);
//   } else {
//     setRoundScore(curRoundScore => curRoundScore + newDiceScore);
//   }
//   if (playerScore[currentPlayer] + roundScore + newDiceScore > 20) {
//     alert(`Player ${currentPlayer + 1} Win`);
//   }
// };

// const handleClickNew = () => {
//   setDiceScore(1);
//   setRoundScore(0);
//   setCurrentPlayer(0);
//   setPlayerScore([0, 0]);
// };

// const handleClickKeep = () => {
//   const newPlayerScore = playerScore.map((item, index) =>
//     currentPlayer === index ? item + roundScore : item
//   );

//   setPlayerScore(newPlayerScore);

//   setRoundScore(0);
//   const newCurrentPlayer = currentPlayer === 0 ? 1 : 0;
//   setCurrentPlayer(newCurrentPlayer);
// };

// function DiceProvider(props) {
//   const [state, dispatch] = useReducer(Reducer, INITIAL);
//   return (
//     <DiceContext.Provider value={{ state: state, dispatch: dispatch }}>
//       {props.children}
//     </DiceContext.Provider>
//   );
// }

// export { DiceProvider, DiceContext };
