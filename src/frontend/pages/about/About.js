import React from 'react';
import Button from '../../components/Button';
import about from '../assets/images/about-us.jpg'

const About = () => (
    
    <div className='mt-28 mb-20 lg:px-10 sm:px-4 md:px-4'>
        <h1 className=' pb-16 lg:text-6xl sm:text-3xl font-bold text-center block'>
            <span className='text-cyan-400  '>ABOUT</span> US
        </h1>
        <div className=" flex lg:flex-row  gap-x-20 md:flex-col sm:flex-col justify-center items-center">
            <div className="img lg:w-4/5 md:w-full sm:w-full">
                <img src={about} alt="about us object-cover" />
            </div>
            <div className="about_us w-full">
                <h1 className='lg:text-4xl md:text-3xl sm:text-2xl  block pb-8 font-semibold md:text-center sm:text-center lg:mt-0 md:mt-8 sm:mt-4 text-cyan-400'>
                    We Take Care Of Your Healthy Life
                </h1>
                <p className='text-xl leading-7 '>
                    Carely is the major provider of acute, maternity, sub-acute and specialist services in Melbourne’s rapidly growing outer north.
                    Services are provided through our four main campuses:
                    Carely Epping, Broadmeadows Hospital, Bundoora Centre and Craigieburn Centre.
                    <br /> <br />
                    Our emergency department treats over 103,000 patients each year, cares for over 92,000 patients admitted to hospital, and assists with the delivery of over 3,200 babies each year.
                    Carely cares for a diverse community, born in more than 185 countries, who speak over 106 different languages and follow over 90 different religions or beliefs.
                </p>
                <div className=' lg:justify-start sm:w-full sm:flex sm:justify-center'>
                    <Button
                        icon="fas fa-chevron-right"
                    />
                </div>
            </div>
        </div>
    </div>
);
export default About;