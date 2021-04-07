import React from 'react';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  return (
    <div className="app flex flex-col items-center p-8">
      <h1 className="title text-7xl pb-8">Can My Dog Eat...</h1>
      <SearchBar />
    </div>
  );
};

export default App;
