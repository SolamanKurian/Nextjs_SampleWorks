import connectMongoDB from "@/libs/mongodb";
import Topic from "@/modals/topicModal";
import { NextResponse } from "next/server";



export async function PUT(request, {params} ) {
    const {id}=params;
    const { newtitle: title, newdescription: description } = await request.json();

    console.log(id,title,description);
    
    await connectMongoDB();
    const updatedTopic=await Topic.findByIdAndUpdate(id,{title, description},{ new: true })
    if(!updatedTopic){
        return NextResponse.json({ message: "Topic not found" }, { status: 404 });
    }
    return NextResponse.json({message:"updated"},{status:200})
}
export async function GET(request, {params}) {
    const {id}=params;
    await connectMongoDB();
   const topic= await Topic.findOne({_id:id})
   return NextResponse.json({topic},{status:200})
}