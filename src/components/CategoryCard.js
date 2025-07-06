// components/CategoryCard.js

"use client";

import Link from "next/link";
import Image from "next/image";

export default function CategoryCard({ category }) {
  return (
    <Link href={`/quizzes/${category.slug}`} className="block">
      <div className="border rounded-md p-4 shadow hover:shadow-lg transition">
        <Image
          src={`/icons/${category.icon}`}
          alt={category.name}
          width={80}
          height={80}
          className="mb-2"
        />
        <h2 className="text-xl font-bold">{category.name}</h2>
      </div>
    </Link>
  );
}
