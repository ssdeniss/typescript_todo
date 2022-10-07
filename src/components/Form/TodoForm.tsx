import React, { useState } from 'react'

const TodoForm = () => {
    const [todo, setTodo] = useState<string>('')
    const todoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value)
    }
    const postTodo = () => {
        console.log(todo)
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