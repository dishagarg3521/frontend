import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Product from './components/Product.jsx'
import ContactUs from './components/ContactUs.jsx'
import Address from './components/Address.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import{createBrowserRouter,Route,createRoutesFromElements,RouterProvider} from 'react-router-dom'
const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<App/>} >
    <Route index element={<Home/>}/> 
    <Route path='about' element={<About/>} />  
    <Route path='contact' element={<Contact/>} >  
    <Route path='contactus' element={<ContactUs/>} />  
    <Route path='address' element={<Address/>} />  
    </Route>
    <Route path='product' element={<Product/>} >  
    <Route path=":id" element={<ProductDetails/>} />  
    </Route>

    
     </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App/> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
