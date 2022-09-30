import React, { useState } from 'react'
function UrlShortner({ setInputValue }) {
    const [value, setValue] = useState('');

    const handelClick = () => {
        setInputValue(value);
        setValue("");
    }

    return (
        <div className='input-container'>
            <h1>URL <span><b>Shortener</b></span></h1>
            <div>
                <input type="text" placeholder='Enter url to short' value={value}
                    onChange={(e) => setValue(e.target.value)} />
                <button onClick={()=>handelClick()}>Shorten</button>
            </div>
        </div>
    )
}

export default UrlShortner;