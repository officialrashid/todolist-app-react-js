import React,{useState} from "react";

export const EditTodoForm=({editTodo,task})=>{
  
    
    const [value , setValue] = useState(task.task)
    
   const handleSubmit = evt =>{
       
    evt.preventDefault();
  
      editTodo(value,task.id);

      setValue("")

   }
    return(
         
        <form className="TodoForm" onSubmit={handleSubmit}>
            
           <input type="text" className="todo-input" placeholder="Update Task ?" value={value}

           onChange={(evt)=> setValue(evt.target.value)} />

           <button  type="submit" className="todo-btn">Update Task</button>
        </form>
    )
}