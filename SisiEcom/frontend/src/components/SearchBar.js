import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch, products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (searchTerm.length > 0) {
      console.log('Recherche en cours:', searchTerm);
      const filteredSuggestions = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log('Suggestions filtrées:', filteredSuggestions);
      setSuggestions(filteredSuggestions.slice(0, 5)); // Limite les suggestions à 5
    } else {
      setSuggestions([]);
    }
  }, [searchTerm, products]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.name);
    setSuggestions([]);
    onSearch(suggestion.name);
  };

  return (
    <div className="relative flex items-center ml-4">
      <form onSubmit={handleSubmit} className="flex items-center w-full">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search..."
          className="px-4 py-2 border border-gray-300 rounded mr-2 focus:outline-none"
          style={{ minWidth: '150px' }}
        />
        <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 focus:outline-none">
          Search
        </button>
      </form>
      {suggestions.length > 0 && (
        <ul className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded shadow-lg z-10">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
            >
              {suggestion.name} ({suggestion.category})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;