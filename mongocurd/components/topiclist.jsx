import Link from "next/link";
import RemoveBtn from "./remove-btn";
import { GrEdit } from "react-icons/gr";

const getTopics=async()=>{
    try {
        const res = await fetch("http://localhost:3000/api/topics",{cache:"no-store"});
        if(!res.ok){
            throw new Error('failed to fetch')
        }
        const data=await res.json();
     
        
        return data;
    } catch (error) {
        console.log("error loading topics");
        return { topics: [] };
        
    }
}


export default async function TopicsList(){
    const {topics} = await getTopics()
    return(
       <>
       {topics.map((t)=>(
        <div className="p-4 border-slate-300 my-3 flex justify-between items-start" key={t._id}>
        
            <div >
                <h2 className="font-bold text-2xl">{t.title}</h2>
                <div>{t.description}</div>
            </div>
            <div className="flex gap-2">
                <RemoveBtn id={t._id} />
                <Link href={`/edittopic/${t._id}`}>
                <GrEdit />
                </Link>
            </div>
       
        </div>
        ))}
        </>
    )
}