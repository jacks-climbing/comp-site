import React from 'react';
import Navbar from '../src/components/navbar';
import Welcome from '../src/components/welcome';
import './App.css';
import About from './components/about';
import Registration from './components/registration';
import Rules from './components/rules';


function App() {
  return (
    <div className="App">
      
      <Navbar />
      <div id="home">
        <Welcome />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="sign_up">
        <Registration />
      </div>
      <div id="rules">
        <Rules />
      </div>
    </div>
  );
}

export default App;
