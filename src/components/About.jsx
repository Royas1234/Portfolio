import React from 'react';
import { userPic } from '../assets/index';

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-[#1b324c] text-gray-200'>
      <div className='max-w-[1000px] py-10 p-4 mx-auto flex flex-col justify-start '>
        <div className='text-left pb-8 '>
          <p className='text-4xl font-bold inline border-b-4 border-[#f36e8f]'>About Me</p>
        </div>

        <div className='flex flex-col-reverse items-center lg:items-center lg:justify-around lg:flex-row lg:g-40'>
          <div className='flex-1'>
            <p className='text-gray-200 font-normal leading-relaxed lg:leading-loose text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] mt-6 mr-20'>
              Hello, I'm Adetunji Rosheedat Oyindamola, and I'm thrilled to share a bit about myself. With a background in
              Agriculture Extension and Rural Development, I have always been passionate about making a positive impact in the
              lives of others. During my service year, I discovered my interest in the world of technology and decided to embark
              on a self-taught journey to learn more. It was a challenging yet rewarding experience that fueled my curiosity and
              determination. Recognizing my potential, I was fortunate to receive a scholarship to Stutern Graduate Accelerate,
              where I honed my technical skills and gained invaluable industry exposure. This program allowed me to refine my
              abilities, expand my network, and embrace new opportunities. My diverse educational background, coupled with my
              newfound passion for technology, has shaped me into a well-rounded professional.
              
            </p>
          </div>
          <div className=''>
            <img
              src={userPic}
              alt='avatar'
              className='w-[300px] h-[350px] rounded-[50%] lg:w-[300px] lg:h-[350px] lg:rounded-none'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
