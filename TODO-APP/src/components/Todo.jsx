import { useState } from 'react'

function Todo() {

    const [ newTodo, setNewTodo ] = useState('');
    const [ todos, setTodos ] = useState([]);

    const addTodo = (e) => {
        e.preventDefault();

        if(newTodo) {
            setTodos([ ...todos, { text: newTodo, completed: false }]);
            setNewTodo('');
        }
    }

    const deleteTodo = (index) => {
        const newTodos = [ ...todos ];
        newTodos[index].completed = !newTodos[index].completed; ;
        setTodos(newTodos);
    }

  return (
    <div>
        <h1>Todo App</h1>
        <form>
            <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button type="submit" onClick={addTodo}>Add Todo</button>
        </form>

        <ul>
            { todos.map((todo, index) => (
                <li key={index}>
                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{ todo.text }</span>
                    <button onClick={ () => deleteTodo(index) }>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo