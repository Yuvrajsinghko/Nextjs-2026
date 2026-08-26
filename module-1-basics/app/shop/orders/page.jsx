"use client";

import { useRouter } from 'next/navigation';
import React from 'react'

const Orders = () => {
    const router = useRouter();
  return (
    <div className="hover:cursor-pointer" onClick={()=>router.push("/shop/sales")}>Go to products </div>
  )
}

export default Orders