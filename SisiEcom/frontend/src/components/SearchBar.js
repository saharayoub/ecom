import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');


  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center ml-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
        className="px-4 py-2 border border-gray-300 rounded mr-2 focus:outline-none"
        style={{ minWidth: '150px' }} // Ajoutez un style pour définir la largeur minimale de l'input
      />
      <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 focus:outline-none">
        Search
      </button>
    </form>

    
  );
  
};

export default SearchBar;
