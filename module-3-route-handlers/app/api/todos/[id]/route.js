export async function PUT(req, { params }) {
  const data = await req.json();
  const updatedTodo = { id: params.id, ...data };

  return Response.json({ todo: updatedTodo });
}


