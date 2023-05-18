import React,{useState} from "react";

export const TodoForm=({addTodo})=>{
  
    
    const [value , setValue] = useState("")
    const [errorMessage, setErrorMessage] = useState("");
    
   const handleSubmit = evt =>{
       
    evt.preventDefault();
      
    const trimmedValues = value.trim()
    if(trimmedValues !== ''){

        addTodo(value);
        setValue("")
        setErrorMessage("");
    } else {
      setErrorMessage("Please enter a task.");

      setTimeout(()=>{

        setErrorMessage("");
      },3000)
    }
    
   }
    return(
         
        <form className="TodoForm" onSubmit={handleSubmit}>
                 {errorMessage && <p className="error-message">{errorMessage}</p>}
           <input type="text" className="todo-input" placeholder="what is the task today ?" value={value}

           onChange={(evt)=> setValue(evt.target.value)} />

           <button  type="submit" className="todo-btn">Add Task</button>
      
        </form>
    )
}