import React from 'react';

const SearchBar = ({ input, onChange }) => {
  return (
    <div className="search-bar">
      <label htmlFor="query" className="label sr-only">
        Food Name
      </label>
      <input
        type="text"
        name="query"
        className="input text-2xl px-4 py-2 outline-none rounded-lg border border-gray-500"
        placeholder="Search..."
        autoComplete="off"
        value={input}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
