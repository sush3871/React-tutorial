import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo, updateTodo} from '../features/todo/todoSlice'

function Todos() {

    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch();
    
  return (
    <>
    <div>My Todos</div>
    {todos.map((todo) => {
        <li key={todo.id}>
            {todo.title}
            <button onClick={() => dispatch(() => dispatch(removeTodo(todo.id)))}>Delete</button>
            <button onClick={() => dispatch(() => dispatch(updateTodo({id: todo.id, title: "Updated Todo"})))}>Update</button>
        </li>
    })}
    </>
  )
}

export default Todos