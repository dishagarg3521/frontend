import React from 'react'
import {Outlet,useParams} from "react-router-dom"

export default function ProductDetails() {
    const params = useParams()
    console.log(params)
  return (
    <div>
       <h1> product details</h1>
       product id{params.id}
      <Outlet/>
    </div>
  )
}
