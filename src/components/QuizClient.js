'use client';

import { useState } from 'react';

export default function QuizClient({ quiz }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const q = quiz.questions[currentQ];

  const handleAnswer = (option) => {
    setSelected(option);
    const isCorrect = option === q.answer;
    if (isCorrect) {
      setScore(score + 1);
      setFeedback('✅ Correct!');
    } else {
      setFeedback(`❌ Incorrect! Correct answer: ${q.answer}`);
    }

    setTimeout(() => {
      if (currentQ + 1 < quiz.questions.length) {
        setCurrentQ(currentQ + 1);
        setSelected(null);
        setFeedback('');
      } else {
        setCompleted(true);
      }
    }, 1500);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{quiz.title}</h1>

      {!completed ? (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">
            Question {currentQ + 1}: {q.question}
          </h2>

          <div className="grid grid-cols-1 gap-3">
            {q.options.map((opt, i) => (
              <button
                key={i}
                disabled={!!selected}
                onClick={() => handleAnswer(opt)}
                className={`p-3 rounded border text-left ${
                  selected === opt
                    ? opt === q.answer
                      ? 'bg-green-100 border-green-400'
                      : 'bg-red-100 border-red-400'
                    : 'hover:bg-gray-100'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {feedback && <p className="mt-2 font-medium">{feedback}</p>}
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-bold">🎉 Quiz Completed!</h2>
          <p className="mt-4 text-lg">
            Your Score: <span className="font-bold">{score}</span> / {quiz.questions.length}
          </p>
        </div>
      )}
    </div>
  );
}
