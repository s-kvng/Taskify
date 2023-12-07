import React from 'react'
import './styles.css';
import { Todo } from '../models';
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos ,setTodos, completedTodos, setCompletedTodos}) => {
  return (
   <div className='container'>
    <Droppable droppableId='ToList'>
        {
            (provided)=>(
                    <div className="todos" ref={provided.innerRef} {...provided.droppableProps}>
                        <span className="todos__heading">Active Tasks</span>
                        {
                        todos.map((todo, index)=>(
                            !todo.isDone && <SingleTodo index={index} todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
                        ))
                    }
                    {provided.placeholder}
                    </div>
            )
        }
   
    </Droppable>

    <Droppable droppableId='ToRemove'>
        {
            (provided)=>(
                    <div className="todos remove" ref={provided.innerRef} {...provided.droppableProps}>
                        <span className="todos__heading">Completed Tasks</span>
                            {
                            todos.map((todo, index)=>(
                                todo.isDone && <SingleTodo index={index} todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
                            ))
                        }
                        {provided.placeholder}
                    </div>
            )
        }
    </Droppable>

   
    
   
   </div>
  )
}

export default TodoList;