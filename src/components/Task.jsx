import React from "react";
import "./task.css";
function Task({tasks,removeTask }) {
  // const [tasks, setTasks] = useState([]);

//   function addTask(newTask){
//     setTasks([newTask, ...tasks]);
//   };

//   if (getInput) {
//     addTask(getInput);
//   }
// useEffect(() => {
//     if (getInput) {
//       setTasks((prevTasks) => [getInput, ...prevTasks]);
//     }
//   }, [getInput]);
//   console.log(tasks)
//   console.log("task", getInput); of adding element not in order

  // useEffect(() => {
  //   if (getInput) {
  //     const newArr = [ ...tasks]
  //     newArr.push(getInput)
  //     setTasks(newArr);
  //   }
  // }, [getInput]);
  
  // if (getInput) {
  //   const newArr = [ ...tasks]
  //   newArr.push(getInput)
  //   setTasks(newArr);
  // }
  
  // console.log('task',tasks)
  // console.log("task", getInput); 


  // function removeTask(index){
  //   setTasks(prevArr=>prevArr.filter((item,i)=>{
  //       return i !==index;
  //   }))
  // }


  let lastElement = tasks.filter((item,i)=>{
    return i===tasks.length-1;
  })
  return (
    <>
     {tasks.length<=0? <p id="message">please add task</p>:(lastElement[0] !== tasks.length)?'':<p id="message">No task remaining</p>}

    <div className="task-container">
      <ol>
        {tasks.map((item, index) => (
          <li key={index} className="list-item">
            {item} <button onClick={()=>removeTask(index)} id="remove-btn">Remove</button>
          </li>
        ))}
      </ol>
      {(tasks.length > 0 && tasks.length === 1) ? 
          <p id="message">You have 1 task remaining.</p>:''}
        
    </div>
    </>
  );
}

export default Task;
