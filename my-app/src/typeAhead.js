import React, { useState } from 'react';
import axios from 'axios';

const TypeAhead = () => {
  const [userInput, setUserInput] = useState(''); // To get user input
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (e) => { // To capture every change on user input in input field
    const value = e.target.value;
    setUserInput(value);

    if (value.length > 0) {
        const response = await axios.get('/sampleData.json'); // call the API
        let filteredSuggestions = response.data.filter(item => // variable to get array of colors that contains 'userInput'
          item.name.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
      } else {
        setSuggestions([]);
      }

  };

  return (
    <div className="container mt-5">
      <input
        type="text"
        className="form-control" 
        placeholder="Search color names"
        value={userInput}
        onChange={handleInputChange}
      />
    {suggestions.length > 0 && (
        <ul className="list-group mt-2">
          {suggestions.map(suggestion => (
            <li key={suggestion.id} className="list-group-item">
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TypeAhead;


