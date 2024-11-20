import EditTopicForm from "@/components/edittopicform";
import axios from "axios";
const getTopicbyId=async(id)=>{
    try {
       const response= await axios.get(`http://localhost:3000/api/topics/${id}`)
       return response.data.topic
    } catch (error) {
        console.log("errrrrr");
        
    }
}



export default async function EditTopic({params}){
    const {id}=await params
    const topic=await getTopicbyId(id)
   const {title,description}=topic
   
    return(
        <div>
            <EditTopicForm id={id} title={title} description={description}/>
        </div>
    )
}