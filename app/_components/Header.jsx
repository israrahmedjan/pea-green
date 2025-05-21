'use client'
import Image from 'next/image';
import React from 'react'
import { ChevronDown, ChevronRight,Menu, X  } from 'lucide-react';
import { useState } from 'react';


function Header() {
    const domain = process.env.NEXT_PUBLIC_FRONT_DOMAIN;
   const [openDropdown, setOpenDropdown] = useState({
    services: false,
    services2: false,
    services3: false,
    services4: false,
    services5: false,
  });

  const handleDropdown = (key, isOpen) => {
    setOpenDropdown(prev => ({
      ...prev,
      [key]: isOpen,
    }));
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
    {/* Header for large devices and medium devics */}
    <div className='text-white  hidden md:block '>

       <div className="w-full px-16 py-2 border-b bg-[#4b7e37] ">
  {/* Top Bar: Logo Left, Text Right */}
  <div className="flex justify-between items-center h-[120px] mb-0">
    <div className="text-xl font-bold"><Image width={300} height={300} src={`${domain}/images/logo.png`} alt='logo image' /></div>
    <div className="text-xl flex items-center text-[#ffef7d] gap-4"><span >Book your holiday</span><button className='bg-[#ffef7d] text-[#4b7e37] px-2'>Click Here</button></div>
  </div>

 
</div>
 {/* Bottom Bar: Menu (visible from md and up) */}
<div className="w-full px-16 py-2 border-b bg-[#729357] text-white text-xl -mt-2">
      <nav className="flex space-x-10 items-center relative h-[40px]">
        <a href="#">Home</a>
        <a href="#">About</a>

        {/* Services Dropdown */}
        <div
          className="relative group"
          onMouseEnter={() => handleDropdown('services', true)}
          onMouseLeave={() => handleDropdown('services', false)}
        >
          <button className="flex items-center space-x-1">
            <span>Our Luxury Boats</span>
            <ChevronDown size={16} />
          </button>

          {openDropdown.services && (
            <div className="absolute top-full left-0 mt-2 w-44 bg-white text-black shadow-lg rounded-md z-10">
              <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                <ChevronRight size={14} className="mr-2" />
                Web Development
              </a>
              <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                <ChevronRight size={14} className="mr-2" />
                SEO Services
              </a>

              {/* Services 2 Submenu */}
              <div
                className="relative group"
                onMouseEnter={() => handleDropdown('services2', true)}
                onMouseLeave={() => handleDropdown('services2', false)}
              >
                <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <ChevronRight size={14} className="mr-2" />
                  Services 2
                  <ChevronRight size={14} className="ml-auto" />
                </div>

                {openDropdown.services2 && (
                  <div className="absolute left-full top-0 ml-1 w-40 bg-white text-black shadow-lg rounded-md z-20">
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                      <ChevronRight size={14} className="mr-2" />
                      Design
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                      <ChevronRight size={14} className="mr-2" />
                      Consulting
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

          {/* Services Dropdown */}
        <div
          className="relative group"
          onMouseEnter={() => handleDropdown('services3', true)}
          onMouseLeave={() => handleDropdown('services3', false)}
        >
          <button className="flex items-center space-x-1">
            <span>Canal Cruises </span>
            <ChevronDown size={16} />
          </button>

          {openDropdown.services3 && (
            <div className="absolute top-full left-0 mt-2 w-44 bg-white text-black shadow-lg rounded-md z-10">
              <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                <ChevronRight size={14} className="mr-2" />
                Web Development
              </a>
              <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                <ChevronRight size={14} className="mr-2" />
                SEO Services
              </a>

              {/* Services 2 Submenu */}
              <div
                className="relative group"
                onMouseEnter={() => handleDropdown('services2', true)}
                onMouseLeave={() => handleDropdown('services2', false)}
              >
                <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <ChevronRight size={14} className="mr-2" />
                  Services 2
                  <ChevronRight size={14} className="ml-auto" />
                </div>

                {openDropdown.services2 && (
                  <div className="absolute left-full top-0 ml-1 w-40 bg-white text-black shadow-lg rounded-md z-20">
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                      <ChevronRight size={14} className="mr-2" />
                      Design
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                      <ChevronRight size={14} className="mr-2" />
                      Consulting
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

           {/* Services 4 Dropdown */}
        <div
          className="relative group"
          onMouseEnter={() => handleDropdown('services4', true)}
          onMouseLeave={() => handleDropdown('services4', false)}
        >
          <button className="flex items-center space-x-1">
            <span>Whixall Marina </span>
            <ChevronDown size={16} />
          </button>

          {openDropdown.services4 && (
            <div className="absolute top-full left-0 mt-2 w-44 bg-white text-black shadow-lg rounded-md z-10">
              <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                <ChevronRight size={14} className="mr-2" />
                Web Development
              </a>
              <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                <ChevronRight size={14} className="mr-2" />
                SEO Services
              </a>

              {/* Services 4 Submenu */}
              <div
                className="relative group"
                onMouseEnter={() => handleDropdown('services2', true)}
                onMouseLeave={() => handleDropdown('services2', false)}
              >
                <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <ChevronRight size={14} className="mr-2" />
                  Services 2
                  <ChevronRight size={14} className="ml-auto" />
                </div>

                {openDropdown.services2 && (
                  <div className="absolute left-full top-0 ml-1 w-40 bg-white text-black shadow-lg rounded-md z-20">
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                      <ChevronRight size={14} className="mr-2" />
                      Design
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                      <ChevronRight size={14} className="mr-2" />
                      Consulting
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

           {/* Services 5 Dropdown */}
        <div
          className="relative group"
          onMouseEnter={() => handleDropdown('services5', true)}
          onMouseLeave={() => handleDropdown('services5', false)}
        >
          <button className="flex items-center space-x-1">
            <span>Cruise & Stay </span>
            <ChevronDown size={16} />
          </button>

          {openDropdown.services5 && (
            <div className="absolute top-full left-0 mt-2 w-44 bg-white text-black shadow-lg rounded-md z-10">
              <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                <ChevronRight size={14} className="mr-2" />
                Web Development
              </a>
              <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                <ChevronRight size={14} className="mr-2" />
                SEO Services
              </a>

              {/* Services 4 Submenu */}
              <div
                className="relative group"
                onMouseEnter={() => handleDropdown('services2', true)}
                onMouseLeave={() => handleDropdown('services2', false)}
              >
                <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <ChevronRight size={14} className="mr-2" />
                  Services 2
                  <ChevronRight size={14} className="ml-auto" />
                </div>

                {openDropdown.services2 && (
                  <div className="absolute left-full top-0 ml-1 w-40 bg-white text-black shadow-lg rounded-md z-20">
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                      <ChevronRight size={14} className="mr-2" />
                      Design
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                      <ChevronRight size={14} className="mr-2" />
                      Consulting
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <a href="#">Contact</a>
      </nav>
    </div>

    </div>

    {/* Mobile devices header */}
 <div className="text-white md:hidden bg-[#4b7e37] px-4 py-3">
      {/* Top Row: Logo + Book Button + Toggle */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <Image width={120} height={40} src={`${domain}/images/logo.png`} alt="logo" />
        </div>

        {/* Book Now */}
        <div className="text-xs text-[#ffef7d] flex flex-col items-end">
          <span className="mb-1">Book your holiday{domain}</span>
          <button className="bg-[#ffef7d] text-[#4b7e37] text-sm px-2 py-1 rounded">
            Click Here
          </button>
        </div>

        {/* Hamburger or Close Icon */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white ml-2"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="bg-[#729357] mt-3 rounded shadow-lg text-sm">
          <a href="#" className="block px-4 py-2 border-b border-white">Home</a>
          <a href="#" className="block px-4 py-2 border-b border-white">About</a>
          <a href="#" className="block px-4 py-2 border-b border-white">Luxury Boats</a>
          <a href="#" className="block px-4 py-2 border-b border-white">Canal Cruises</a>
          <a href="#" className="block px-4 py-2 border-b border-white">Whixall Marina</a>
          <a href="#" className="block px-4 py-2">Contact</a>
        </div>
      )}
    </div>


    </>
  )
}

export default Header