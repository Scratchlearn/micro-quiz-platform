import { quizzes } from '@/data/quizzes';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const filtered = quizzes.filter(q => q.category === category);
  return Response.json(filtered);
}
