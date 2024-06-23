import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componenets/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="bg-green-400 text-black p-10 rounded-xl mb-4">tailwind ka text hai</h1>
    <Card channel="gei gei"/>
    <br />
    <br />
    <br />
    <Card/>
    {/* so now this card compoenent got reusability */}

    
     
    </>
  )
}

export default App
