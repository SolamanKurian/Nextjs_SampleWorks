
import { type NextRequest } from 'next/server'
import { headers,cookies } from 'next/headers';
export async function GET(request:NextRequest){
  const requestHeader=new Headers(request.headers)
  console.log(requestHeader.get("Authorization"));
 (await cookies()).set("theme1","light") // this is how to set cookie
const theme=(await cookies()).get("theme1")// this is how to get the cookie
  
return new Response("<h1>Profile Api</h1>")
}