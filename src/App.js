import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Board></Board>
    </div>
  );
}

function Board(){

  const [marks,setMarks] = useState([0,0,0,0,0,0,0,0,0]);
  const[player,setPlayer] = useState(1);

  useEffect(()=>{
    const combinations = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    for (let c of combinations){
      if(marks[c[0]] ===1 && marks[c[1]]===1 && marks[c[2]]===1){
        console.log("player 1 wins")
        alert("Player 1 wins")
        setMarks([0,0,0,0,0,0,0,0,0])
      }
      if(marks[c[0]]===2 && marks[c[1]]===2 && marks[c[2]]===2){
        console.log("Player 2 wins")
        alert("Player 2 wins")
        setMarks([0,0,0,0,0,0,0,0,0])
      }
    }

  },[marks])  

  const changeMark=(i)=>{
    const m=[...marks];

    if(m[i]===0){
      m[i]=player;
      setMarks(m);
      setPlayer(player===1 ? 2:1);
    }
    else{
      alert('please click on empty block');
    }
  };
  
  
  return(
    <>
    <div className='Board'>
      <Block mark={marks[0]} position={0} changeMark={changeMark}></Block>
      <Block mark={marks[1]} position={1} changeMark={changeMark}></Block>
      <Block mark={marks[2]} position={2} changeMark={changeMark}></Block>
    </div>
    <div className='Board'>
      <Block mark={marks[3]} position={3} changeMark={changeMark}></Block>
      <Block mark={marks[4]} position={4} changeMark={changeMark}></Block>
      <Block mark={marks[5]} position={5} changeMark={changeMark}></Block>
    </div>
    <div className='Board'>
      <Block mark={marks[6]} position={6} changeMark={changeMark}></Block>
      <Block mark={marks[7]} position={7} changeMark={changeMark}></Block>
      <Block mark={marks[8]} position={8} changeMark={changeMark}></Block>
    </div>
  
    </>
  )
}

function Block({mark,changeMark,position}){
  return(
    <div className={`Block mark${mark}`} onClick={()=>changeMark(position)}>
    </div>
  )
}

export default App;
