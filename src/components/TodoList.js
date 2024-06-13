import React,{useState} from 'react';
import ToDoItem from './TodoItem.js';

function TodoList() {
  const [tasks,setTasks] = useState([
    {
      id: 1,
      text: 'Doctor Appointment',
      completed: true
    },
    {
      id: 2,
      text: 'Meeting at School',
      completed: false
    }
  ]);

  const [text,setText] = useState('');
  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setText('');
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task=>task.id !==id));
  }
  function ToggleCompleted(id) {
    setTasks(tasks.map(task=> {
      if (task.id===id) {
        return {...task,completed: !task.completed};
      } else {
        return task;
      }
      }
    ))
  }
  return (
    <div className="todo-list">
    {tasks.map(task => (
    <ToDoItem
    key={task.id} 
    task={task}
    deleteTask={deleteTask}
    ToggleCompleted={ToggleCompleted} 
    />
    ))}
   <input
    value={text}
    onChange={e => setText(e.target.value)} 
    />
   <button onClick={() => addTask(text)}>Add</button>
    </div>
    );
   }
   export default TodoList;
