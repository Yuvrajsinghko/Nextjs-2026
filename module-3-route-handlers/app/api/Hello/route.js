export async function GET(req) {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  const res = await data.json();
  return Response.json({
    data:res
  });
}
