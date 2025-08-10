import React from 'react'

function Contact() {
  return (
    
    <div className='h-[85vh] w-full bg-gray-900 text-red flex items-center justify-center'>
      <div className='bg-white p-2 h-4/5 w-auto rounded-md flex flex-col items-center justify-center'>
    
        <h1 className='text-3xl m-2'>Contact Us</h1>
        <form action="/get-form-data" className='bg-white h-3/5 rounded-md flex flex-col items-center justify-center'>
          <input type="text" className='h-8 w-80 border-2 m-2 p-2' placeholder='Name' name="name"/>
          <input type="email"  className='h-8 w-80 border-2 m-2 p-2' placeholder="Email"/>
          <textarea className='border-2 h-16 w-80 m-2 p-1 justify-self-start items-start resize-none' placeholder="Message" />
          <button className='bg-green-400 text-white rounded-md px-8 py-2 m-8 shadow-md'>Send</button>
        </form>

      </div>
    </div>
  )
}

export default Contact