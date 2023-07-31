import React from 'react';

const NoteCardGrid = ({ noteCardsData, gridLayout }) => {
  return (
    <div className={`grid-container${gridLayout ? ' grid-layout' : ''}`}>
      {noteCardsData.map((note, index) => (
        <div className="grid-card" key={index}>
          {note}
        </div>
      ))}
    </div>
  );
};

export default NoteCardGrid;
