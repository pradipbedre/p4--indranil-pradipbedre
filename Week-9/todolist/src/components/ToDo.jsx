import React from 'react';
import { FaCheckCircle, FaPen, FaTrashAlt } from "d:/1.Webdev/p4--indranil-pradipbedre/Week-9/todolist/node_modules/react-icons/fa";

function ToDo({toDo,markDone,setupdateData,deleteTask}) {
    return (
        <div>
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
        </div>
    )
}

export default ToDo;