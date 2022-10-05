import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';


function ShortTheLink({ inputValue }) {
  const [ShortenLink, setShortenLink] = useState(' Enter url above');
  const [copy, setCopy] = useState(false);
  const [Loding, setLoding] = useState('');
  const [erroe, setError] = useState(false);

  // fetching data 
  const fetchData = async () => {
    try {
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
      setShortenLink(res.data.result.full_short_link);
    } catch (error) {
      setError(error)
    } finally {
      setLoding(false);
    }
  }

  // for api handling 
  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue])

  // this for when we click copy link button
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopy(false);
    }, 1000)

    return () => clearTimeout(timer);
  }, [copy]);

// when taks time to short url
  if (Loding) {
    return <p className='noData'>Loding...</p>
  }
// iferror comes 
  if (erroe) {
    return <p className='noData'>Please, Enter Correct url</p>
  }

  return (
    <div className='result'>
      <p >{ShortenLink} </p>
      <CopyToClipboard text={ShortenLink} onCopy={() => setCopy(true)}>
        <button className={copy ? "copied" : ""} >Copy-Link</button>
      </CopyToClipboard>
    </div>
  )
}

export default ShortTheLink;