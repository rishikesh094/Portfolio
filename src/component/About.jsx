import React from 'react'

function About() {
  return (
    <div id='about' className='w-full bg-gray-100 min-h-screen flex flex-col items-center py-8 px-4 md:space-y-10'>
      <h1 className='uppercase text-2xl tracking-widest border-b-4 border-gray-500 font-bold px-10 py-2 '>About me</h1>      
      <p className='md:text-center text-justify mt-6 md:w-2/3 w-full px-2'>
        My name is Rishikesh Singh. I'm a third-year Applied Computer Applications student based in Prayagraj. I have completed my learning in Front-End Technologies and am now diving into Backend Development to become a full-stack web developer.
      </p>
      
      <p className='md:hidden text-justify mt-6 w-full px-2'>I am passionate about building user-friendly and efficient web applications. With a strong foundation in HTML, CSS, JavaScript, and React, I am now expanding my skills in backend technologies to develop scalable and dynamic web solutions. I love solving problems through code and continuously strive to enhance my expertise in modern web development.</p>

      <div className='w-full max-w-3xl mt-8 '>
        <div className='flex justify-center'>
          <h2 className='uppercase border-x-2 px-6 py-1 text-sm font-bold inline-block'>
            Explore
          </h2>
        </div>
        
        {/* separator image */}
        <div className='invert flex justify-center items-center my-16'>
          <img src="src/assets/separatorWhite.png" alt="" />
        </div>

        <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-6  '>
          {/* Design Section */}
          <div className='p-4 text-justify md:text-left'>
            <h2 className='font-bold uppercase tracking-widest'>Design</h2>
            <p>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
          </div>
          
          {/* Development Section */}
          <div className='p-4 text-justify md:text-left '>
            <h2 className='font-bold uppercase tracking-widest'>Development</h2>
            <p>Based on a project created by me or another one, sent by you, I can program the website to be fully functional and responsive.</p>
          </div>
        </div>

        {/* Maintenance Section */}
        <div className='mt-8 p-4 text-justify md:text-center'>
          <h2 className='font-bold uppercase tracking-widest'>Maintenance</h2>
          <p className='md:w-2/4 mx-auto text-justify'>In case of any problems or the need for changes, I can introduce new functionalities and solutions.</p>
        </div>

         {/* separator image */}
         <div className='invert flex justify-center items-center my-16'>
          <img src="src/assets/separatorWhite.png" alt="" />
        </div>
        
      </div>
    </div>
  )
}

export default About
