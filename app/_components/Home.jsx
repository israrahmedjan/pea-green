'use client'
import React from 'react'


function HomeComponent() {
    const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN;
    const imageUrl = domain+"/images/banner.png";
  return (

       <div
  className="w-full h-[300px] md:h-[500px] bg-cover -mb-2 bg-center md:-mt-1 relative"
 style={{ backgroundImage: `url(${imageUrl})` }}
>
  {/* Overlayed Text with dark background */}
<div className="absolute inset-0 flex items-center justify-center">
  <div className="bg-opacity-10 px-6 py-4 rounded max-w-3xl text-center">
    <h1 className="text-white text-base md:text-3xl font-bold leading-snug">
      The country’s finest canal cruises &<br />
      a chance to visit the world-famous<br />
      Pontcysyllte Aqueduct
    </h1>
  </div>
</div>
</div>
  )
}

export default HomeComponent