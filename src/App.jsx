import  React, { useState } from 'react'
import './App.css';
import Card from './Card.jsx'
import { robots } from './Robots.jsx'
import { SearchBar } from './Search.jsx'
import 'tachyons'
import './App.css'




const App = () => {

  const [search, setSearch] = useState('');

    const handleSearchChange = (event) => {
      setSearch(event.target.value);
    };

    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(search.toLowerCase())
    );


  return (
    <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBar onSearchChange={handleSearchChange} />
      <div className='container'> 
        <Card robots={filteredRobots} />
      </div>
      

    </div>
  )
}


export default App
