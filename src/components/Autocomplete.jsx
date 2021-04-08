import React from 'react';

const Autocomplete = ({ suggestions, onClick }) => {
  if (!suggestions) return null;
  return (
    <div>
      {!suggestions.length ? (
        <div>No suggestion</div>
      ) : (
        <>
          <div>
            <ul>
              {suggestions.map((x) => (
                <li key={x}>
                  <button onClick={() => onClick(x)}>{x}</button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Autocomplete;
