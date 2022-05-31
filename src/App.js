import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Layouts/Header.js'
import News from './Pages/News';
import Crud from './Pages/Admin';

function App() {
  return (
    <main id='News'>
      <News></News>
      <Crud/>
    </main>
  );
}

export default App;
