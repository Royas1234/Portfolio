import React from 'react'
import {projectImg1} from '../assets/index'
import {projectImg2} from '../assets/index'
import {projectImg3} from '../assets/index'
import {projectImg4} from '../assets/index'
import { projectImg5 } from '../assets/index'
import {workImg} from '../assets/index'



const Project = () => {
  return (
    <div name='project' className='w-full md:h-screen  px-[5rem]  bg-[#0a192f] border-t-[1px] border-t-[#7da0c4] text-gray-200'>
      <div className='max-w-[1000px] p-4 flex flex-col mx-auto justify-start w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#f36e8f]'>
            Projects
          </p>
          <p className='py-6 text-xl'>Check some of my recent work</p>
        </div>

        {/* cards */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
          
          <div style ={{backgroundImage: `url(${projectImg1})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-wrapper'>
            
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wide'>
                  React Js Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://loanwise-b-team.vercel.app/' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large'>Demo</button>
                </a>
                <a href='https://github.com/t1-loanwise/loanwise-b-team' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large'>Code</button>
                </a>



              </div>

            </div>
          </div>

          <div style ={{backgroundImage: `url(${projectImg2})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-wrapper'>
            
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wide'>
                  React Js Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://rad-nougat-825a91.netlify.app/' target='_blank' rel='noopener noreferrel'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large'>Demo</button>
                </a>
                <a href='https://github.com/Royas1234/StarWars/' target='_blank' rel='noopener noreferrel'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large'>Code</button>
                </a>



              </div>

            </div>
          </div>

          <div style ={{backgroundImage: `url(${projectImg3})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-wrapper'>
            
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wide'>
                  Website Clone
              </span>
              <div className='pt-8 text-center'>
                <a href='https://extraordinary-kitten-17940b.netlify.app/' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large'>Demo</button>
                </a>
                <a href='https://github.com/Royas1234/myCloneApp' target='_blank' rel='noopener noreferrer' >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large'>Code</button>
                </a>



              </div>

            </div>
          </div>

          <div style ={{backgroundImage: `url(${projectImg4})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-wrapper'>
            
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wide'>
                  Js Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://superb-druid-6b4f5c.netlify.app/' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large'>Demo</button>
                </a>
                <a href='https://github.com/Royas1234/TO-DO-LIST' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large'>Code</button>
                </a>



              </div>

            </div>
          </div>

          <div style ={{backgroundImage: `url(${workImg})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-wrapper'>
            
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wide'>
                  Website Clone
              </span>
              <div className='pt-8 text-center'>
                <a href='https://radiant-paprenjak-5baf78.netlify.app/' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large'>Demo</button>
                </a>
                <a href='https://github.com/Royas1234/Search-Engine-Clone' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large'>Code</button>
                </a>



              </div>

            </div>
          </div>

          <div style ={{backgroundImage: `url(${projectImg5})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-wrapper'>
            
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wide'>
                  React Js Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://ornate-puppy-2f15fb.netlify.app/' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large'>Demo</button>
                </a>
                <a href='https://github.com/Royas1234/Replica-Movie-Site'target='_blank' rel='noopener noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-large'>Code</button>
                </a>



              </div>

            </div>
          </div>
        </div>

        {/* <div className='w-[1000px] h-screen project-card pt-3 pb-6'>
          <div className='flex flex-col justify-center rounded text-black'>
            <img src={projectImg1} alt=' a loanwise app' />
            <div className='bg-gray-100 text-xl md:text-md rounded-b flex flex-col justify-center p-4'>
              <div className='pt-2 pb-2 text-left'>
              <span className='font-bold capitalize'>title:</span>
              <span className='capitalize'>Loanwise App</span>
              </div>
              <div className='pt-2 pb-2 text-left'>
              <span className='font-bold capitalize'>stack:</span>
              <span className='capitalize'>css, react , responsive</span>
              </div>
              <div className='pt-2 pb-2 text-left'>
              <span className='font-bold capitalize'>description:</span>
              <span className='capitalize'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio maxime nam non dolorum ullam saepe, nesciunt tempore. A laudantium recusandae exercassumenda.</span>
              </div>

              <div className='buttons self-center'>
                <button className='btn text-md font-bold py-2 px-4'>
                  <a href='' > Live </a>
                </button>
                <button className='btn text-md font-bold py-2 px-4'>
                  <a href=''> code</a>
                </button>
              </div>
             

            </div>
           

          </div>

          <div className='flex flex-col justify-center rounded text-black'>
            <img src={projectImg1} alt=' a loanwise app' />
            <div className='bg-gray-100 text-xl md:text-md rounded-b flex flex-col justify-center p-4'>
              <div className='pt-2 pb-2 text-left'>
              <span className='font-bold capitalize'>title:</span>
              <span className='capitalize'>Loanwise App</span>
              </div>
              <div className='pt-2 pb-2 text-left'>
              <span className='font-bold capitalize'>stack:</span>
              <span className='capitalize'>css, react , responsive</span>
              </div>
              <div className='pt-2 pb-2 text-left'>
              <span className='font-bold capitalize'>description:</span>
              <span className='capitalize'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio maxime nam non dolorum ullam saepe, nesciunt tempore. A laudantium recusandae exercassumenda.</span>
              </div>

              <div className='buttons self-center'>
                <button className='btn text-md font-bold py-2 px-4'>
                  <a href='' > Live </a>
                </button>
                <button className='btn text-md font-bold py-2 px-4'>
                  <a href=''> code</a>
                </button>
              </div>
             

            </div>
           

          </div>

          <div className='flex flex-col justify-center rounded text-black'>
            <img src={projectImg1} alt=' a loanwise app' />
            <div className='bg-gray-100 text-xl md:text-md rounded-b flex flex-col justify-center p-4'>
              <div className='pt-2 pb-2 text-left'>
              <span className='font-bold capitalize'>title:</span>
              <span className='capitalize'>Loanwise App</span>
              </div>
              <div className='pt-2 pb-2 text-left'>
              <span className='font-bold capitalize'>stack:</span>
              <span className='capitalize'>css, react , responsive</span>
              </div>
              <div className='pt-2 pb-2 text-left'>
              <span className='font-bold capitalize'>description:</span>
              <span className='capitalize'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio maxime nam non dolorum ullam saepe, nesciunt tempore. A laudantium recusandae exercassumenda.</span>
              </div>

              <div className='buttons self-center'>
                <button className='btn text-md font-bold py-2 px-4'>
                  <a href='' > Live </a>
                </button>
                <button className='btn text-md font-bold py-2 px-4'>
                  <a href=''> code</a>
                </button>
              </div>
             

            </div>
           

          </div>

          <div className='flex flex-col justify-center rounded text-black'>
            <img src={projectImg1} alt=' a loanwise app' />
            <div className='bg-gray-100 text-xl md:text-md rounded-b flex flex-col justify-center p-4'>
              <div className='pt-2 pb-2 text-left'>
              <span className='font-bold capitalize'>title:</span>
              <span className='capitalize'>Loanwise App</span>
              </div>
              <div className='pt-2 pb-2 text-left'>
              <span className='font-bold capitalize'>stack:</span>
              <span className='capitalize'>css, react , responsive</span>
              </div>
              <div className='pt-2 pb-2 text-left'>
              <span className='font-bold capitalize'>description:</span>
              <span className='capitalize'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio maxime nam non dolorum ullam saepe, nesciunt tempore. A laudantium recusandae exercassumenda.</span>
              </div>

              <div className='buttons self-center'>
                <button className='btn text-md font-bold py-2 px-4'>
                  <a href='' > Live </a>
                </button>
                <button className='btn text-md font-bold py-2 px-4'>
                  <a href=''> code</a>
                </button>
              </div>
             

            </div>
           

          </div>

          <div className='flex flex-col justify-center rounded text-black'>
            <img src={projectImg1} alt=' a loanwise app' />
            <div className='bg-gray-100 text-xl md:text-md rounded-b flex flex-col justify-center p-4'>
              <div className='pt-2 pb-2 text-left'>
              <span className='font-bold capitalize'>title:</span>
              <span className='capitalize'>Loanwise App</span>
              </div>
              <div className='pt-2 pb-2 text-left'>
              <span className='font-bold capitalize'>stack:</span>
              <span className='capitalize'>css, react , responsive</span>
              </div>
              <div className='pt-2 pb-2 text-left'>
              <span className='font-bold capitalize'>description:</span>
              <span className='capitalize'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio maxime nam non dolorum ullam saepe, nesciunt tempore. A laudantium recusandae exercassumenda.</span>
              </div>

              <div className='buttons self-center'>
                <button className='btn text-md font-bold py-2 px-4'>
                  <a href='' > Live </a>
                </button>
                <button className='btn text-md font-bold py-2 px-4'>
                  <a href=''> code</a>
                </button>
              </div>
             

            </div>
           

          </div>

          <div className='flex flex-col justify-center rounded text-black'>
            <img src={projectImg1} alt=' a loanwise app' />
            <div className='bg-gray-100 text-xl md:text-md rounded-b flex flex-col justify-center p-4'>
              <div className='pt-2 pb-2 text-left'>
              <span className='font-bold capitalize'>title:</span>
              <span className='capitalize'>Loanwise App</span>
              </div>
              <div className='pt-2 pb-2 text-left'>
              <span className='font-bold capitalize'>stack:</span>
              <span className='capitalize'>css, react , responsive</span>
              </div>
              <div className='pt-2 pb-2 text-left'>
              <span className='font-bold capitalize'>description:</span>
              <span className='capitalize'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio maxime nam non dolorum ullam saepe, nesciunt tempore. A laudantium recusandae exercassumenda.</span>
              </div>

              <div className='buttons self-center'>
                <button className='btn text-md font-bold py-2 px-4'>
                  <a href='' > Live </a>
                </button>
                <button className='btn text-md font-bold py-2 px-4'>
                  <a href=''> code</a>
                </button>
              </div>
             

            </div>
           

          </div>
          
        </div> */}


       
        
        
      </div>
    </div>
  )
}

export default Project