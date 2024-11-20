import { resolve } from "path";

type User={
    id:number;
    name:string;
    username:string;
    email:string;
    phone:string;
}

export default async function Users(){
    await new Promise((resolve)=>{setTimeout(resolve,2000)})
    const response= await fetch("https://jsonplaceholder.typicode.com/users")
    const users=await response.json()
    console.log(users);
    
    return <>
   
    {users.map((user : User)=>(
         <div className="bg-green-500 w-6/12 grid grid-cols-2 gap-2">
        <div key={user.id}>
            <h1>{user.name}</h1>
            <h2>{user.username}</h2>
            <h2>{user.email}</h2>
            <h1>{user.phone}</h1>
        </div>
        </div>
    ))}
    
    </>
}