import React,{useState} from "react";

export const TodoForm=({addTodo})=>{
  
    
    const [value , setValue] = useState("")
    
   const handleSubmit = evt =>{
       
    evt.preventDefault();
  
      addTodo(value);

      setValue("")

   }
    return(
         
        <form className="TodoForm" onSubmit={handleSubmit}>
            
           <input type="text" className="todo-input" placeholder="what is the task today ?" value={value}

           onChange={(evt)=> setValue(evt.target.value)} />

           <button  type="submit" className="todo-btn">Add Task</button>
        </form>
    )
}