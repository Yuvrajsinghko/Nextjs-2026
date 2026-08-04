import { headers } from "next/headers";





export async function GET(req) {
    // const reqHeaders = new Headers(req.headers);
    const reqHeaders = await headers();
    console.log(reqHeaders.get("user-agent"));
    
    

  return new Response("<h1>Hello Yuvraj</h1>",{
    headers:{
        "content-type":"text/html"
    }
  })
}
