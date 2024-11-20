
import { NextResponse, type NextRequest } from "next/server";
export function middleware(request:NextRequest){

    //we can set the and read the theme
    const response=NextResponse.next();

    const themePreference=request.cookies.get("theme");
    if(!themePreference){// if user not previously set the theme, we set from here
        response.cookies.set("theme","dark")
    }



    if(request.nextUrl.pathname==="/profile"){
        return NextResponse.redirect(new URL("/hello",request.url))
    }
    
}

