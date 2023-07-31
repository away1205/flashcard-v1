import { useState } from 'react';
import './App.scss';
import questions from './questions';

function App() {
  return (
    <>
      <FlashCard />
    </>
  );
}

function FlashCard() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id);
  }

  return (
    <div className='card-list'>
      {questions.map((question) => (
        <div
          className={
            selectedId === question.id ? 'card-wrapper active' : 'card-wrapper'
          }
          key={question.id}
          onClick={() =>
            handleClick(question.id === selectedId ? null : question.id)
          }
        >
          <p>
            {selectedId === question.id ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
