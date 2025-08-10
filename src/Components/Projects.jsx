import React from 'react'


function Projects() {
  return (
    <div className='h-[85vh] pl-6 bg-gray-900 text-white grid grid-cols-3 gap-2 items-center jusitfy-center'>
      <div className='m-12'>
        <a href="https://ashish9985.github.io/Portfolio/">
          <img src="../images/portfolio.png" alt="" className='h-64 w-80 rounded-md'/>
          <h3 className="w-auto m-2 ">This is my first project Online Portfolio using HTML and CSS.</h3>
        </a>
      </div>
    
      <div className='m-12'>
        <a href="https://ashish9985.github.io/To-do-list/">
          <img src="../images/todo.jpg" alt="" className=' h-64 w-80 rounded-md' href=""/>  
          <h3 className="w-auto m-4">To Do List using HTML,CSS and JavaScript.</h3>
        </a>
      </div>
      <div className='m-12'>
        <a href="">
          <img src="../images/youtube_clone.png" alt="" className='h-64 w-80 rounded-md' href=""/>
          <h3 className="w-auto m-4">Youtube clone using HTML,CSS and Javascript</h3>
        </a>
      </div>


    </div>
  )
}

export default Projects