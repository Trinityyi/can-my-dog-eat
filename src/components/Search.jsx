import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Autocomplete from './Autocomplete';
import foodList from '../foodList';

const Search = () => {
  const [input, setInput] = useState('');
  const [filteredList, setFilteredList] = useState(null);
  const [result, setResult] = useState();
  const [pointer, setPointer] = useState(-1);

  const updateInput = (input) => {
    const inputString = input.trim().toLowerCase();
    const filtered = foodList.filter((food) => {
      return food.name.toLowerCase().includes(inputString);
    });
    setInput(input);
    setFilteredList(inputString === '' ? null : filtered.slice(0, 5));
    setPointer(-1);
  };

  const updateResults = (input) => {
    const filtered = foodList.find((food) => {
      return food.name.toLowerCase() === input.toLowerCase();
    });
    setInput(input);
    setResult(filtered);
    setFilteredList(null);
    setPointer(-1);
  };

  const handleNavigation = (key) => {
    if (!filteredList) return;
    if (key === 'ArrowDown') {
      let newPointer = pointer + 1;
      if (newPointer >= filteredList.length) newPointer = 0;
      setPointer(newPointer);
    } else if (key === 'ArrowUp') {
      let newPointer = pointer - 1;
      if (newPointer < 0) newPointer = filteredList.length - 1;
      setPointer(newPointer);
    }
  };

  return (
    <>
      <div
        className={`search-input rounded-lg mb-5 relative ${
          !filteredList ? '' : 'with-autocomplete'
        }`}
        onKeyUp={(e) => handleNavigation(e.key)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            updateResults(pointer === -1 ? input : filteredList[pointer].name);
          }
        }}
        onBlur={() => setPointer(-1)}
      >
        <SearchBar input={input} onChange={updateInput} />
        <Autocomplete
          suggestions={!filteredList ? null : filteredList.map((x) => x.name)}
          onClick={(x) => updateResults(x)}
          selectedIndex={pointer}
        />
      </div>
      <SearchResults results={result} />
    </>
  );
};

export default Search;
