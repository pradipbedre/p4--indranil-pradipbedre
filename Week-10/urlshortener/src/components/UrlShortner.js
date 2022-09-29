import React from 'react'

function UrlShortner() {
    return (
        <div className='input-container'>
            <h1>URL <span><b>Shortener</b></span></h1>
            <div>
                <input type="text" placeholder='Enter url to short' />
                <button className=''>Shorten</button>
            </div>
        </div>
    )
}

export default UrlShortner;