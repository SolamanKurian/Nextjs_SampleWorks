import React from 'react'

const layout = ({children}:{
    children:React.ReactNode;
}) => {
  return (
    <>
    {children}
    <h2>featured products</h2>
    </>
  )
}

export default layout