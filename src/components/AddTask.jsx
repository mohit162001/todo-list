import React, { useState } from 'react'
import './addtask.css'

function AddTask({sendInput}) {
    const [userInput,setInput] = useState('');


    function handleInput(event){
        let enterInput = event.target.value
        setInput(enterInput)
        console.log(enterInput)
    }

    function handleInputField() {
      sendInput(userInput)
      setInput('');
    }

    function handleKeyDown(event) {
      if(event.key ==='Enter'){
        sendInput(userInput)
        setInput('')
      }
    }
  return (
    <div className='input-container'>
        <div className='input-field'>
            <input type="text" value={userInput} onChange={handleInput} onKeyDown={handleKeyDown}/>
        </div>
        <button onClick={handleInputField}>Add Task</button>
    </div>
  )
}

export default AddTask;