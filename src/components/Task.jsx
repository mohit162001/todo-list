import React, { useState,useEffect } from "react";
import "./task.css";
function Task({ getInput }) {
  const [tasks, setTasks] = useState(['play']);
  
//   function addTask(newTask){
//     setTasks([newTask, ...tasks]);
//   };

//   if (getInput) {
//     addTask(getInput);
//   }
useEffect(() => {
    if (getInput) {
      setTasks((prevTasks) => [getInput, ...prevTasks]);
    }
  }, [getInput]);
  console.log(tasks)
  console.log("task", getInput); 

  // useEffect(() => {
  //   if (getInput) {
  //     const newArr = [ ...tasks]
  //     newArr.push(getInput)
  //     setTasks(newArr);
  //   }
  // }, [getInput]);
  // console.log(tasks)
  // console.log("task", getInput); 

  return (
    <div className="task-container">
      <ol>
        {tasks.map((item, index) => (
          <li key={index} className="list-item">
            {item} <button id="remove-btn">Remove</button>
          </li>
        ))}
      </ol>
      
    </div>
  );
}

export default Task;
