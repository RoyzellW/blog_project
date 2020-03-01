import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from "./components/Header";
import Model from "./components/Model";

function App() {
  return (
    <div className="App">
        <Header/>
        <Model/>
        <Home/>
    </div>
  );
}

export default App;
