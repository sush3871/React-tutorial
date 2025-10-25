import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';
import { useEffect } from 'react';

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.title);
  };

  const handleUpdate = (id) => {
    if (editText.trim() === '') return;
    dispatch(updateTodo({ id, title: editText }));
    setEditId(null);
    setEditText('');
  };


  return (
    <ul className="list-none">
      {todos.map((todo) => (
        <li
          className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          key={todo.id}
        >
          {editId === todo.id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="text-white border-white rounded px-2 py-1"
              />
              <button
                onClick={() => handleUpdate(todo.id)}
                className="text-white bg-green-500 border-0 py-1 px-3 ml-2 focus:outline-none hover:bg-green-600 rounded"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <div className="text-white">{todo.title}</div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(todo)}
                  className="text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Todos;
