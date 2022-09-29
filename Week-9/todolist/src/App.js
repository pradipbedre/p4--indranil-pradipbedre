import React, { useState } from 'react'
import AddtaskForm from './components/AddTaskForm.jsx';
import ToDo from './components/ToDo.jsx';
import UpdateForm from './components/UpdateForm.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
export default function App() {

  // task todo list state / main state to store tasks 
  const [toDo, setToDo] = useState([
    { id: 1, title: "Task 1", status: false },
    { id: 2, title: "Task 2", status: false }
  ]);

  // temp state for when we will update tasks 
  const [newTask, setNewTask] = useState('');
  const [updateData, setupdateData] = useState('');

  // add task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry])
      setNewTask('')
    }
  }

  // delete task
  const deleteTask = (id) => {
    let newtasks = toDo.filter(task => task.id !== id);
    setToDo(newtasks);
  }

  // mark task as done compleated
  const markDone = (id) => {
    let newtasks = toDo.map(task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })

    setToDo(newtasks);
  }

  // cancle updated ask
  const cancleUpdate = () => {
    setupdateData('');
  }

  // change task
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    }
    setupdateData(newEntry);
  }

  // update task 
  const updateTask = () => {
    let filteredrecord = [...toDo].filter(task => task.id !== updateData.id);
    let updatedObject = [...filteredrecord, updateData];
    setToDo(updatedObject);
    setupdateData('');
  }

  return (
    <div className='container App'>
      <br /><br />
      <h2>To Do List App By PB</h2>
      <br /><br />

      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancleUpdate={cancleUpdate}
        />
      ) : (
        <AddtaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      {/* if there no tasks then display it */}
      {toDo && toDo.length ? '' : <h4>No Tasks...</h4>}

      {/* display todos */}
      <ToDo
        toDo={toDo}
        markDone={markDone}
        setupdateData={setupdateData}
        deleteTask={deleteTask}
      />
    </div>
  )
}
 