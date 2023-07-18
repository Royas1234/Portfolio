import React, { useState } from 'react'
import {navData} from '../Data/data.js'
import '../index.css'
import {FaBars,FaTimes,FaGithub,FaLinkedin,FaTwitter,FaInstagram} 
from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  
  const handleleClick = () => setMenu(!menu)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4  bg-[#0a192f] text-gray-200 border-b-[1px] border-b-gray-600'>
      
      <div>
        <h1 className='logo'>ROYAS</h1>
      </div>

      {/* menu */}
      
      <div>  
        <ul className='hidden md:flex'>
          {navData.map(({id, title,link}) => (
          <li key={id} className='hover:text-[#ff0144] duration-500 text-[1.2rem]' >
            <Link activeClass='active' to={link} smooth={true} offset={-70} duration={500}>{title}</Link>
          </li>
          ))}
        </ul>
      </div>

      {/* hambumger menu */}
      
      <div onClick={handleleClick} className='md:hidden z-10'>  
          {!menu ? <FaBars/> : <FaTimes/>}
      </div>

      {/* mobile menu */}
     
        <ul className={!menu ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          {navData.map(({id, title,link}) => (
          <li key={id} className='py-6 text-4xl hover:text-[#ff0144] duration-500'>
             <Link onClick={handleleClick} activeClass='active' to={link} smoot={true} offset={-70} duration={500}>{title}</Link>
          </li>
          ))}
        </ul>
     

       {/* social icons      */}
      
      <div className='hidden md:flex fixed flex-col top-[50%] left-0'>
        <ul>
          <li className='w-[160px] h-[50px] flex  items-center justify-between bg-[#0a66c2]  mb-2 ml-[-110px] hover:ml-[-10px] duration-300'>
              <a className= 'flex justify-between items-center w-full text-gray-300 text-xl' href='https://www.linkedin.com/in/rosheedat-adetunji-855a68219/' target='_blank' rel='noreferrer'>
                LinkedIn <FaLinkedin size={30}/>
              </a>
          </li>
          <li className='w-[160px] h-[50px] flex justify-between items-center mb-2 ml-[-110px] hover:ml-[-10px] duration-300 bg-[#333]'>
                <a className= 'flex justify-between items-center w-full text-gray-300 gap-6 text-xl' href='https://github.com/Royas1234' target='_blank' rel='noreferrer'>
                  Github <FaGithub size={30}/>
                </a>
          </li>
          <li className='w-[160px] h-[50px] flex justify-between items-center  mb-2  ml-[-110px] hover:ml-[-10px] duration-300 bg-[#0a66c2]'>
                <a className= 'flex justify-between items-center w-full text-gray-300 gap-6 text-xl' href='https://twitter.com/Rosheedah_Baby' target='_blank' rel='noreferrer'>
                  Twitter <FaTwitter size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[50px] flex justify-between items-center  mb-2  ml-[-110px] hover:ml-[-10px] duration-300 bg-[#ce1940]'>
                <a className= 'flex justify-between items-center w-full text-gray-300 gap-6 text-xl' href='https://www.instagram.com/oyindamolarosheedat11/' target='_blank' rel='noreferrer'>
                  Instagram <FaInstagram size={30}/>
                </a>
            </li>
           
        </ul>

      </div>
    </div>
  )
}

export default Navbar