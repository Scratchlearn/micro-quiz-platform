// import Link from 'next/link';

// export async function generateMetadata({ params }) {
//   return {
//     title: `${params.category} Quizzes | Micro-Quiz Platform`,
//     description: `Take short quizzes in ${params.category}`,
//   };
// }

// async function getQuizzes(category) {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/quizzes?category=${category}`, { cache: 'no-store' });
//   return res.json();
// }

// export default async function CategoryPage({ params }) {
//   const quizzes = await getQuizzes(params.category);

//   return (
//     <main className="p-8">
//       <h1 className="text-3xl font-bold mb-6">Quizzes for {params.category}</h1>
//       {quizzes.length === 0 ? (
//         <p>No quizzes found.</p>
//       ) : (
//         <ul>
//           {quizzes.map(q => (
//             <li key={q.id} className="mb-4">
//               <Link href={`/quiz/${q.id}`} className="underline text-blue-600">{q.title}</Link>
//               <p>{q.description}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </main>
//   );
// }


// app/quizzes/[category]/page.js

import Link from 'next/link';

export const dynamic = 'force-dynamic'; // SSR: always render fresh

// Dynamic SEO
export async function generateMetadata({ params }) {
  const category = params.category;
  const capitalized = category.charAt(0).toUpperCase() + category.slice(1);
  return {
    title: `Micro-Quiz | ${capitalized} Quizzes`,
    description: `Take quizzes for ${capitalized} and test your knowledge!`,
  };
}

// Fetch quizzes for this category
async function getQuizzes(category) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  const res = await fetch(
    `${baseUrl}/api/quizzes?category=${category}`,
    { cache: 'no-store' } // SSR => no caching
  );

  if (!res.ok) throw new Error('Failed to fetch quizzes');
  return res.json();
}

export default async function CategoryPage({ params }) {
  const category = params.category;
  const quizzes = await getQuizzes(category);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">{category.toUpperCase()} Quizzes</h1>
      <ul className="space-y-4">
        {quizzes.map(q => (
          <li key={q.id} className="border p-4 rounded shadow">
            <Link href={`/quiz/${q.id}`} className="text-xl font-semibold hover:underline">
              {q.title}
            </Link>
            <p className="text-gray-600">{q.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
