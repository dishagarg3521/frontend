import React from 'react'
import {Link} from "react-router-dom"
import {Outlet} from "react-router-dom"

export default function Contact() {
  return (
    <div>
      <h2>welcome to contacts</h2>
      <button><Link to="contactus"> call or mail us</Link></button>
      <button><Link to="address"> drop a message</Link></button>
      <Outlet/>
    </div>
  )
}
