
import { useState, useEffect } from 'react';
import TodoForm from './components/Form/TodoForm';
import Navigation from './components/Navigation/Navigation';
import TodoList from './components/TodoList/TodoList';
import { ITodo } from './interface';
import './styles/Style.scss';

function App() {
  const [allTodos, setAllTodos] = useState<ITodo[]>([])
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setAllTodos(saved)
  }, [])
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(allTodos))
  }, [allTodos])

  const addTodo = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    // setAllTodos([newTodo, ...allTodos])
    setAllTodos(prev => [newTodo, ...prev])

  }
  const toggleHandler = (id: number) => {
    setAllTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))

  }
  const removeHandler = (id: number) => {
    const sureRemove = window.confirm('Are u sure?')
    if (sureRemove) {
      setAllTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }
  return (
    <>
      <Navigation />
      <div className="app container">
        <TodoForm addTodo={addTodo} />
        {allTodos.length ? <TodoList allTodos={allTodos}
          onToggle={toggleHandler}
          onRemove={removeHandler} /> :
          <h1 style={{ textAlign: 'center' }}>No todos!!!</h1>}

      </div>
    </>
  );
}

export default App;
