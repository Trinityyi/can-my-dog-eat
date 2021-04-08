import React from 'react';
import Search from './components/Search';
import './App.css';

const App = () => {
  return (
    <div className="app flex flex-col items-center p-8">
      <h1 className="title text-7xl pb-8">Can My Dog Eat...</h1>
      <Search />
    </div>
  );
};

export default App;
