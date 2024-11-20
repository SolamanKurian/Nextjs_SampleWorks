

import React from 'react'
import Link from 'next/link'

const Products = () => {
  let proid=100;
  return (
    <>
    <h1>Products</h1>
    <h2>
      <Link href={"products/1"}>Product1</Link></h2>
      <h2>
      <Link href={"products/2"}>Product2</Link></h2>
      <h2>
      <Link href={"products/3"} replace>Product3</Link></h2> 
      {/* the replace will clear the url history that is by clickin back from the product3 page it will go to the home page instead of products page */}
      <h2>
      <Link href={`products/${proid}`}>Product {proid}</Link></h2>

    </>
    
  )
}

export default Products