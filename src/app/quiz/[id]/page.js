// // app/quiz/[id]/page.js

// 'use client'; // Needed for client-side state

// import { useEffect, useState } from 'react';

// export const dynamic = 'force-dynamic'; // SSR

// async function fetchQuiz(id) {
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
//   const res = await fetch(`${baseUrl}/api/quiz?id=${id}`, {
//     cache: 'no-store',
//   });
//   if (!res.ok) throw new Error('Failed to load quiz');
//   return res.json();
// }

// export default function QuizPage({ params }) {
//   const { id } = params;
//   const [quiz, setQuiz] = useState(null);
//   const [currentQ, setCurrentQ] = useState(0);
//   const [selected, setSelected] = useState(null);
//   const [feedback, setFeedback] = useState('');
//   const [score, setScore] = useState(0);
//   const [completed, setCompleted] = useState(false);

//   useEffect(() => {
//     fetchQuiz(id).then(setQuiz).catch(console.error);
//   }, [id]);

//   if (!quiz) return <p className="p-8">Loading quiz...</p>;

//   const q = quiz.questions[currentQ];

//   const handleAnswer = (option) => {
//     setSelected(option);
//     const isCorrect = option === q.answer;
//     if (isCorrect) {
//       setScore(score + 1);
//       setFeedback('✅ Correct!');
//     } else {
//       setFeedback(`❌ Incorrect! Correct answer: ${q.answer}`);
//     }

//     // Proceed to next question after delay
//     setTimeout(() => {
//       if (currentQ + 1 < quiz.questions.length) {
//         setCurrentQ(currentQ + 1);
//         setSelected(null);
//         setFeedback('');
//       } else {
//         setCompleted(true);
//       }
//     }, 1500);
//   };

//   return (
//     <main className="p-8 max-w-2xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">{quiz.title}</h1>

//       {!completed ? (
//         <div className="space-y-4">
//           <h2 className="text-lg font-semibold">
//             Question {currentQ + 1}: {q.question}
//           </h2>

//           <div className="grid grid-cols-1 gap-3">
//             {q.options.map((opt, i) => (
//               <button
//                 key={i}
//                 disabled={!!selected}
//                 onClick={() => handleAnswer(opt)}
//                 className={`p-3 rounded border text-left ${
//                   selected === opt
//                     ? opt === q.answer
//                       ? 'bg-green-100 border-green-400'
//                       : 'bg-red-100 border-red-400'
//                     : 'hover:bg-gray-100'
//                 }`}
//               >
//                 {opt}
//               </button>
//             ))}
//           </div>

//           {feedback && <p className="mt-2 font-medium">{feedback}</p>}
//         </div>
//       ) : (
//         <div className="text-center">
//           <h2 className="text-xl font-bold">🎉 Quiz Completed!</h2>
//           <p className="mt-4 text-lg">
//             Your Score: <span className="font-bold">{score}</span> / {quiz.questions.length}
//           </p>
//         </div>
//       )}
//     </main>
//   );
// }

// ✅ ✅ ✅ This file is a Server Component
import QuizClient from '@/components/QuizClient';

export const dynamic = 'force-dynamic'; // ensures SSR for every request

export default async function QuizPage({ params }) {
  const { id } = params;

  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

  const res = await fetch(`${baseUrl}/api/quiz?id=${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Failed to load quiz ${id}`);
  }

  const quiz = await res.json();

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <QuizClient quiz={quiz} />
    </main>
  );
}
