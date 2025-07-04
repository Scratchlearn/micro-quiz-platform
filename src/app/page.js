import Image from 'next/image';
import Link from 'next/link';

async function getCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`);
  return res.json();
}

export const metadata = {
  title: 'Micro-Quiz Platform | Home',
  description: 'Test your knowledge in various categories!',
};

export default async function HomePage() {
  const categories = await getCategories();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Quiz Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map(cat => (
          <Link key={cat.id} href={`/quizzes/${cat.id}`} className="block border p-4 rounded shadow hover:shadow-lg transition">
            <Image src={cat.icon} alt={cat.name} width={64} height={64} />
            <h2 className="text-xl mt-2">{cat.name}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
