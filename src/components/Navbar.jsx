import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    {
      name: 'ABOUT US',
      dropdown: [
        { name: 'Our Team', path: '/about/team' },
        { name: 'Our Story', path: '/about/story' },
      ],
    },
    {
      name: 'SERVICES',
      dropdown: [
        { name: 'Consultation', path: '/services/consultation' },
        { name: 'Therapy', path: '/services/therapy' },
      ],
    },
    { name: 'CONTACTS', path: '/contacts' },
    { name: 'APPOINTMENTS', path: '/appointments' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-500">Kids Care</div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            !link.dropdown ? (
              <Link
                key={link.name}
                to={link.path}
                className={`text-black font-medium px-4 py-2 rounded hover:bg-red-500 transition-colors duration-300 ${
                  isActive(link.path) ? 'bg-red-500 text-white' : ''
                }`}
              >
                {link.name}
              </Link>
            ) : (
              <div key={link.name} className="relative group">
                <button className="text-black font-medium px-4 py-2 rounded hover:bg-red-500 transition-colors duration-300">
                  {link.name}
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 rounded-md">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`block px-4 py-2 text-black rounded hover:bg-red-500 transition-colors duration-300 ${
                        isActive(item.path) ? 'bg-red-500 text-white' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )
          ))}
        </nav>

        {/* Search Icon */}
        <div className="hidden md:block text-blue-500 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 19a8 8 0 100-16 8 8 0 000 16zm6-6l4 4"
            />
          </svg>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          {navLinks.map((link) => (
            !link.dropdown ? (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-2 text-black rounded hover:bg-gray-100 transition-colors duration-300 ${
                  isActive(link.path) ? 'bg-red-500 text-white' : ''
                }`}
              >
                {link.name}
              </Link>
            ) : (
              <div key={link.name} className="px-4 py-2">
                <button className="text-black font-medium w-full text-left">
                  {link.name}
                </button>
                <div className="pl-4">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`block px-4 py-2 text-black rounded hover:bg-gray-100 transition-colors duration-300 ${
                        isActive(item.path) ? 'bg-red-500 text-white' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
