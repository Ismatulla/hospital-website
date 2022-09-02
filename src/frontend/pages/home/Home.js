import React from 'react';
import doctor from '../assets/images/doctor3.png'
import Button from '../../components/Button';

function Home() {
    return (
        <div className='container m-auto sm:flex-col sm: items-center  sm:pt-10 sm:justify-center sm:mt-20 md:flex-column md:mt-12 lg:flex-row  lg:pt-40 md:mt-20 flex lg:justify-between lg:items-center'>
            <div className='image sm:w-56 lg:w-96 '>
                <img src={doctor} alt="not found" className="lg:h-96  bg-white sm:object-contain  " />
            </div>
            <div className='content
             sm:pt-16 sm:items-center sm:jusitfy-center flex sm:flex-col md:flex-col lg:items-start  '>
                <h1 className='lg:text-5xl lg:normal-case lg:text-start font-semibold text-cyan-500  sm:uppercase  sm:text-xl'> Stay Safe, Stay Healthy</h1>
                <p className='text-block tex-black  py-8 sm:text-xl sm:text-center sm:leading-10 md:flex-col lg:leading-8 lg:justify-start lg:text-2xl lg:text-left'>The art of medicine consists of <br></br>amusing the patient while nature cures the disease.</p>
                <Button text="Contact Us" />
            </div>
        </div>
    );
}

export default Home;