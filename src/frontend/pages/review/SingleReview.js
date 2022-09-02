import React from 'react';

function SingleReview({ name, opinion, photo }) {
    return (
        <div className='lg:rounded-xl sm:rounded-xl md:rounded-xl  sm:w-80 sm:m-auto  md:w-90 md:m-auto  lg:min-h-full lg:min-w-full text-center   cursor-pointer  transition-all bg-white singleCard border-2 border-cyan-400 lg:max-w-ms xl:max-w-ms'>
            <div className='review-card bg-cyan-400 '>
                <div className='w-full pb-0 h-25  flex justify-center items-center   '>
                    <img src={photo} alt="" className='w-32 h-32 object-cover   rounded-full mt-6 border-8 border-cyan-700 z-1' />
                </div>
                <h1 className='lg:text-4xl md:text-3xl sm:text-3xl pt-6 font-semibold py-4 text-cyan-700'>{name}</h1>
                <div className='flex gap-2 justify-center pb-4'>
                    <i className="fa-solid fa-star text-white"></i>
                    <i className="fa-solid fa-star text-white"></i>
                    <i className="fa-solid fa-star-half-stroke text-white"></i>
                    <i className="fa-solid fa-star text-white"></i>
                    <i className="fa-solid fa-star text-white"></i>
                </div>
            </div>
            <div className=' h-4/5 m-auto'>
            <p className='lg:px-10  lg:py-4 md:px-2 md:py-2 sm:px-2 sm:py-2   w-full  text-cyan-700  '>{opinion}</p>
            </div>
        </div>
    );
}

export default SingleReview;