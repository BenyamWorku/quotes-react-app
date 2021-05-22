/* eslint-disable indent*/
import React, { useState, useEffect } from "react";

import Quotetext from "./Quotetext.js";
import Quoteauthor from "./Quoteauthor.js";
import "./App.css";
import Button from "./Button";
function App() {
  const [quote, setQuote] = useState("placeholder quote");
  const [author, setAuthor] = useState("Anonymous");
  const getQuote = () => {
    fetch(`https://benyam-quote-server.glitch.me/quotes/random`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuote(data.quote);
        setAuthor(data.author);
      });
  };

  useEffect(getQuote, []);

  return (
    <div className="App">
      <Button handleClick={getQuote} />
      <div className="displayarea">
        <Quotetext text={quote} />
        <Quoteauthor name={author} />
      </div>
    </div>
  );
}

export default App;
