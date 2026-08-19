"use client";
import { usePathname } from 'next/navigation';
import React from 'react'

const ShopItem = () => {
    const path = usePathname();
    console.log(path);
    
  return (
    <div className="text-3xl">Current Path:{path}</div>
  )
}

export default ShopItem