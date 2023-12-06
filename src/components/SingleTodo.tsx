import React from 'react'

import { Todo } from '../models'

type Props = {
    todo: Todo;
    key: Todo["id"];
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({todo, key, todos , setTodos}) => {
  return (
    <form className='todo__single'> 
        <span className='todo__single--text'>{todo.todo}</span>
    </form>
  )
}

export default SingleTodo