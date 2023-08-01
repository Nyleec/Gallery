import React, { useState } from 'react';

const NoteCardGrid = ({ noteCardsData, onCardClick }) => {
  return (
    <div className="grid-container">
      {noteCardsData.map((noteCard, index) => (
        <div className="grid-card" key={index} onClick={() => onCardClick(index)}>
          {noteCard}
        </div>
      ))}
    </div>
  );
};

export default NoteCardGrid;