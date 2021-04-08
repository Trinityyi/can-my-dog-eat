import React from 'react';

const Results = ({ results }) => {
  return (
    <div className="flex flex-col">
      {!results ? (
        <div>We couldn't find anything for your search term.</div>
      ) : (
        <>
          <div>Name: {results.name}</div>
          <div>Can Eat: {results.canEat}</div>
          <div>Level: {results.level}</div>
          <div>Description: {results.description}</div>
          <div>Tips: {results.tips}</div>
        </>
      )}
    </div>
  );
};

export default Results;
