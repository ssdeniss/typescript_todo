import React from 'react'
import { ITodo } from '../../interface'

type TodoListProps = {
    allTodos: ITodo[],
    onToggle(id: number): void
    onRemove: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ allTodos, onToggle, onRemove }) => {
    return (
        <ul className='todo__items'>
            {allTodos.map((todo) => {
                const classes = ['todo__item']
                if (todo?.completed) {
                    classes.push('completed')
                }
                return (
                    <li key={todo?.id} className={classes.join(' ')}>
                        <input type="checkbox" checked={todo?.completed} onChange={onToggle.bind(null, todo?.id)} />
                        <div className='todo__title'>{todo?.title}</div>
                        <span className='todo__delete' onClick={() => onRemove(todo?.id)}>delete</span>
                    </li>
                )
            })}

        </ul>
    )
}

export default TodoList