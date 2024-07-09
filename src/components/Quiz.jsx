import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const quizData = [
  {
    questionText: 'What is 2 + 2?',
    options: ['3', '4', '5'],
    correctAnswer: '4',
  },
  {
    questionText: 'What is the capital of France?',
    options: ['Berlin', 'London', 'Paris'],
    correctAnswer: 'Paris',
  },
  {
    questionText: 'Who wrote "To Kill a Mockingbird"?',
    options: ['Harper Lee', 'Mark Twain', 'Ernest Hemingway'],
    correctAnswer: 'Harper Lee',
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateScore = () => {
    return answers.filter((answer, index) => answer === quizData[index].correctAnswer).length;
  };

  if (showResult) {
    return <Result score={calculateScore()} total={quizData.length} />;
  }

  return (
    <div>
      <Question
        question={quizData[currentQuestion]}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;
