import React from 'react';

const NoteCardGrid = ({ noteCardsData }) => {
  return (
    <div className="grid-container">
      {noteCardsData.map((noteCard, index) => (
        <div key={index} className="grid-card">
          {noteCard}
        </div>
      ))}
    </div>
  );
};

export default NoteCardGrid;
