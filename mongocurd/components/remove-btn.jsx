"use client"
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { useRouter } from "next/navigation";
export default function RemoveBtn({id}){
    const router=useRouter()
    const removeTopic=async()=>{
        const confiremed =confirm("Are you sure?")
        if (confiremed){
            await axios.delete(`http://localhost:3000/api/topics?id=${id}`).then(()=>{
                router.refresh()
            })
        }
    }

    return(
        <button onClick={removeTopic} className="text-red-400">

<MdDeleteForever size={24}/>
        </button>
    )
}