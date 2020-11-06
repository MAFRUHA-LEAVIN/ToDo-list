import React from "react";

import "./search.scss";
const SearchBox = ({ placeholder, handleChange }) => (
  <div>
    <input
      icon={<Icon name="search" inverted circular link />}
      className="sear"
      type="text"
      onChange={handleChange}
      placeholder={placeholder}
    />
  </div>
);
export default SearchBox;
