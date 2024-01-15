import React, { Fragment, useState } from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'
import Task from './components/Task'
function App() {
  const [getInput,setGetInput] = useState('')
  function sendInput(result){
    setGetInput(result)
  }
  return (
    <Fragment>
      <Header/>
      <AddTask sendInput={sendInput}/>
      <Task getInput={getInput}/>

      
    </Fragment>
  )
}

export default App