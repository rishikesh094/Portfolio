import React from 'react';

function Skills() {
  return (
    <div id='skills' className='w-full bg-gray-100 min-h-screen flex flex-col items-center py-6 px-4'>
      <h1 className='uppercase text-2xl tracking-widest border-b-4 border-gray-500 font-bold px-10 py-2'>Skills</h1>
      
      {/* Using Now Section */}
      <div className='w-full max-w-3xl py-8'>
        <h2 className='uppercase tracking-widest font-bold text-xl text-center mb-6'>Using Now:</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center'>
          {[
            { src: 'src/assets/htmlIcon.webp', label: 'HTML5' },
            { src: 'src/assets/cssIcon.webp', label: 'CSS3' },
            { src: 'src/assets/jsIcon.webp', label: 'JAVASCRIPT' },
            { src: 'src/assets/bootstrapIcon.webp', label: 'BOOTSTRAP' },
            { src: 'src/assets/tailwindIcon.webp', label: 'TAILWIND' },
            { src: 'src/assets/reactIcon.webp', label: 'REACT' },
            { src: 'src/assets/gitIcon.webp', label: 'GIT' },
          ].map((skill, index) => (
            <div key={index} className='flex flex-col items-center'>
              <img src={skill.src} className='w-16 md:w-20' alt={skill.label} />
              <span className='text-sm md:text-base'>{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Learning Section */}
      <div className='w-full max-w-3xl py-8'>
        <h2 className='uppercase tracking-widest font-bold text-xl text-center mb-6'>Learning:</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center'>
          {[
            { src: 'src/assets/nodeIcon.webp', label: 'NODE JS' },
            { src: 'src/assets/mysqlIcon.webp', label: 'MySQL' },
            { src: 'src/assets/mongodbIcon.webp', label: 'MONGODB' },
            { src: 'src/assets/expressIcon.png', label: 'EXPRESS JS' },
          ].map((skill, index) => (
            <div key={index} className='flex flex-col items-center'>
              <img src={skill.src} className='w-16 md:w-20' alt={skill.label} />
              <span className='text-sm md:text-base'>{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Other Skills Section */}
      <div className='w-full max-w-3xl py-8'>
        <h2 className='uppercase tracking-widest font-bold text-xl text-center mb-6'>Other Skills:</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center'>
          {[
            { src: 'src/assets/cIcon.webp', label: 'C' },
            { src: 'src/assets/c++Icon.webp', label: 'C++' },
            { src: 'src/assets/javaIcon.webp', label: 'JAVA' },
          ].map((skill, index) => (
            <div key={index} className='flex flex-col items-center'>
              <img src={skill.src} className='w-16 md:w-20' alt={skill.label} />
              <span className='text-sm md:text-base'>{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
