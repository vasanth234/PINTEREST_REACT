import React from 'react'
import UserButton from '../UserButton/userButton'
import './topbar.css'

const topbar = () => {
  return (
    <div className="topbar">
      {/*search*/}
        <div className="search">
          <img className="image"    src="/general/search.svg" alt=""/>
          <input type="text" placeholder='search'/>

        </div>
        <UserButton/>
      
    </div>
  )
}

export default topbar
