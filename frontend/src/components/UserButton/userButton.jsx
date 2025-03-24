import React, { useState } from "react";
import "./UserButton.css"; // Ensure the correct path


const UserButton = () => {
 const currentUser=true;
 const [open,setOpen]=useState(false)

  return currentUser ? (
    <div className="userbutton" >
      <img src="/general/noAvatar.png" alt="User" className='image' />
      <img  onClick={()=>setOpen((prev)=>!prev)}     src="/general/arrow.svg" alt="Arrow" className="arrow" />
      {
        open && 
        <div className="userOptions">
        <div className='userOption'>Profile</div>
        <div className='userOption'>Setting</div>
        <div className='userOption'>Logout</div>

      </div>
      }
      
    </div>
  ) : (
    <a href="/" className="loginLink" >
      Login/Signup
    </a>
  );
};

export default UserButton;
