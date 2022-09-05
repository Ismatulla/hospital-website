import React from 'react';
import ReviewCard from './ReviewCard';
import ReviewOpinion from './ReviewOpinion';

const SingleReview = ({ name, opinion, photo }) => (
    <div className='lg:rounded-xl sm:rounded-xl md:rounded-xl  sm:w-80 sm:m-auto  md:w-90 md:m-auto  lg:min-h-full lg:min-w-full text-center   cursor-pointer  transition-all bg-white singleCard border-2 border-cyan-400 lg:max-w-ms xl:max-w-ms'>
        <ReviewCard
            name={name}
            photo={photo}
        />
        <ReviewOpinion opinion={opinion} />
    </div>
);
export default SingleReview;
