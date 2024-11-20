
"use client"


import { useEffect } from "react"

export default function ErrorPage({error}:{error:Error}){
useEffect(()=>{
console.error(`${error}`);

},[error])
return(
    <div className="text-red-400">Error happend</div>
)

}