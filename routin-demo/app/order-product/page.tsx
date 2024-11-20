"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
const OrderProduct = () => {
const router=useRouter();
const handleClick=()=>{
    console.log("placed")
    router.push('/')
}

  return (
    <>
    <div>OrderProduct</div>
    <button onClick={handleClick}>Order</button>
    </>
    
  )
}

export default OrderProduct
