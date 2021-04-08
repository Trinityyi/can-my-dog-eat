import React, { useState } from 'react';
import SearchBar from './SearchBar';
import foodList from '../foodList';

const Search = () => {
  const [input, setInput] = useState('');
  const [filteredList, setFilteredList] = useState([]);

  const updateInput = (input) => {
    const filtered = foodList.filter((food) => {
      return food.name.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setFilteredList(filtered);
    console.log(filtered.map((x) => x.name));
  };

  return (
    <div>
      <SearchBar input={input} onChange={updateInput} />
    </div>
  );
};

export default Search;