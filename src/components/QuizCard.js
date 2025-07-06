// components/QuizCard.js

"use client";

import Link from "next/link";

export default function QuizCard({ quiz }) {
  return (
    <Link href={`/quiz/${quiz.id}`} className="block">
      <div className="border rounded-md p-4 shadow hover:shadow-lg transition">
        <h3 className="text-lg font-semibold">{quiz.title}</h3>
        <p className="text-gray-600">{quiz.description}</p>
      </div>
    </Link>
  );
}
