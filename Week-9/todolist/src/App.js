import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FaCheckCircle, FaPen, FaTrashAlt } from '../node_modules/react-icons/fa';
import './App.css';
function App() {

  // task todo list state / main state to store tasks 
  const [toDo, setToDo] = useState([
    { "id": 1, "title": "Task 1", "status": false },
    { "id": 2, "title": "Task 2", "status": false }
  ]);

  // temp state for when we will update tasks 
  const [newTask, setNewTask] = useState('');
  const [updateData, setupdateData] = useState('');

  // add task
  ////////////////////////////
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry])
      setNewTask('')
    }
  }

  // delete task
  ////////////////////////////
  const deleteTask = (id) => {
    let newtasks = toDo.filter(task => task.id !== id);
    setToDo(newtasks);
  }
  // mark task as done compleated
  ////////////////////////////
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
  ////////////////////////////
  const cancleUpdate = () => {
    setupdateData('');
  }

  // change task
  ////////////////////////////
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    }
    setupdateData(newEntry);
  }

  // update task 
  ////////////////////////////
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

        <>
          {/* update tasks form  */}
          <div className="row">
            <div className="col">
              <input
                value={updateData && updateData.title}
                onChange={(e) =>
                  changeTask(e)
                }
                type="text" className='from-control form-control-lg updatetask' />
            </div>
            <div className="col-auto">
              <button className='btn btn-lg btn-success mr-20' onClick={updateTask}>Update</button>
              <button className='btn btn-lg btn-warning mr-20' onClick={cancleUpdate}>Cancle</button>
            </div>
          </div>
          <br />
        </>
      ) : (
        <>
          {/* Add task form  */}
          <div className="row">
            <div className="col">
              <input
              
                value={newTask}
                onChange={((e) =>
                  setNewTask(e.target.value)
                )}
                type="text" className='from-control form-control-lg addtask' />
            </div>
            <div className="col-auto">
              <button
                onClick={addTask}
                className='btn btn-lg btn-success'>Add Task</button>
            </div>
          </div>
          <br />
        </>
      )}


      {/* display todos */}

      {toDo && toDo.length ? '' : <h4>No Tasks...</h4>}
      {toDo && toDo
        // sort because we need tasks sorted 
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map((task, index) => {
          return (
            <React.Fragment key={task.id}>

              <div className="col taskBg">
                <div className={task.status ? 'done' : ''}>
                  <span className='taskNumber'>{index + 1}</span>
                  <span className='taskText'>{task.title}</span>
                </div>
                <div className="iconWrap">

                  <span title='compleated' onClick={() => markDone(task.id)}><FaCheckCircle /></span>

                  {/* if task is done then hide the edit icon */}
                  {
                    task.status ? null : (
                      <span
                        onClick={() => setupdateData({
                          id: task.id,
                          title: task.title,
                          status: task.status ? true : false

                        })}
                        title='edit' ><FaPen /></span>)

                  }
                  <span title='delete' onClick={() => deleteTask(task.id)}><FaTrashAlt /></span>
                </div>
              </div>

            </React.Fragment>
          )
        })}

      <i class="fa-solid fa-circle-check"></i>

    </div>
  )
}

export default App;