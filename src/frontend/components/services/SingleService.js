import React from 'react';
function SingleService({ title, description, details }) {
    return (
        <div className='lg:rounded-xl sm:rounded-xl md:rounded-xl lg:max-w-xs sm:w-80 sm:m-auto sm:shadow-md  md:w-90 md:m-auto  lg:min-h-full lg:min-w-full text-center shadow-xl   cursor-pointer hover:shadow-inner transition-all bg-white pb-96 singleCard object-cover'>
            <div >
                <i className='fas fa-notes-medical text-7xl text-cyan-400 pt-6'></i>
            </div>
            <h1 className='lg:text-4xl md:text-3xl sm:text-3xl pt-3 font-semibold'>{title}</h1>
            <div className='flex flex-col justify-between min-h-full'>
                <div >
                    <p className='px-10 py-8 leading-7 block w-full  '>{description}</p>
                </div>
                <div>
                    <button className='transition-all  text-cyan-400 border-cyan-400 border-2 px-12 py-4    hover:bg-cyan-400 hover:text-white
                rounded-md text-xl lg:mb-6 md:mb-8 
                sm:mb-8 sm:inline-block
                 '>{details} <span className='fas fa-chevron-right pl-4  '>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SingleService;