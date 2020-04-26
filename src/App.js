import React from 'react';
import './App.css';
import Navbar from './components/views/Navbar';
import Routing from './router.js'

const App =() =>{
    return (
    <div className="App">
      <Navbar/>
      <Routing/>
    </div>
  )

}

export default App;
