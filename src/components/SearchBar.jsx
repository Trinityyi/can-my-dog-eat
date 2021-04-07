import React, { useState } from 'react';
import foodList from '../foodList';

const SearchBar = () => {
  const [input, setInput] = useState('');

  const updateInput = (input) => {
    const filtered = foodList.filter((food) => {
      return food.name.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    console.log(filtered.map((x) => x.name));
  };

  return (
    <div className="search-bar pb-4">
      <label htmlFor="query" className="label sr-only">
        Food Name
      </label>
      <input
        type="text"
        name="query"
        className="input w-full text-2xl px-4 py-2 rounded-3xl border border-gray-500 mb-4"
        placeholder="Search..."
        value={input}
        onChange={(e) => updateInput(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
