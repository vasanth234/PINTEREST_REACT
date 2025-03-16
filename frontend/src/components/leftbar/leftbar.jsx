


import React from 'react'
import './leftbar.css'

const leftbar = () => {
  return (
    <div className="leftbar">
        <div className="menubarIcons">
            <a href="/" className="menuIcons">
            <img src="/general/logo.png"  atl=""  className="logo"/>
            </a>
            <a href="/" className="menuIcons">
            <img src="/general/home.svg"  atl="" />
            </a>
            <a href="/"  className="menuIcons"  >
            <img src="/general/create.svg"  atl="" />
            </a>
            <a href="/"  className="menuIcons"   >
            <img src="/general/updates.svg"  atl="" />
            </a>
            <a href="/"  className="menuIcons"    >
            <img src="/general/messages.svg"  atl="" />
            </a>
            <a href="/"  className="menuIcons"    >
            <img src="/general/messages.svg"  atl="" />
            </a>

        </div>
      
    </div>
  )
}

export default leftbar
