import React from 'react'
import { Link } from 'react-scroll'
import {userPic} from '../assets/index'

const About = () => {
  return (
    <div name='about' className='w-full h-[700px] px-[5rem] bg-[#1b324c] text-gray-200'>
      <div className='max-w-[1000px] py-20  flex flex-col justify-start h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap 8'>
          <div className= 'lg:text-left sm:text-center pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#ff0144]'>About Me</p>
          </div>
          <div></div>
        </div>

        <div className='w-full flex justify-between items-center gap-[10rem]'>
          <div className='flex items-center justify-center'>
            <p className='font-normal text-2xl max-w-[900px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, alias quasi. Fuga optio debitis voluptas, pariatur aperiam iusto rem repudiandae odio vero placeat sunt facilis porro, culpa recusandae, cum doloremque.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, illo ipsam tempore reiciendis nisi asperiores ad voluptatem reprehenderit quibusdam qui. Quas dignissimos eum quia at aspernatur officiis voluptas quod expedita!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero asperiores corrupti dolorum blanditiis vel exercitationem pariatur aut quae, error id, omnis temporibus soluta. Maiores delectus quos fugit dolores labore reprehenderit!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat accusantium a praesentium laudantium nesciunt soluta deleniti aliquam, voluptas eum minima consequatur dolores qui repellat mollitia est numquam molestiae odio repellendus?
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
