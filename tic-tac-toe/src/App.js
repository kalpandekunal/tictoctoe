import './App.css';
import { Board } from './components/Board';
import { useState } from 'react';
import { ScoreBoard } from './components/ScoreBoard';
import { ResetBtn } from './components/ResetBtn';

function App() {
  const WIN_CONDITION = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  const [board,setBoard]  = useState(Array(9).fill(null));
  const [xPlaying,setXPlaying] = useState(true);
  const [Score,setScore] = useState({xScore : 0, oScore : 0});
  const [gameOver,setGameOver] = useState(false);

  const handleBoxClick = (boxId)=>{
    const updatedBoard = board.map((ele,idx)=>{
      if(idx===boxId){
        return xPlaying === true ? "X" : "O";
      }
      else{
        return ele;
      }
    });

    let winner = Checkwinner(updatedBoard);

    if(winner){
      if(winner === "o"){
        let {oScore} = Score;
        oScore += 1;
        setScore({...Score,oScore});
      }
      else{
        let {xScore} = Score;
        xScore += 1;
        setScore({...Score,xScore});
      }
    }

    //console.log(Score);

    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  }

  const Checkwinner = (board)=>{
    for(let i=0;i<WIN_CONDITION.length;i++){
      const [x,y,z] = WIN_CONDITION[i];

      if(board[x] && board[x] === board[y] && board[y] === board[z]){
        //console.log(board[x]);
        setGameOver(true)
        return board[x];
      }
    }
  }

  const resetBoard = ()=>{
      setGameOver(false)
      setBoard(Array(9).fill(null));
  }

  return (
    <div className="App">
      
      <ScoreBoard Score={Score} xPlaying={xPlaying}/>
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick}/>
      <ResetBtn resetBoard={resetBoard}/>
      
    </div>
  );
}

export default App;
