import React, { useRef} from 'react'
import './addtask.css'

function AddTask({addTask}) {
    const input =  useRef();
    // const [userInput,setInput] = useState('');


    // function handleInput(event){
    //     let enterInput = event.target.value
    //     setInput(enterInput)
    //     console.log(enterInput)
    // }

    function handleInputField() {
      addTask(input.current.value);
      input.current.value = ''

    }

    function handleKeyDown(event) {
      if(event.key ==='Enter'){
        addTask(input.current.value)
        input.current.value = ''
      }
    }
  return (
    <div className='input-container'>
        <div className='input-field'>
            <input ref={input} type="text" onKeyDown={handleKeyDown}/>
        </div>
        <button onClick={handleInputField}>Add Task</button>
    </div>
  )
}

export default AddTask;