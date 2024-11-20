
import React from 'react'
import Link from 'next/link'


const Home = () => {
  return (
    <>
    <h1 className='text-3xl bg-red-400'>Home Page</h1>
    <Link href={"/blog"}>Blog</Link>
    <Link href={"/products"}>Products</Link>
    </>
    
  )
}

export default Home