import React from 'react';

const Autocomplete = ({ suggestions, onClick }) => {
  if (!suggestions) return null;
  return (
    <div className="autocomplete px-2 py-1 absolute z-10 w-full bg-white rounded-b-lg rounded-t-none border border-t-0 border-gray-500">
      {!suggestions.length ? (
        <div>No suggestion</div>
      ) : (
        <ul>
          {suggestions.map((x) => (
            <li className="block" key={x}>
              <button onClick={() => onClick(x)}>{x}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
