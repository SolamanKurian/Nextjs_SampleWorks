import React from 'react'
import Card from '@/app/components/card'
import Link from 'next/link'
const Archivednotification = () => {
  return (
    <Card>
         <div>Archivednotification</div>
         <Link href={"/complex-dashboard"}>Default</Link>
    </Card>
   
  )
}

export default Archivednotification