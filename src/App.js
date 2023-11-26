
import './App.css';

import './App.css';
import X from "./x.png"
import O from "./o.png"
import { useEffect, useState } from 'react';

// <img src={O} alt="xo-image" className='X-O-img'/>
// <img src={X} alt="xo-image" className='X-O-img' />

function App() {

  const x = "❌"
  const o = "⭕"
  const [player, setPlayer] = useState(2);
  const [board, setBoard] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: ""
  })



  const play = (boxNo) => {
    if(board[boxNo] !== ""){
      return ;
    }
    if(player === 1){
      setBoard({...board, [boxNo]: x} )
    }
    else{
      setBoard({...board, [boxNo]: o} )
    }
    

  }

  function checkWin(){
    const symbol = player === 1 ? x : o ;
  
    if(board[1] === symbol && board[2] === symbol && board[3] === symbol ){
        alert(`${player} player is Win `)
    }
    if(board[4] === symbol && board[5] === symbol && board[6] === symbol ){
        alert(`${player} player is Win `)
    }
    if(board[7] === symbol && board[8] === symbol && board[9] === symbol ){
        alert(`${player} player is Win `)
    }
  
    if(board[1] === symbol && board[4] === symbol && board[7] === symbol ){
        alert(`${player} player is Win `)
    }
    if(board[2] === symbol && board[5] === symbol && board[8] === symbol ){
        alert(`${player} player is Win `)
    }
    if(board[3] === symbol && board[6] === symbol && board[9] === symbol ){
        alert(`${player} player is Win `)
    }
  
    if(board[1] === symbol && board[5] === symbol && board[9] === symbol ){
        alert(`${player} player is Win `)
    }
    if(board[4] === symbol && board[5] === symbol && board[7] === symbol ){
        alert(`${player} player is Win `)
    }
    setPlayer(player === 1 ? 2 : 1)
  }
  
useEffect(()=>{
console.log(board)
checkWin()

} , [board])



  return (
    <>
      <div className='t-t-t-container'>

        <p className='current-player'>Current Player {player === 1 ? " 1: x" : "2 : O"}</p>
        <div className='box-row-container'>
          <div className='box-row'>
            <div className='box b-1' onClick={() => { play(1) }}>
              <span className='X-O-img'>{board[1]} </span>
            </div>
            <div className='box b-2' onClick={() => { play(2) }} >
            <span className='X-O-img'>{board[2]}</span>
            </div>
            <div className='box b-3' onClick={() => { play(3) }}>
            <span className='X-O-img'>{board[3]}</span>
            </div>
          </div>

          <div className='box-row'>
            <div className='box b-4' onClick={() => { play(4) }} >
            <span className='X-O-img'>{board[4]}</span>
            </div>
            <div className='box b-5' onClick={() => { play(5) }}>
            <span className='X-O-img'>{board[5]}</span>
            </div>
            <div className='box b-6' onClick={() => { play(6) }}>
            <span className='X-O-img'>{board[6]}</span>
            </div>
          </div>

          <div className='box-row'>
            <div className='box b-7' onClick={() => { play(7) }}>
            <span className='X-O-img'>{board[7]}</span>
            </div>
            <div className='box b-8' onClick={() => { play(8) }}>
            <span className='X-O-img'>{board[8]}</span>
            </div>
            <div className='box b-9' onClick={() => { play(9) }}>
            <span className='X-O-img'>{board[9]} </span>
            </div>
          </div>

        </div>
        <div className='players-container'>
          <p className='player'> <img src={X} alt="xo" className='X-O-player' /> :  Player 1  </p>

          <p className='player'> <img src={O} alt="xo" className='X-O-player' /> : Player 2 </p>
        </div>

      </div>
    </>
  );
}
export default App;
