"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
export default function EditTopicForm({id,title,description}){
  
    const [newtitle, setNewtitle]=useState(title)
    const [newdescription, setNewdescription]=useState(description)
    const router=useRouter()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const response= await axios.put(`http://localhost:3000/api/topics/${id}`,{
            newtitle,
            newdescription
        });
        if(!response){
            throw new Error('failed to update')
        }
        router.push('/')

        } catch (error) {
            console.log(error);
            
        }
    }

    return(
        <form onSubmit={handleSubmit} className=" flex flex-col gap-3">
            <input onChange={(e)=>{setNewtitle(e.target.value)}} value={newtitle} type="text" placeholder="Topic Title" className="border border-slate-500 px-8 py-2"></input>
            <input onChange={(e)=>{setNewdescription(e.target.value)}} value={newdescription}type="text" placeholder="Topic Description" className="border border-slate-500 px-8 py-2"></input>
            <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Update</button>
        </form>
    )
}