import React, { useState } from "react";
import SearchButton from "./SearchButton.js";
export default function Search() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        id="Quote string"
        value={searchInput}
        className="form-control"
        placeholder="Quote string"
        onChange={handleSearchInput}
      />
      <SearchButton />
    </div>
  );
}
