import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';  // Importing Link from React Router

const SelectMenu = ({ isAuthenticated }) => { // Accept isAuthenticated as a prop
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to handle logout
  const handleLogout = () => {
    // Implement logout functionality here
    console.log("Logging out...");
    toggleMenu();  // Optionally close the menu
    // Add code to clear authentication state or perform logout actions
  };

  return (
    <div className="relative m-0">
      <button 
        className="bg-black text-white px-4 py-2 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-900 w-full"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={faUserCircle} />
        <span>Connexion</span>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" onClick={toggleMenu}>Login</Link>
            {isAuthenticated && ( // Render logout button only if user is authenticated
              <button 
                className="text-left w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectMenu;
