import React, { useState } from 'react';
import Papa from 'papaparse';

const Menu = ({ noteCardsData, setNoteCardsData }) => {
  const [showTextInput, setShowTextInput] = useState(false);
  const [newDataInput, setNewDataInput] = useState('');

  const handleAddData = () => {
    if (newDataInput.trim() !== '') {
      const newData = [newDataInput];
      const updatedCSVData = noteCardsData.concat(newData);
      const updatedCSV = Papa.unparse(updatedCSVData.map(item => [item]), { header: false });

      // Create a Blob and download the updated CSV
      const blob = new Blob([updatedCSV], { type: 'text/csv;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'data.csv');
      document.body.appendChild(link);
      link.click();

      // Update the state with the new data and reset the input
      setNoteCardsData(updatedCSVData);
      setNewDataInput('');
      setShowTextInput(false);
    }
  };

  return (
    <div className="menu">
      <div className='menuContainer'>
      <button>Messages</button>

      <button className="addMessage" onClick={() => setShowTextInput(true)}> Add Message </button>
      {showTextInput && (
        <div className="addMessage">
          <input
            type="text"
            value={newDataInput}
            onChange={(e) => setNewDataInput(e.target.value)}
            placeholder="Enter new data"
          />
          <button onClick={handleAddData}>Add</button>
        </div>
      )}

      <button>Gallery??</button>
      <button>Couple's Cash App</button>
      <button>LeeC's Cash App</button>
      </div>
    </div>
  );
};

export default Menu;
