import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
function Listurl({ urlItem }) {
  const [copy, setCopy] = useState("");

  return (
    <>
      <h2 className="url-list-title">List of all url storage</h2>
      <div className="listItems">
        {urlItem.map((element, index) => {
          return (
            <div className="item">
              <p>{element}</p>
              <CopyToClipboard text={element} onCopy={() => setCopy(true)}>
                <button className={copy ? "copied" : ""}>Copy-Link</button>
              </CopyToClipboard>
            <br/>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Listurl;
