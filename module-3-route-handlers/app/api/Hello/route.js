export async function GET(req) {


  const url = new URL(req.url)
  const {searchParams}=url;
  
  const apiUrl = new URL("https://jsonplaceholder.typicode.com/todos");
  searchParams.forEach((value,key)=>{
    apiUrl.searchParams.append(key,value)
  });

  const res = await fetch(apiUrl);
  const data = await res.json();

  return Response.json({
    data
  })

}
