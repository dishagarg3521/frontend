import React from 'react'
import{Outlet,NavLink} from "react-router-dom"

export default function Product() {
  return (
    <div>
      {/* <h2>welcome to products</h2> */}
      <NavLink to="123456" style={{marginRight:"10px"}}>
        products id 123456 </NavLink>
        <NavLink to="45678" style={{marginRight:"10px"}}>
        products id 45678 </NavLink>
        <NavLink to="9101123" style={{marginRight:"10px"}}>
        products id 9101123 </NavLink>
        <Outlet/>
    </div>
  )
}
