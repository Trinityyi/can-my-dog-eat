import React from 'react';
import Search from './components/Search';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app flex flex-col items-center p-8">
      <h1 className="title text-7xl pb-8">Can My Dog Eat...</h1>
      <Search />
      <Footer />
    </div>
  );
};

export default App;
