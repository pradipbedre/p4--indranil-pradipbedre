import React, { useEffect, useState } from "react";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

function UrlShortner({ setInputValue, inputValue, setUrlItem, urlItem }) {
  const [value, setValue] = useState("");
  const [ShortenLink, setShortenLink] = useState("");
  const [copy, setCopy] = useState(false);
  const [error, setError] = useState('');

  /*  API =  fetching data from api */
  const fetchData = async () => {
    try {
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortenLink(res.data.result.full_short_link);
      setError("");
    } catch (error) {
      setError("Please, Enter Correct URL");
    }
  };

 
  // for api handling
  useEffect(() => {
    if (inputValue.length > 8) {
      fetchData();
    }
  }, [inputValue]);

  /* this is the shorten button logic */
  const handelClick = () => {
    setInputValue(value);
    addUrlListItem();
    setValue("");
  };

  /* List of saved url logic  */
  const addUrlListItem = () => {
    /* CONDITION IF USER NOT ENTER ANY THING OR ENTER SHORT URL THEM 
    DON'T DO ANY THING 
    */
    let len = urlItem.length;
    if (ShortenLink !== urlItem[len-1]) {
      if (inputValue.length > 8) {
        setUrlItem([...urlItem, ShortenLink]);
      }
    }
  };

  return (
    <div className="main-container">
      <div className="input-container">
        <h1>
          URL{" "}
          <span>
            <b>Shortener</b>
          </span>
        </h1>
        <div>
          <input
            type="url"
            placeholder="Enter url to short"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button onClick={() => handelClick()}>Shorten</button>
        </div>
      </div>
      <p>{error}</p>
      {/* ----------------------------------------------- */}

      <div className="copy-shor-url">
        <p>{ShortenLink} </p>
        <CopyToClipboard text={ShortenLink} onCopy={() => setCopy(true)}>
          <button className={copy ? "copied" : ""}>Copy-Link</button>
        </CopyToClipboard>
      </div>
    </div>
  );
}

export default UrlShortner;
