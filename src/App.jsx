import React from 'react';
import Search from './components/Search';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <>
      <div className="app flex flex-col items-center p-8">
        <img className="w-32 m-8" alt="" src={process.env.PUBLIC_URL + `static/dog.svg`} />
        <h1 className="title text-7xl pb-8">Can My Dog Eat...</h1>
        <Search />
      </div>

      <Footer />
    </>
  );
};

export default App;
