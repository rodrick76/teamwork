import React from 'react'
import Products from './Products';



const Home = () => {
  return (
     <div >
         <div className='flex w-full mt-24 text-24'>
          <h1>NEW ARRIVALS</h1>
          </div>
          <p >your satisfaction, Our priority</p>
         
   <Products/>
     </div>
  )
}

export default Home;
