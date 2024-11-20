import React from 'react'
import Card from '@/app/components/card'
import Link from 'next/link'
const Notifications = () => {
  return (
    
    <Card>
      <div>notification</div>
      <Link href={"complex-dashboard/archived"} >Archive</Link>
      </Card>
  )
}

export default Notifications