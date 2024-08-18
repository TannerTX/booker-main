import React, { useState } from 'react';

const DictionaryPage = () => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  const handleAddWord = () => {
    // This is where you would handle the backend call to Firestore
    // Example: Add the word and definition to Firestore
    setWord('');
    setDefinition('');
  };

  return (
    <div className="dictionary-page">
      <div className="form-container">
        <input
          type="text"
          placeholder="Word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <textarea
          placeholder="Definition"
          value={definition}
          onChange={(e) => setDefinition(e.target.value)}
        />
        <button onClick={handleAddWord}>Add</button>
      </div>
      <div className="dictionary-container">
        {/* Replace the below with dynamic content from Firestore */}
        <div className="dictionary-entry">
          <div className="word-box">Word 1</div>
          <div className="definition-box">Definition 1</div>
        </div>
        <div className="dictionary-entry">
          <div className="word-box">Word 2</div>
          <div className="definition-box">Definition 2</div>
        </div>
      </div>
    </div>
  );
};

export default DictionaryPage;
