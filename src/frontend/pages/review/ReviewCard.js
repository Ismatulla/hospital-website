import React from 'react';

const ReviewCard = ({ name, photo }) => (
  <div className='review-card bg-cyan-400 '>
    <div className='w-full pb-0 h-25  flex justify-center items-center   '>
      <img src={photo} alt="" className='w-32 h-32 object-cover   rounded-full mt-6 border-8 border-cyan-700 z-1' />
    </div>
    <h1 className='lg:text-4xl md:text-3xl sm:text-3xl pt-6 font-semibold py-4 text-cyan-700'>{name}</h1>
    <div className='flex gap-2 justify-center pb-4'>
      <i className="fa-solid fa-star text-white" />
      <i className="fa-solid fa-star text-white" />
      <i className="fa-solid fa-star-half-stroke text-white" />
      <i className="fa-solid fa-star text-white" />
      <i className="fa-solid fa-star text-white" />
    </div>
  </div>
);

export default ReviewCard;
