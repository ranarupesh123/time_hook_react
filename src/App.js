import React,{useState}from 'react';

let currTime = new Date().toLocaleTimeString();

const App = ()=>{
  const [state,setState] = useState(currTime);
  const UpdateTime = ()=>{
    let newTime = new Date().toLocaleTimeString();
    setState(newTime);
  }
  return(
    <>
      <div className="container">
        <h1>{state}</h1>
        <br/>
        <button onClick={UpdateTime}  className="btn">Curr Time</button>
      </div>
    </>
  );
}

export default App;