import React, { useState } from "react";

function SearchItems({ items }) {
  const [searchText, setSearchText] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="counter">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchText(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchItems;
