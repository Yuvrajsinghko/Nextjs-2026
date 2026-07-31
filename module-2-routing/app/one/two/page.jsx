import Link from 'next/link';
import React from 'react'

const PageTwo = () => {
  return (
    <div><Link href={"/four"}>Redirect to page four</Link></div>
  )
}

export default PageTwo