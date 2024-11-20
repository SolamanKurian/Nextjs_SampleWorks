

import React from 'react'
import { Metadata } from 'next'
type Props={
    params:{
        productid:String
    }
}

export const generateMetadata=({params}:Props):Metadata=>{//dynamic metadata
    return{
        title:`Product ${params.productid}`
    }
}


const ProductDetails = ({params}:Props) => {
    return <h1>product details {params.productid}</h1>
}

export default ProductDetails