import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Track mobile menu state
  const location = useLocation(); // Get the current location

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu visibility
  };

  // Helper function to check if the current route is active
  const isActiveRoute = (path) => location.pathname === path;

  return (
    <div className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-2">
      <div className="text-lg font-semibold">
        <Link to="/">APP</Link>
      </div>

      {/* Mobile Icon */}
      <div className="lg:hidden flex items-center" onClick={toggleMenu}>
        <button className="text-gray-800 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } lg:block font-semibold text-lg`}
      >
        <ul className="flex lg:flex-row flex-col lg:items-center lg:space-x-8 space-y-4 lg:space-y-0">
          <li
            className={`p-4 duration-200 cursor-pointer ${
              isActiveRoute('/todo') ? 'border-b-2 border-green-500' : 'border-b-2 border-white'
            }`}
          >
            <Link to="/todo">TodoList</Link>
          </li>
          <li
            className={`p-4 duration-200 cursor-pointer ${
              isActiveRoute('/state-city') ? 'border-b-2 border-green-500' : 'border-b-2 border-white'
            }`}
          >
            <Link to="/state-city">StateCitySelector</Link>
          </li>
          <li
            className={`p-4 duration-200 cursor-pointer ${
              isActiveRoute('/posts-select') ? 'border-b-2 border-green-500' : 'border-b-2 border-white'
            }`}
          >
            <Link to="/posts-select">PostSelector</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
