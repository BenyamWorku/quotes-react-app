/* eslint-disable indent*/
import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import Quotetext from "./Quotetext.js";
import Quoteauthor from "./Quoteauthor.js";
import SearchButton from "./SearchButton.js";
import "./App.css";
import Button from "./Button";
function App() {
  const [quote, setQuote] = useState("placeholder quote");
  const [author, setAuthor] = useState("Anonymous");
  const [searchValue, setSearchValue] = useState(""); //input
  const [searchResults, setSearchResults] = useState(""); //output
  const search = (searchVal) => {
    setSearchValue(searchVal);
    console.log(searchVal);
    // event.preventDefault();
  };
  const getQuote = () => {
    fetch(`https://benyam-quote-server.glitch.me/quotes/random`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuote(data.quote);
        setAuthor(data.author);
      });
  };
  const getSearchResults = () => {
    fetch(
      `https://benyam-quote-server.glitch.me/quotes/search/?term=${searchValue}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // console.log(data.quote);
        setSearchResults(data);

        console.log("hey");
      });
  };
  useEffect(getSearchResults, []);
  useEffect(getQuote, []);
  console.log(searchResults);
  return (
    <div className="App">
      <Button handleClick={getQuote} />
      <div className="displayarea">
        <Quotetext text={quote} />
        <Quoteauthor name={author} />
      </div>
      <Search search={search} />
      <button onClick={getSearchResults} className="btn btn-primary">
        Search
      </button>
      <div className="searchresult">
        {searchResults.map((result) => (
          <p>{result.quote}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
