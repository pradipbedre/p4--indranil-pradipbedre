import React from 'react'

function UpdateForm({ updateTask, changeTask, updateData, cancleUpdate }) {
    return (
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
    )
}

export default UpdateForm;