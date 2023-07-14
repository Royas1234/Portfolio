import React from 'react'


const Contact = () => {

  const handleSubmit = (event) =>{
    event.preventDefault()
    console.log("ß")
  }
  return ( 
    <div name='contact' className='w-full h-screen flex  flex-col justify-center px-[5rem]  bg-[#0a192f] border-t-[1px] border-t-[#7da0c4] text-gray-200'>
       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
       <div className='mt-10'>
       <p className='text-4xl font-bold inline border-b-4 border-[#f36e8f]'>Contact me</p>
       <p className='text-xl py-5'>
        Contact me for enquiry, feedback or question.
       </p>
       </div>
      <form method='POST' action='https://getform.io/f/fec9efdd-d598-48fc-9afa-5e4a6c3677a9' className='flex flex-col max-w-[600px] w-full gap-7 py-2'>
       <div className='flex flex-col gap-2'>
        <p className='text-[1rem] text-[#7da0c4] uppercase tracking wide text-bold '>Your Name</p>
        <input type='text' name='name' placeholder='Name'className='w-full h-12 rounded-lg border-b-[1px] border-b-[#0a192f] bg-[#ccd6f6 px-4 active:outline-none  outline-none focus-visible:border-b-transparent duration-300 text-xl text-[black]' />
       </div>
       <div className='flex flex-col gap-2'>
        <p className='text-[1rem] text-[#7da0c4] uppercase tracking wide text-bold '>Your Email</p>
        <input type='email' name='email' placeholder='Email'className='w-full h-12 rounded-lg border-b-[1px] border-b-[#0a192f] bg-[#ccd6f6 px-4 active:outline-none  outline-none focus-visible:border-b-transparent duration-300 text-xl text-[black]' />
       </div>
       <div className='flex flex-col gap-2'>
        <p className='text-[1rem] text-[#7da0c4] uppercase tracking wide text-bold '>Your Message</p>
        <textarea cols='30' rows='7' name='message' className='w-full  rounded-lg border-b-[1px] border-b-[#0a192f] bg-[#ccd6f6 px-4 active:outline-none  outline-none focus-visible:border-b-transparent duration-300 text-xl text-[black]'></textarea>
       </div>
       <div>
        <button onSubmit={handleSubmit} className='text-gray-200 w-full h-12 border-2 rounded-lg hover:bg-[#f26d90] hover:border-[#f26d90] hover:text-gray-200px-3 my-8 flex justify-center items-center'>Send Message</button>
       </div>

      </form>
       </div>
    </div>
  )
}

export default Contact