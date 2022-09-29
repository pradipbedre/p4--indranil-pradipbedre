import React from 'react'

function AddTaskForm({ newTask, setNewTask, addTask }) {
    return (

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

    )
}

export default AddTaskForm;