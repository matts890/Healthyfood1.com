import SearchBar from "../SearchBar";


export default function Home(){
    const handleSearch = (searchTerm) => {
        // Perform your search logic here, for example, fetch data from an API
        // Update searchResults state with the search results
        // setSearchResults(searchResultsData);
        console.log(`Searching for: ${searchTerm}`);
      };
     
      return (
        <div>

          
          <body className='body_s'>
          <SearchBar onSearch={handleSearch} />
          {/* Display search results */}
          </body>

          
          
      
        </div>
      );
}