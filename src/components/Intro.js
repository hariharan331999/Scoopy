import React from 'react';
import img from '../images/Ourservice.svg';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <>
            <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='about' >

                <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left font-poppins" data-aos="fade-up">
                    <div className="lg:w-2/3 flex flex-col lg:mx-2 justify-center">
                        <img alt="card img" className="rounded-lg float-right w-full h-auto lg:max-w-xl" src={img} />
                    </div>
                    <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">

                        <h3 className="text-2xl  text-black-900 font-bold">About Us – Scoopy Digital Marketing Services

                        </h3>
                        <div>
                            <p className='my-3 text-xl text-gray-600 font-Regular'>Welcome to Scoopy Digital Marketing Services, where innovation meets results!
                            </p>
                        </div>

                        <div>
                            <p className='my-3 text-xl text-gray-600 font-Regular'>Execution: Running campaigns, optimizing content, and boosting visibility.</p>
                        </div>

                        <div>
                            <p className='my-3 text-sml text-gray-600 font-Regular'>With over five years of experience in the digital marketing industry, we have been at the forefront of helping businesses establish a strong online presence, drive traffic, and achieve their marketing goals. Our journey has been fueled by passion, expertise, and a commitment to excellence, making us a trusted partner for businesses of all sizes.
                            </p>
                        </div>
                        <Link to="/contact" className="text-black bg-yellow-500 hover:bg-yellow-400 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                            Contact us
                            <svg className="w-4 h-4 ml-1 group-hover: translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro;