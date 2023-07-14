import React from 'react'
import { Link } from 'react-scroll'
import {userPic} from '../assets/index'

const About = () => {
  return (
    <div name='about' className='w-full h-[700px] px-[5rem] bg-[#1b324c] text-gray-200'>
      <div className='max-w-[1000px] py-20 mx-auto flex flex-col justify-start h-full'>
        <div className= 'lg:text-left sm:text-center pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#ff0144]'>About Me</p>
          </div>
        
        <div className='max-w-[1000px] w-full sm:grid-cols-2 grid grid-rows gap-40'>
          <div className='flex items-center justify-center'>
            <p className='font-normal text-xl '>
            Hello, I'm Adetunji Rosheedat Oyindamola, and I'm thrilled to share a bit about myself. With a background in Agriculture Extension and Rural Development, I have always been passionate about making a positive impact in the lives of others.During my service year, I discovered my interest in the world of technology and decided to embark on a self-taught journey to learn more. It was a challenging yet rewarding experience that fueled my curiosity and determination.
            Recognizing my potential, I was fortunate to receive a scholarship to Stutern Graduate Accelerate, where I honed my technical skills and gained invaluable industry exposure. This program allowed me to refine my abilities, expand my network, and embrace new opportunities.My diverse educational background, coupled with my newfound passion for technology, has shaped me into a well-rounded professional.
            </p>
          </div>

          <div className='flex justify-start'>
            <img src={userPic} alt='avatar' className='user-avatar'/>
          </div>
        </div>

          
      </div>
      
      

      


    </div>
  )
}

export default About
