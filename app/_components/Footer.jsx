import Image from 'next/image';
import React from 'react'

function Footer() {
    const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN;
  return (
    <div>
        {/* Footer */}
        <div className="bg-[#4b7e37] text-white px-6 py-8">
  <div className="max-w-6xl mx-16 grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Left Column */}
    <div>
      <Image width={300} height={300} src={`${domain}/images/logo.png`} alt="Logo" className="" />
      <p className="text-sm mt-6">
        123 Canal Street, WaterTown, UK <br />
        Phone: +44 123 456 789 <br />
        Email: info@example.com
      </p>
    </div>

    {/* Right Column */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">About</a></li>
        <li><a href="#" className="hover:underline">Services</a></li>
        <li><a href="#" className="hover:underline">Contact</a></li>
      </ul>
    </div>
  </div>
</div>

    </div>
  )
}

export default Footer