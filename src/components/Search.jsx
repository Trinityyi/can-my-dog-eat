import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Autocomplete from './Autocomplete';
import foodList from '../foodList';

const Search = () => {
  const [input, setInput] = useState('');
  const [filteredList, setFilteredList] = useState(null);
  const [result, setResult] = useState();

  const updateInput = (input) => {
    const filtered = foodList.filter((food) => {
      return food.name.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setFilteredList(filtered);
  };

  const updateResults = (input) => {
    const filtered = foodList.find((food) => {
      return food.name.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setResult(filtered);
    setFilteredList(null);
  };

  return (
    <div>
      <SearchBar input={input} onChange={updateInput} />
      <Autocomplete
        suggestions={!filteredList ? null : filteredList.map((x) => x.name)}
        onClick={(x) => updateResults(x)}
      />
      <SearchResults results={result} />
    </div>
  );
};

export default Search;
