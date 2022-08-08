import React from 'react'

import logo from "./images/dddd.jpeg"

import Products from './Products';




const Home = () => {
  return (
     <div >

         <img src={logo} alt='new arrival'/>
         
   <Products/>

     </div>
  )
}

export default Home;
