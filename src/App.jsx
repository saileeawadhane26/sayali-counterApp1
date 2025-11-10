import React from 'react'
import CounterClass from './Component/CounterClass'
import CounterFunction from './Component/CounterFunction'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <h1>Assignment-2 Counter Applications</h1>

   <div className='counter-row'>
       <div className='one'>  <CounterClass/></div>
    
      <div className='two'><CounterFunction/></div>
    </div>
    
   </div>

      
  )
}

export default App

