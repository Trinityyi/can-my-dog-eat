import React from 'react';

function SearchBar() {
  return (
    <form className="search-bar pb-4">
        <label htmlFor="query" className="label sr-only">Food Name</label>
        <input type="text" name="query" className="input w-full text-2xl px-4 py-2 rounded-3xl border border-gray-500 mb-4" placeholder="Search..."/>
        <button type="submit" className="button w-full text-white leading-loose bg-gray-600 border border-black rounded-3xl px-4 py-2 text-1xl transition-colors hover:bg-gray-800">Search</button>
    </form>
  );
}

export default SearchBar;
