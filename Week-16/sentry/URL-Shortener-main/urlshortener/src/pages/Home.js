import React, { useState } from "react";
import UrlShortner from "../components/UrlShortner";

import Listurl from "../components/Listurl";
function Home() {
  const [inputValue, setInputValue] = useState("");
  const [urlItem, setUrlItem] = useState([]);
  return (
    <div className="App container">
      <UrlShortner
        inputValue={inputValue}
        setInputValue={setInputValue}
        setUrlItem={setUrlItem}
        urlItem={urlItem}
      />
      <Listurl urlItem={urlItem} />
    </div>
  );
}

export default Home;
