
import React from 'react'

const Docs = ({params}:{params:{
    slug:String
}}) => 
    {
        if(params.slug?.length === 2){
            return <h1>first: {params.slug[0]} and second : {params.slug[1]}</h1>
        }else if(params.slug?.length===1){
            return <h1>first: {params.slug[0]}</h1>
        }
        return <h1>doc home</h1>
        }
 

export default Docs