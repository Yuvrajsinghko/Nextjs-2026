import Link from 'next/link';
import React from 'react'

const OnePage = () => {
  return (
    <div className="flex text-4xl flex-col h-screen items-center justify-center">
        <Link href={"/one/two"}>Redirect to page two</Link>
        <Link href={"/three"}>Redirect to page three</Link>

    </div>
  )
}

export default OnePage