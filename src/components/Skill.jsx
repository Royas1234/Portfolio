import React from 'react'
import {cssLogo}from '../assets/index'
import {githubLogo}from '../assets/index'
import {htmlLogo} from '../assets/index'
import {javascriptLogo} from '../assets/index'
import {reactLogo} from '../assets/index'
import {nodeLogo}from '../assets/index'

const Skill = () => {
  return (
    <div name='skills' className='w-full mx-auto  h-[700px] bg-[#0a192f] text-gray-200 border-t-[1px] border-t-[#7da0c4]'> 
      <div className='max-w-[1000px]  p-4 flex flex-col mx-auto justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#f36e8f]'>Skills</p>
          <p className='py-4 text-xl'>Technologies i am familiar with and i have worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'> 
        <div className='bg-[#3186e2] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img src={htmlLogo} alt='html logo' className='w-20 mx-auto pt-5' />
          <p className='my-4'>HTML</p>
        </div>
        <div className='bg-[#3186e2] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img src={cssLogo} alt='css logo' className='w-20 mx-auto pt-5' />
          <p className='my-4'>CSS</p>
        </div>

        <div className='bg-[#3186e2] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img src={githubLogo} alt='github logo' className='w-20 mx-auto pt-5' />
          <p className='my-4'>GITHUB</p>
        </div>
        <div className='bg-[#3186e2] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img src={javascriptLogo} alt='javacsript logo' className='w-20 mx-auto pt-5' />
          <p className='my-4'>JAVASCRIPT</p>
        </div>
        <div className='bg-[#3186e2] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img src={nodeLogo} alt='node logo' className='w-20 mx-auto pt-5' />
          <p className='my-4'>NODE JS</p>
        </div>
        <div className='bg-[#3186e2] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img src={reactLogo} alt='react logo' className='w-20 mx-auto pt-5' />
          <p className='my-4'>REACT</p>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Skill