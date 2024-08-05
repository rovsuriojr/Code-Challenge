import React, { useState } from 'react';

const TypeAhead = () => {
  const [userInput, setUserInput] = useState(''); // To get user input

  const handleInputChange = async (e) => { // To capture every change on user input in input field
    const value = e.target.value;
    setUserInput(value);

    console.log(userInput)

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
    </div>
  );
};

export default TypeAhead;