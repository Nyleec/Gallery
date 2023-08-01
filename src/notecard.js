import React, { useState, useEffect } from 'react';
import NoteCardGrid from './NoteCardGrid'; // Import the NoteCardGrid component
import Papa from 'papaparse';

const NoteCardCarousel = () => {
  const [noteCardsData, setNoteCardsData] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [viewMode, setViewMode] = useState('carousel'); // Added viewMode state
  const [maximizedCardIndex, setMaximizedCardIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.csv'); // Assuming the data.csv file is in the public folder
      const csvData = await response.text();
      const parsedData = Papa.parse(csvData).data;
      setNoteCardsData(parsedData.flat()); // Convert 2D array to a flat array
    };

    fetchData();
  }, []);

  const nextCard = () => {
    setCurrentCardIndex((currentCardIndex + 1) % noteCardsData.length);
  };

  const prevCard = () => {
    setCurrentCardIndex((currentCardIndex - 1 + noteCardsData.length) % noteCardsData.length);
  };

  const toggleViewMode = () => {
    setViewMode(prevMode => (prevMode === 'carousel' ? 'grid' : 'carousel'));
    //setMaximizedCardIndex(null); // Reset the maximized card index when switching views
  };

  const handleCardClick = (index) => {
    setViewMode('carousel'); // Switch to carousel view when a card is clicked
    setCurrentCardIndex(index);// switches the clicked card index to be shown in carousel
  };

  return (
    <div className='coloredDiv'>
    <div className={`note-card-carousel-container${viewMode === 'grid' ? ' grid-layout' : ''}`}>
      {viewMode === 'carousel' ? (
        <>
          <div className="carousel-container">
            <div className="note-cards-container" >
            <div className="note-card prev" onClick={prevCard}>
              <div className='note-card child'>{noteCardsData[(currentCardIndex - 1 + noteCardsData.length) % noteCardsData.length]}</div>
            </div>
            <div className={`note-card ${currentCardIndex === 0 ? 'active' : ''}`}>
              <div className='note-card child'>{noteCardsData[currentCardIndex]}</div>
            </div>
            <div className="note-card next" onClick={nextCard}>
              <div className='note-card child'> {noteCardsData[(currentCardIndex + 1) % noteCardsData.length]}</div> 
            </div>
            </div>
            <div className="carousel-arrows">
              <span className="arrow" onClick={prevCard}>&#10094;</span>
              <span className="arrow" onClick={nextCard}>&#10095;</span>
            </div>
          </div>
        </>
      ) : (
        <NoteCardGrid noteCardsData={noteCardsData} gridLayout={true} onCardClick={handleCardClick} />
      )}

      <div className="menu-button" onClick={toggleViewMode}>
        {viewMode === 'carousel' ? 'Switch to Grid View' : 'Switch to Carousel View'}
      </div>
    </div>
    </div>
  );
};

export default NoteCardCarousel;
