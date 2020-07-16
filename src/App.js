import React,{useState} from 'react';

const currTime = new Date().toLocaleTimeString();

const App =()=>{
  const [state,setState] = useState(currTime);
  const UpdateTime = ()=>{
    const newTime = new Date().toLocaleTimeString();
    setState(newTime);
  }
  setInterval(UpdateTime,1000);
 
  return(
    <>
      <h1 className="container">{state}</h1>
    </>
  );
}

export default App;