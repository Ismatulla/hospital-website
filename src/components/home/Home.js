import React from 'react';
import doctor from '../assets/images/doctor3.png'
function Home(props) {
    return (
        <div className='container m-auto sm:flex-col sm: items-center sm:pt4 sm:pt-10 sm:justify-center md:flex-column lg:flex-row  pt-32 flex lg:justify-between lg:items-center'>
            <div className='image sm:w-56 lg:w-96 '>
                <img src={doctor} alt="not found" className="lg:h-96  bg-white sm:object-contain  " />
            </div>
            <div className='content
             sm:pt-16 sm:items-center sm:jusitfy-center flex sm:flex-col md:flex-col lg:items-start  '>
                <h1 className='lg:text-5xl lg:normal-case lg:text-start font-semibold text-cyan-500  sm:uppercase  sm:text-xl'> Stay Safe, Stay Healthy</h1>
                <p className='text-block tex-black  py-8 sm:text-xl sm:text-center sm:leading-10 md:flex-col lg:leading-8 lg:justify-start lg:text-2xl lg:text-left'>The art of medicine consists of <br></br>amusing the patient while nature cures the disease.</p>
                <button className='button  text-cyan-400 shadow-md px-12 py-4 mt-4 hover:shadow-none transition-all  hover:bg-cyan-400 hover:text-white
                rounded-md text-xl lg:mb-0 md:mb-8 
                sm:mb-8 sm:inline-block
                 '> Contact us<span className='fas fa-chevron-right pl-4  '>
                    </span>
                </button>
            </div>
        </div>
    );
}

export default Home;