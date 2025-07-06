// import Image from 'next/image';
// import Link from 'next/link';

// async function getCategories() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`);
//   return res.json();
// }

// export const metadata = {
//   title: 'Micro-Quiz Platform | Home',
//   description: 'Test your knowledge in various categories!',
// };

// export default async function HomePage() {
//   const categories = await getCategories();

//   return (
//     <main className="p-8">
//       <h1 className="text-3xl font-bold mb-6">Quiz Categories</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {categories.map(cat => (
//           <Link key={cat.id} href={`/quizzes/${cat.id}`} className="block border p-4 rounded shadow hover:shadow-lg transition">
//             <Image src={cat.icon} alt={cat.name} width={64} height={64} />
//             <h2 className="text-xl mt-2">{cat.name}</h2>
//           </Link>
//         ))}
//       </div>
//     </main>
//   );
// }



// import Image from 'next/image';
// import Link from 'next/link';

// async function getCategories() {
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
//   const res = await fetch(`${baseUrl}/api/categories`, {
//     // This is important for Server Components
//     cache: 'no-store', // or 'force-cache' for SSG
//   });
//   return res.json();
// }

// export const metadata = {
//   title: 'Micro-Quiz Platform | Home',
//   description: 'Test your knowledge in various categories!',
// };

// export default async function HomePage() {
//   const categories = await getCategories();

//   return (
//     <main className="p-8">
//       <h1 className="text-3xl font-bold mb-6">Quiz Categories</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {categories.map(cat => (
//           <Link key={cat.id} href={`/quizzes/${cat.id}`} className="block border p-4 rounded shadow hover:shadow-lg transition">
//             <Image src={cat.icon} alt={cat.name} width={64} height={64} />
//             <h2 className="text-xl mt-2">{cat.name}</h2>
//           </Link>
//         ))}
//       </div>
//     </main>
//   );
// }


// app/page.js (Next.js App Router)

import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Micro-Quiz Platform | Home',
  description: 'Test your knowledge in various categories!',
};

async function getCategories() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/categories`, {
    // Ensure SSG
    cache: 'force-cache',
  });

  if (!res.ok) throw new Error('Failed to fetch categories');

  return res.json();
}

export default async function HomePage() {
  const categories = await getCategories();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Quiz Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/quizzes/${cat.id}`}
            className="block border p-4 rounded shadow hover:shadow-lg transition"
          >
            <Image
              src={cat.icon}
              alt={cat.name}
              width={64}
              height={64}
              className="mb-2"
            />
            <h2 className="text-xl">{cat.name}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
