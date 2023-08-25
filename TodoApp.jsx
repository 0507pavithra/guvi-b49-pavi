import React,{useState} from 'react';


function TodoApp() {
    const[todos,setTodos] = useState([]);
    const [newTodo,setNewTodo] = useState('');
    const addTodo = () =>{
        setTodos([...todos,newTodo]);
        setNewTodo('');
    };
    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((_,i) => i !== index);
        setTodos(updatedTodos);
    };
    const updateTodo = (index, updatedTodo)=>{
        const updatedTodos= [...todos];
        updatedTodos[index] = updatedTodo;
        setTodos(updatedTodos);
        };
  return (
    <div>
        <input
        type="text"
        value={newTodo}
        onChange={(e)=> setNewTodo(e.target.value)}/>
        <button onClick = {addTodo}>Add Todo</button>
        <ul>
            {todos.map((todo,index)=>(
                <li key={index}>
                    <input
                    type="text"
                    value={todo}
                    onChange={(e) => updateTodo(index,e.target.value)}/>
                    <button onClick={()=> deleteTodo(index)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default TodoApp;