

import NotFound from '@/app/not-found'
import React from 'react'

const Reviewwithid= ({params}:{params:{reviewid:String,productid:String}}) => {


  return (
    <>
  
    {params.reviewid==="jango"?(<NotFound/>):(
      <div>
  <h1>review{params.reviewid}</h1>
  <h1>product{params.productid}</h1>
      </div>
    )}
    </>
  )
}

export default Reviewwithid



