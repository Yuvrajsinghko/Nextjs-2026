"use client"

import { useParams } from 'next/navigation';
import React from 'react'

const ShopSlug = () => {
    const params = useParams();
    console.log(params);
    
  return (
    <div>ShopSlug</div>
  )
}

export default ShopSlug