import React from "react";
import "./SearchInput.css";

const SearchInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search countries..."
      value={value}
      onChange={onChange}
      className="search-bar"
    />
  );
};

export default SearchInput;
