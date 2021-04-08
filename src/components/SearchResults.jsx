import React from 'react';

const Results = ({ results = [] }) => {
  if (!results || !results.length) return null;
  return (
    <div className="flex flex-col">
      <div>Name: {results[0].name}</div>
      <div>Can Eat: {results[0].canEat}</div>
      <div>Level: {results[0].level}</div>
      <div>Description: {results[0].description}</div>
      <div>Tips: {results[0].tips}</div>
    </div>
  );
};

export default Results;
