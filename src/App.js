
import './App.css';
import { useState, useEffect } from 'react';
const initialState=["","","","","","","","",""];
function App() {
  const [currentState, setCurrentState]=useState(initialState);
  const [isX ,setIsX]=useState(false);
  const setvalue = (index)=>
  {
    if(!currentState[index])
    {
      let str=Array.from(currentState);
      str[index]=(isX ? 'X':'O');
      setCurrentState(str);
      setIsX(!isX);
    }
    else
    {
      alert('this field is already filled');
    }
   
  }
  useEffect(
    ()=>
    {
  const winner=calculateWinner(currentState)
  if(winner)
  {
    alert(`Congratulations ${winner} you won the match`);
    setCurrentState(initialState);
  }
  else
  {
    let i=0;
    for(i=0;i<9;i++)
    {
      if(currentState[i]==="")
      break;
    }
    if(i===9)
    {
      alert(`Match is drawn....play again `);
      setCurrentState(initialState);

    }

  }
  
    },[currentState]
  )
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  
  return (
    <div className="tic-tac-toe">
      <div className="heading">
      <h1>Tic Tac Toe Game</h1>
      <div className="player">
        <h1>Player's Turn: <span>{isX? 'X':'O'}</span></h1>
        {console.log(isX)}
      </div>
      </div>
      
       <div className="tic-tac-toe-box">
      <div className="item  border-top border-left" id='0' onClick={()=>setvalue(0)}>{currentState[0]}</div>
      <div className="item border-top" id='1' onClick={()=>setvalue(1)}>{currentState[1]}</div>
      <div className="item border-top border-right" id='2' onClick={()=>setvalue(2)}>{currentState[2]}</div>
      <div className="item border-left" id='3' onClick={()=>setvalue(3)}>{currentState[3]}</div>
      <div className="item" id='4' onClick={()=>setvalue(4)}>{currentState[4]}</div>
      <div className="item border-right" id='5' onClick={()=>setvalue(5)}>{currentState[5]}</div>
      <div className="item border-left border-bottom" id='6' onClick={()=>setvalue(6)}>{currentState[6]}</div>
      <div className="item border-bottom" id='7' onClick={()=>setvalue(7)}>{currentState[7]}</div>
      <div className="item border-bottom border-right" id='8' onClick={()=>setvalue(8)}>{currentState[8]}</div>
      
       </div>
       <div className="cleargame">
         <button className='clearButton' onClick={()=>setCurrentState(initialState)}>Clear Game</button>
       </div>
    </div>
  );
}

export default App;
