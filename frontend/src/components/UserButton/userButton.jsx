import React from 'react'

const userButton = () => {


  const currentUser=true
  return currentUser ? (
    <div className="userbutton">
      <img src="/general/noAvatar.png" alt=""/>
      <img src="/general/arrow.svg" alt=""/>

    </div>
  ):<a  href="/" className="loginLink">Login/Signup</a>
}

export default userButton
