import React, { useState } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handelChange = e => {
        setInput(e.target.value);
    }

    const handelSubmit = e => {
        // The preventDefault() method stops the 
        // default action of a selected element from happening by a user
        e.preventDefault();

        // props.onSubmit({
        //     id: Math.floor(Math.random() * 10000),
        //     text: input
        // });
       setInput('');
    };

    return (
        <form className='todo-form' onSubmit={handelSubmit}>
            <input
                type="text"
                placeholder='Add To Do'
                value={input}
                className='todo-input'
                onChange={handelChange}
            />
            <button className='todo-button'>Add todo</button>
        </form>
    )
}

export default TodoForm;