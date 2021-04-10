import React from 'react';

const Autocomplete = ({ suggestions, onClick, selectedIndex }) => {
  if (!suggestions) return null;
  return (
    <div className="autocomplete py-1 absolute z-10 w-full bg-white rounded-b-lg rounded-t-none border border-t-0 border-gray-500">
      {!suggestions.length ? (
        <div>No suggestion</div>
      ) : (
        <ul>
          {suggestions.map((x, i) => (
            <li className="block" key={x}>
              <button
                className={`w-full text-left p-2 transition-colors hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white ${
                  i === selectedIndex ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => onClick(x)}
              >
                {x}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
