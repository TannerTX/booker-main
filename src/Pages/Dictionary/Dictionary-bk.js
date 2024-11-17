import React from 'react';
import "./Dictionary.css"
import * as Faicons from "react-icons/fa";

const DictionaryPage = () => {
  // const [word, setWord] = useState('');
  // const [definition, setDefinition] = useState('');

  // const handleAddWord = () => {
    // This is where you would handle the backend call to Firestore
    // Example: Add the word and definition to Firestore
    // setWord('');
    // setDefinition('');
  // };
  
  return (
<div className="card-dic">
  <h4 className="title-dic">Dictionary Form</h4>
  <form onSubmit={(e) => e.preventDefault()}>
    <div className="field-dic">
      <Faicons.FaHandMiddleFinger className="input-icon-word-dic" />
      <input id="phrase" placeholder="Word/Phrase" className="input-field-word-dic" name="phrase-textbox" />
    </div>
    <div className="field-dic">
      <Faicons.FaEdit className="input-icon-def-dic" />      
      <input id="definition" placeholder="Definition" className="input-field-def-dic" name="logpass" />
    </div>
    <button className="btn-dic" type="submit">Submit</button>
  </form>
</div>
  );
};

export default DictionaryPage;
