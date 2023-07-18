import React from 'react'
import CV from '../assets/CV.pdf'
import { HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name ='home' className='w-full h-[600px]  bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full'>
        <h3 className='text-[#7da0c4] font-bold text-xl  sm:text-2xl py-2'>Hello, my name is <span className='text-[#f26d90] text-2xl sm:text-3xl'>Rosheedat Adetunji</span></h3>
        <h2 className=' text-gray-300 text-4xl  sm:text-7xl font-bold '>I am a FrontEnd Developer.</h2>
        <p className='text-gray-200 font-normal text-[1.1rem] md:text-[1.1rem] lg:text-xl max-w-[750px] py-4'> 
          I'm a frontend developer specializing in building user-friendly,functional and beautiful websites .This is the virtual space where I showcase my skills, experiences. Make yourself at home and explore the various projects and works I have compiled here.

        </p>

        <div className='my-4 flex items-center justify-start'>
            <button className='flex items-center  text-gray-300 border-2 hover:bg-[#f26d90] hover:border-[#f26d90] hover:text-gray-200'>
              <a href={CV} download className='flex group items-center px-5 my-2 text-[1.2rem]'>  Download CV 
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight  className='ml-3'/>
               </span>
              </a>
           </button>
        </div>

      </div>
    </div>
  )
}

export default Home


