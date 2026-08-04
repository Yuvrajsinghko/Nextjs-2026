import { headers ,cookies} from "next/headers";





export async function GET(req) {
    // const reqHeaders = new Headers(req.headers);
    const reqHeaders = await headers();
    console.log(reqHeaders.get("user-agent"));
    // const username = req.cookies.get("username")

  const cookieStore = await cookies();
  cookieStore.set("theme","dark")    
    

  return new Response("<h1>Hello Yuvraj</h1>",{
    headers:{
        "content-type":"text/html",
    }
  })
}
