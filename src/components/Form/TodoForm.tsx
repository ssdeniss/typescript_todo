import React, { useState } from 'react'

interface TodoFormProps {
    addTodo(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = props => {
    const [todo, setTodo] = useState<string>('')
    const todoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value)
    }
    const postTodo = () => {
        props.addTodo(todo)
        setTodo('')
    }
    return (
        <div className='form'>
            <div className="form__top">
                <input className='form__input' type="text" value={todo} onChange={todoHandler} />
                <button className='form__btn' onClick={postTodo}>Post</button>
            </div>
            <label className='form__label' htmlFor="">Enter your todo</label>
        </div>
    )
}

export default TodoForm