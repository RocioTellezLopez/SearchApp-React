import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox/index";
import SearchResults from "./components/SearchResults";
// import data from '../../data/users.json'

import './style.css';

export default function Search() {
  const [isAtTop, setIsAtTop] = useState(false); 
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          setData(data);
        })
    };
    getUsers().catch(null);
  }, []);

  const handleCloseSearch = () => {
    setIsAtTop(false);
    setResults([]);
  }

  const handleSearchClick = (searchText) => {
    setIsAtTop(true);
    if(data?.length) {
      const searchTextMinus = searchText.toLowerCase();
      const filteredData = data.filter((value) => (
          value.name.toLowerCase().includes(searchTextMinus) || 
          value.phone.toLowerCase().includes(searchTextMinus) ||
          value.email.toLowerCase().includes(searchTextMinus) ||
          value.username.toLowerCase().includes(searchTextMinus)
        )
      );
      setResults(filteredData);
    }
  };
  console.log(results);
  return (
    <div className={`search ${isAtTop? 'search--top' : 'search--center'}`}>
      <SearchBox 
      onSearch={handleSearchClick} 
      onClose={handleCloseSearch}
      isSearching={isAtTop}
      />
      <SearchResults results={results} isSearching={isAtTop}/>
    </div>
  );
}