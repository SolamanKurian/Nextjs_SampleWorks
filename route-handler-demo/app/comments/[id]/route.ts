import { comments } from "../data"
import { redirect } from "next/navigation"
export async function GET(_request:Request, {params}:{params:{id:string}}) {

    if (parseInt(params.id)>comments.length){
        redirect("/comments")
    }
    const comm=comments.find(
        (comment)=>comment.id=== parseInt(params.id)
    )
    return Response.json(comm)
}