import React, { useState } from 'react';
import quizPicData from './WidgetQuiz';

function Widget() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [score, setScore] = useState(0);

  const handleOptionClick = (breed) => {
    if (breed === quizPicData[currentQuestion].correctBreed) {
      // Correct answer
      setScore(score + 1);
    }

    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);
    setSelectedBreed('');
  };

  const renderOptions = () => {
    const currentOptions = quizPicData[currentQuestion].breedOptions;
    return currentOptions.map((breed, index) => (
      <div
        key={index}
        className={`option ${selectedBreed === breed ? 'selected' : ''}`}
        onClick={() => setSelectedBreed(breed)}
      >
        {breed}
      </div>
    ));
  };

  return (
    <div className='widget'>
      {currentQuestion < quizPicData.length ? (
        <div className="widget__card">
          <div className="widget__header">
            <img src={quizPicData[currentQuestion].image} alt={`Dog ${currentQuestion + 1}`} />
          </div>
          <div className="widget__options">
            {renderOptions()}
          </div>
          <div className="widget__footer">
            <button onClick={() => handleOptionClick(selectedBreed)}>Next</button>
          </div>
        </div>
      ) : (
        // Quiz completed
        <div className="quiz-completed">
          <h2>Quiz Completed!</h2>
          <p>Your score: {score} / {quizPicData.length}</p>
        </div>
      )}
    </div>
  );
}

export default Widget;
