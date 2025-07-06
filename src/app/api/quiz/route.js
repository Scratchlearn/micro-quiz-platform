// ✅ Make sure the import matches the actual file path
import  {quizDetails}  from '../../../data/quizDetails';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id || !quizDetails[id]) {
    return new Response(JSON.stringify({ error: 'Quiz not found' }), {
      status: 404,
    });
  }

  return Response.json(quizDetails[id]);
}
