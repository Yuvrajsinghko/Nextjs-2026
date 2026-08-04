export async function POST(req) {
  const body = await req.json();
  const {title,completed}=body;

  return Response.json({
    success:true,
    message:"Todo Created successfully",
    todo:{
        title,
        completed
    }
  })
}
