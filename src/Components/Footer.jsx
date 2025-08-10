import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
        <div className='bg-white w-full h-12 text-black flex justify-center items-center pt-4'>
          <a href="https://github.com/AShiSH9985/">
            <FontAwesomeIcon icon={faGithub} size="2x" className='mb-2 mr-8'/>
          </a>
          <a href="https://www.linkedin.com/in/ashish-choudhary-621a7a281/">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className='mb-2 ml-8 mr-8'/>
          </a>
          <a href=" mailto: ashish8979778599@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="2x" className='mb-2 ml-8'/>
          </a>

        </div>
  )
}

export default Footer