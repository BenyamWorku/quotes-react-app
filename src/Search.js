import React, { useState } from "react";

export default function Search(props) {
  const [searchInput, setSearchInput] = useState("");
// props.search
  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
    props.search(event.target.value);
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
      
      
    </div>
  );
}
