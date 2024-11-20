"use client";
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react';
const layout = ({children}:{children:React.ReactNode}) => {
  let pathname=usePathname()
  const [input, setInput]=useState(" ")
const navLinks=[
  {name:"Register" ,href:"/register"},
  {name:"Login" ,href:"/login"},
  {name:"Forgot Password" ,href:"/forgot-password"}
]

  return (
    <>
    <div>
      <input value={input} onChange={(e)=>{setInput(e.target.value)}}/>
    </div>
  <div>
    {navLinks.map((link)=>{
      const isActive=pathname.startsWith(link.href)
      return(
        <Link className={isActive?"font-bold mr-4":"text-blue-700 mr-4"} href={link.href} key={link.name}>{link.name}</Link>
      )
    })}
  </div>
{children}
<div>layout</div>
    </>
    
  )
}

export default layout