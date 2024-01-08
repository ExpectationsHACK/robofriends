import React from'react'

export const SearchBar = ({ onSearchChange }) => {
    return (
      <div className='pa2'> 
        <input className='pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='search robots....' 
            onChange={onSearchChange}
        />
      </div>
  );
}