import React from 'react';
import './App.css';
import Banner from './banner';
import NoteCardCarousel from './notecard';
import Menu from './menu'

function App() {
  return (
    <div>
      <Banner />
      <Menu />
      <NoteCardCarousel />
    </div>
  );
}

export default App;