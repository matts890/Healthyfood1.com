
import React, { useState } from 'react';
import Navbar from './Navbar';

import HomePage from './HomePage';
import SecondPage from './SecondPage';

import SearchBar from './SearchBar';
import Footer from "./Footer";
import Login from "./Login"

import './App.css';
//text




function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    // Perform your search logic here, for example, fetch data from an API
    // Update searchResults state with the search results
    // setSearchResults(searchResultsData);
    console.log(`Searching for: ${searchTerm}`);
  };
  //Starts with Homepage
  const [currentPage, setCurrentPage] = useState('home');

  const goToSecondPage = () => {
    setCurrentPage('second');
  };

  const goBack = () => {
    setCurrentPage('home');
  };
  return (
    <div>
 
      <Navbar/>
      
      
      <SearchBar onSearch={handleSearch} />
      {/* Display search results */}
      <Footer/>
      <Login />
      {currentPage === 'home' && <HomePage goToSecondPage={goToSecondPage} />}
      {currentPage === 'second' && <SecondPage goBack={goBack} />}


    </div>
  );
}

export default App;


