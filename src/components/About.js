import React from 'react'
import '../styles/about.css'

export default function About({firstName}) {
    let userProfile
    if(firstName){
        userProfile = `${firstName}!`
    }
    else{
        userProfile = "join us"
    }
    
  return (
    <div className="container">
      <div>
      <img src="/harmburger.svg" />
      </div>
      <div>shopperbird</div>
      <div>
      <span>{userProfile}</span>&nbsp; &nbsp;
      <span><img src="user.svg" /></span>

    </div>

    </div>
  )
}
