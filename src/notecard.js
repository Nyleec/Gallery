import React, { useState } from 'react';
import NoteCardGrid from './NoteCardGrid'; // Import the NoteCardGrid component

const NoteCardCarousel = () => {
  const noteCardsData = [
    "Note Card 1",
    "Note Card 2",
    "Note Card 3",
    // Add more note cards as needed
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [viewMode, setViewMode] = useState('carousel'); // Added viewMode state

  const nextCard = () => {
    setCurrentCardIndex((currentCardIndex + 1) % noteCardsData.length);
  };

  const prevCard = () => {
    setCurrentCardIndex((currentCardIndex - 1 + noteCardsData.length) % noteCardsData.length);
  };

  const toggleViewMode = () => {
    setViewMode(prevMode => (prevMode === 'carousel' ? 'grid' : 'carousel'));
  };

  return (
    <div className="carousel-container">
      {viewMode === 'carousel' ? (
        <>
          <div className="note-cards-container">
            <div className="note-card prev">
              {noteCardsData[(currentCardIndex - 1 + noteCardsData.length) % noteCardsData.length]}
            </div>
            <div className={`note-card ${currentCardIndex === 0 ? 'active' : ''}`}>
              {noteCardsData[currentCardIndex]}
            </div>
            <div className="note-card next">
              {noteCardsData[(currentCardIndex + 1) % noteCardsData.length]}
            </div>
          </div>
          <div className="carousel-arrows">
            <span className="arrow" onClick={prevCard}>&#10094;</span>
            <span className="arrow" onClick={nextCard}>&#10095;</span>
          </div>
        </>
      ) : (
        <NoteCardGrid noteCardsData={noteCardsData} />
      )}

      <div className="menu-button" onClick={toggleViewMode}>
        {viewMode === 'carousel' ? 'Switch to Grid View' : 'Switch to Carousel View'}
      </div>
    </div>
  );
};

export default NoteCardCarousel;
