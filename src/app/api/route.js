export async function GET() {
  const id = req.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();

  return Response.json({ data });
}
