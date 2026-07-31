import Link from 'next/link';
import React from 'react'

const TeamPage = () => {
  return (
    <div className="bg-amber-700 h-full">
      <Link href={"/admin-dashboard/team-docs"}>Go To Tead Docs</Link>
    </div>
  )
}

export default TeamPage