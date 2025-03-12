// import react from "react";
import React, { useState } from "react";

function Todo() {

    const [todos, setTodos] = useState(["Getup", "EatBreakfast", "Gotowork"]);
    const [newTast, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);

    }

    function addTask(){
        if(newTast.trim() !== ""){
            setTodos([...todos, newTast]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks = todos.filter((_, i) => i !== index);
        setTodos(updatedTasks);

    }

    function moveTaskUp(index){
        if(index >0){
            const updatedTasks = [...todos];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTodos(updatedTasks);
        }

    }

    function moveTaskDown(index){
        if(index<todos.length -1){
            const updatedTasks = [...todos];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTodos(updatedTasks);
        }

    }

    return(
        <div>
            <h1>Todo List</h1>
            <div>
                <input type="text" value={newTast} onChange={handleInputChange} placeholder="Add a new task"/>
                <button onClick={addTask}>Add</button>
            </div>
            <ol>
                {todos.map((todo, index) => 
                    <li key={index}>
                        <span>{todo}</span>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                        <button onClick={() => moveTaskUp(index)}>Move Up</button>
                        <button onClick={() => moveTaskDown(index)}>Move Down</button>
                    </li>
                )}
            </ol>
            
   </div> );

}

export default Todo;