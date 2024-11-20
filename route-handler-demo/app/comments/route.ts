import { NextRequest } from "next/server"
import { comments } from "./data"

export async function GET(request:NextRequest) {
    const searchpa=request.nextUrl.searchParams
    const query=searchpa.get("query")
    const filteredComments=query? comments.filter(comment=>comment.text.includes(query)):comments
    return Response.json(filteredComments)
}

export async function POST(request:Request) {
    const comment= await request.json()
    const newComment={
        id:comments.length+1,
        text:comment.text
    }
    comments.push(newComment)
    return Response.json(newComment)
}