import React, { useState } from 'react';

const Question = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnswer(selectedOption);
  };

  return (
    <div>
      <h2>{question.questionText}</h2>
      <form onSubmit={handleSubmit}>
        {question.options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            {option}
          </label>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Question;
