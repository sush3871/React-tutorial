import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context'
import {TodoForm, TodoItem} from './components/Index'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    setTodos((prev) => [{id: Date.now(), ...text}, ...prev] )
  }

  const updateTodo = (id, text) => {
    setTodos( (prevTodos) => prevTodos.map(prevtodo => prevtodo.id === id ? { ...prevtodo, text } : prevtodo) )
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo) )
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"))
    if( storedTodos && storedTodos.length > 1) {
      setTodos(storedTodos)
    }
  }, [])

  useEffect(() =>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  {/* Todo form goes here */} 
                  <TodoForm/>
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
                  {todos.map( (todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                  ))}
              </div>
          </div>
      </div>
    </TodoProvider>
  )
}

export default App
