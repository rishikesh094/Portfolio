import React from 'react'

function Contact() {

    return (
        <div id='contact' className='w-full bg-gray-100 min-h-screen flex flex-col items-center py-8 px-4 md:space-y-10'>
            <h1 className='uppercase text-2xl tracking-widest border-b-4 border-gray-500 font-bold px-10 py-2 '>Contact</h1>
            <div className='md:w-1/2 py-8 text-justify'>
                <p>If you are interested in my portfolio or would like to hire me for your project, please contact me via email <a href="mailto:rishikeshs820@gmail.com">(rishikeshs820@gmail.com)</a> or use the form below.</p>
            </div>
            <div className='invert flex justify-center items-center my-8'>
                <img src="assets/separatorWhite.png" alt="" />
            </div>

            <div className="md:w-1/3 w-full group">
                <form action="https://getform.io/f/azywpmzb" method='POST'
                className="md:p-8 w-full flex justify-center items-center flex-col">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="md:w-full mb-10 p-3 border-b-4 border-l-4 text-black focus:outline-none "
                        />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="md:w-full mb-10 p-3 border-b-4 border-l-4 text-black focus:outline-none "
                        />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        className="md:w-full mb-10 p-3 border-b-4 border-l-4 text-black focus:outline-none "
                    />
                    <textarea
                        name='message'
                        placeholder="Your Message"
                        className="md:w-full mb-10 p-3 border-b-4 border-l-4 text-black focus:outline-none "
                    ></textarea>
                    <button
                        type="submit"
                        className="border-x-3 px-6 py-2 hover:bg-black hover:text-white"
                    >
                        Submit
                    </button>
                </form>
            </div>



        </div>
    )
}

export default Contact
