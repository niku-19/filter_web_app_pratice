import React from 'react'
import { BiSearchAlt } from "react-icons/bi"
import "./Styles.css"
const Search = () => {
  return (
    <div className='container'>
      <div className="search__container">
        <BiSearchAlt className='search__icon' />
        <input type="text" placeholder='Woodland Hills' />
      </div>
    </div>
  );
}

export default Search
