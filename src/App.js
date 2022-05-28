import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Layouts/Header.js'
import News from './Pages/News';

function App() {
  return (
    <main id='News'>
      <News></News>
      {/* <Header></Header> */}
    </main>
  );
}

export default App;
