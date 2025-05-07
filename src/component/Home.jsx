import React from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Home() {
    return (
        <div className="h-screen flex bgImg">
            <div className="md:w-full flex justify-center items-center w-full">
                <div className="flex flex-col">

                    <div className="flex justify-center items-center z-0 flex-col">
                        <p className="text-6xl font-bold nameFont screenText text-white">Rishikesh Singh</p>
                        <p className="text-3xl fontStyle text-white screenText mt-6">Web Developer</p>
                    </div>

                    {/* Mobile view */}
                    <div className="md:hidden flex justify-center items-center flex-col z-0">
                        <p className="text-3xl text-white fontStyle">Rishikesh Singh</p>
                        <h1 className="text-4xl font-bold text-white uppercase">I'm a developer</h1>
                    </div>

                    <div className="z-0 flex justify-center items-center my-6">
                        <img src="assets/separatorWhite.png" alt="separator" />
                    </div>

                    {/* Social media icons */}
                    <div className="mt-4 z-0 flex justify-center items-center">
                        <a 
                            href="https://github.com/rishikesh094" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="px-2 m-4 text-5xl text-white"
                            aria-label="GitHub"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/rishikesh-singh-888a6a281/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="px-2 m-4 text-5xl text-white"
                            aria-label="LinkedIn"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a 
                            href="https://x.com/rishikeshs820" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="px-2 m-4 text-5xl text-white"
                            aria-label="Twitter"
                        >
                            <FontAwesomeIcon icon={faXTwitter} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
