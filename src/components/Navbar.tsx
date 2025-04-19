"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import AIAssistantDrawer from './AIAssistantDrawer';

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActivePath = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white text-gray-800 shadow-md py-3' : 'bg-gradient-to-r from-blue-600 to-blue-500 text-white py-5'}`}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${scrolled ? 'text-blue-600' : 'text-white'}`}>
              <span className="flex items-center">
                <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.53125 10C5.22825 4.95 8.81525 2 12.0002 2C15.1862 2 18.7722 4.95 20.4692 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.53125 14C5.22825 19.05 8.81525 22 12.0002 22C15.1862 22 18.7722 19.05 20.4692 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20C10 21.1046 10.8954 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 12C21.1046 12 22 11.1046 22 10C22 8.89543 21.1046 8 20 8C18.8954 8 18 8.89543 18 10C18 11.1046 18.8954 12 20 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 12C5.10457 12 6 11.1046 6 10C6 8.89543 5.10457 8 4 8C2.89543 8 2 8.89543 2 10C2 11.1046 2.89543 12 4 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Dr. Ömer Özdemir
              </span>
            </Link>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`focus:outline-none transition-colors duration-300 ${scrolled ? 'text-blue-600' : 'text-white'}`}
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                )}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                href="/" 
                className={`font-medium text-base relative py-2 transition-colors duration-300 hover:text-blue-300 ${
                  isActivePath('/') 
                    ? scrolled 
                      ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600' 
                      : 'text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white' 
                    : scrolled 
                      ? 'text-gray-700' 
                      : 'text-white'
                }`}
              >
                Ana Sayfa
              </Link>
              <Link 
                href="/tedaviler" 
                className={`font-medium text-base relative py-2 transition-colors duration-300 hover:text-blue-300 ${
                  isActivePath('/tedaviler') 
                    ? scrolled 
                      ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600' 
                      : 'text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white' 
                    : scrolled 
                      ? 'text-gray-700' 
                      : 'text-white'
                }`}
              >
                Tedaviler
              </Link>
              <Link 
                href="/ozgecmis" 
                className={`font-medium text-base relative py-2 transition-colors duration-300 hover:text-blue-300 ${
                  isActivePath('/ozgecmis') 
                    ? scrolled 
                      ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600' 
                      : 'text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white' 
                    : scrolled 
                      ? 'text-gray-700' 
                      : 'text-white'
                }`}
              >
                Özgeçmiş
              </Link>
              <Link 
                href="/contact" 
                className={`font-medium text-base relative py-2 transition-colors duration-300 hover:text-blue-300 ${
                  isActivePath('/contact') 
                    ? scrolled 
                      ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600' 
                      : 'text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white' 
                    : scrolled 
                      ? 'text-gray-700' 
                      : 'text-white'
                }`}
              >
                İletişim
              </Link>
              <button 
                onClick={() => setDrawerOpen(true)}
                className={`ml-4 px-5 py-2 rounded-full transition-all duration-300 ${
                  scrolled 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-white text-blue-600 hover:bg-blue-50'
                }`}
              >
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  AI Assistant
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-60 mt-4' : 'max-h-0'}`}>
            <div className={`flex flex-col space-y-3 py-3 ${scrolled ? 'text-gray-700' : 'text-white'}`}>
              <Link 
                href="/" 
                className={`font-medium py-2 px-3 rounded-md ${isActivePath('/') ? 'bg-blue-700 text-white' : 'hover:bg-blue-600/10'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link 
                href="/tedaviler" 
                className={`font-medium py-2 px-3 rounded-md ${isActivePath('/tedaviler') ? 'bg-blue-700 text-white' : 'hover:bg-blue-600/10'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Tedaviler
              </Link>
              <Link 
                href="/ozgecmis" 
                className={`font-medium py-2 px-3 rounded-md ${isActivePath('/ozgecmis') ? 'bg-blue-700 text-white' : 'hover:bg-blue-600/10'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Özgeçmiş
              </Link>
              <Link 
                href="/contact" 
                className={`font-medium py-2 px-3 rounded-md ${isActivePath('/contact') ? 'bg-blue-700 text-white' : 'hover:bg-blue-600/10'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                İletişim
              </Link>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  setDrawerOpen(true);
                }}
                className={`font-medium py-2 px-3 rounded-md flex items-center ${
                  scrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'
                }`}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                AI Assistant
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* AI Asistan Drawer */}
      <AIAssistantDrawer 
        isOpen={drawerOpen} 
        onClose={() => setDrawerOpen(false)} 
      />
    </>
  );
};

export default Navbar; 