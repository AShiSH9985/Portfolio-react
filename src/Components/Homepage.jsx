import React, { useEffect } from 'react'



function Homepage() {
  return (
    <div className='h-[85vh] w-full bg-gray-900 flex flex-row items-center justify-center'>

        <div className='w-1/2 flex flex-col items-center justify-center'>
            <h1 className='text-white font bold text-3xl' >Ashish - Web Developer</h1>
            <h6 className=' text-white text-xl'> I enjoy designing tech websites</h6>
        </div>
        <div className='h-[85vh] w-1/2 flex items-center justify-start'>
            <img src="../images/image2.jpg" alt="" className='h-96 w-96 bg-white  rounded-full' href=""/>

        </div>
    </div>
        
  )
}

export default Homepage