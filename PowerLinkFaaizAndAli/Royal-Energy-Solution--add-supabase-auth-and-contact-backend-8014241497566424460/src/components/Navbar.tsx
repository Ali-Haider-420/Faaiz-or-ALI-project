
"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
// import { Building } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          {/* <Building className={`h-8 w-8 ${isScrolled ? 'text-royal-blue' : 'text-royal-yellow'}`} /> */}
          <Image
            src="/logo.png"
            alt="Royal Energy Solutions Logo"
            width={35}    // <-- Use a smaller number like this
            height={9}     // <-- And a smaller number like this
            priority={true}
          />
           <div>
            <span className={`font-bold text-xl ${isScrolled ? 'text-royal-green' : 'text-white'}`}>Powerlink Electrical</span>
            <span className={`font-bold text-xl ${isScrolled ? 'text-royal-green' : 'text-royal-green'}`}> Services</span>
          </div>
        </Link>
        
{/* Desktop Navigation */}
<nav className="hidden md:flex items-center space-x-6">
  <a href="#services" className={`font-medium ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-royal-lightblue transition-colors`}>Services</a>
  <a href="#about" className={`font-medium ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-royal-lightblue transition-colors`}>About</a>
  <a href="#testimonials" className={`font-medium ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-royal-lightblue transition-colors`}>Testimonials</a>
  <Button asChild className="bg-green text-royal-darkgray font-semibold hover:bg-green/90">
    <Link href="/signup">Sign Up</Link>
  </Button>
 
</nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-royal-blue" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${isScrolled ? 'text-royal-blue' : 'text-white'}`}>
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>
      
 {/* Mobile Menu */}
{mobileMenuOpen && (
  <div className="md:hidden bg-white shadow-lg">
    <nav className="flex flex-col px-4 py-4">
      <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-700 hover:text-royal-lightblue">Services</a>
      <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-700 hover:text-royal-lightblue">About</a>
      <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="py-2 text-gray-700 hover:text-royal-lightblue">Testimonials</a>
      <Link href="/signup" onClick={() => setMobileMenuOpen(false)} className="py-2 text-royal-blue font-medium">Sign Up</Link>
      <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2 text-royal-blue font-medium">Contact Us</a>
    </nav>
  </div>
)}
    
    </header>
  );
};

export default Navbar;
