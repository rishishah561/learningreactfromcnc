import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setContri]= useState(15);

  const addValue=() => {
    // console.log("value added",Math.random());

    counter=counter+1
    setContri(counter)
    //counter is beign updated in the console but not being shown in the UI
    //We need hooks for variable updation to be reflected in the UI

  }  

  const decValue=()=>{
    counter=counter-1
    setContri(counter)
  }
  return (
  //Dont take div container also.Take an empty tag
  <>
  
  <h1>chai and code</h1>
  <h3>coutner value:{counter}</h3>
  <button onClick={addValue}>Add value{counter}</button>
  <br />
  <br />
  <button onClick={(decValue)}>Remove value{counter}</button>
  <p>footer:{counter}</p>
  </>
  )
}

export default App
