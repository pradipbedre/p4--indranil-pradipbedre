import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { faCircleCheck, FaPen, faTrashCan } from '../node_modules/react-icons/fa';
import './App.css';
function App() {

  // task todo list state / main state to store tasks 
  const[toDo,setToDo]=useState([
    {"id":1,"title": "Task 1","status": false},
    {"id":2,"title": "Task 2","status": false}
  ]);

  // temp state for when we will update tasks 
  const [newTask,setNewTask]=useState('');
  const [updateData,setupdateData]=useState('');

// add task
////////////////////////////
  const addTask=()=>{

  }

  // delete task
////////////////////////////
  const deleteTask=()=>{

  }
// mark task as done compleated
////////////////////////////
  const markDone=()=>{

  }

  // cancle updated ask
////////////////////////////
  const cancleUpdate=()=>{

  }

  // change task
////////////////////////////
  const changeTask=(e)=>{

  }

  // update task 
////////////////////////////
  const updateTask=()=>{

  }

  return (
    <div className='container App'>
      <br /><br />
      <h2>To Do List App Using React.JS</h2>
      <br /><br />
    </div>
  )
}

export default App;