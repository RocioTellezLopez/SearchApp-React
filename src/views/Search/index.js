import { useState } from "react";
import SearchBox from "./components/SearchBox/index";
import './style.css';

export default function Search() {
  const [isAtTop, setIsAtTop] = useState(false); 

  const handleCloseOpenSearch = () => {
    setIsAtTop(!isAtTop);
  }

  return (
    <div className={`search ${isAtTop? 'search--top' : 'search--center'}`}>
      <SearchBox onSearch={handleCloseOpenSearch} onClose={handleCloseOpenSearch}/>
    </div>
  );
}