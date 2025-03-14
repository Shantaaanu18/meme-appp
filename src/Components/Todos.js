
function Todos(props){
    
    return <div>
       
            
        {Todos.map(function(todo){
            return <div>
                <span>{todo.title}</span>
                <span>{todo.description}</span>
                <button>{todo.completed === true ? "Completed" : "Mark as completed"}</button>
            </div>
        })}
    </div>


}

export default Todos;