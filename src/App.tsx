import React, { useState } from 'react';
import {DragDropContext} from 'react-beautiful-dnd'

import './App.css';
import InputField from './components/InputField';
import { Todo } from './models';
import TodoList from './components/TodoList';



const App: React.FC = () => {
  const [ todo , setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  const [ completedTodos , setCompletedTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) =>{
    e.preventDefault();

    if(todo){
      setTodos([...todos, {id : Date.now(), todo: todo, isDone: false}]);
      setTodo("");
    }
  }
  console.log(todos)
  return (
    <DragDropContext onDragEnd={()=>{}}>
      <div className="App">
        <span className='heading'>Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        
        <TodoList 
          todos={todos} 
          setTodos={setTodos} 
          completedTodos={completedTodos} 
          setCompletedTodos={setCompletedTodos}/>
    </div>
    </DragDropContext>
  );
}

export default App;
