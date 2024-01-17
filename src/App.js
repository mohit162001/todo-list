import React, { Fragment, useState } from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'
import Task from './components/Task'
function App() {

  const [tasks, setTasks] = useState([]);


  function addTask(userInput){
  if (userInput) {
    const newArr = [ ...tasks]
    newArr.push(userInput)
    setTasks(newArr);
  }
}


  function removeTask(index){
    setTasks(prevArr=>prevArr.filter((item,i)=>{
        return i !==index;
    }))
  }
  
  return (
    <Fragment>
      <Header/>
      <AddTask  addTask={addTask}/>
      <Task tasks={tasks} removeTask={removeTask}/>      
    </Fragment>
  )
}

export default App