import React from 'react';
import ReviewCard from './ReviewCard';
import ReviewOpinion from './ReviewOpinion';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
const SingleReview = ({ name, opinion, photo, id }) => (
    <div className='lg:rounded-xl sm:rounded-xl md:rounded-xl  sm:w-80 sm:m-auto  md:w-90 md:m-auto  lg:min-h-full lg:min-w-full text-center   cursor-pointer  transition-all bg-white border-2 border-cyan-400 lg:max-w-ms xl:max-w-ms '>
        <ReviewCard
            name={name}
            photo={photo}
        />
        <div className='cardBody'>
            <ReviewOpinion opinion={opinion} />
            <Link to={`/reviews/${id}`}>
                <Button
                    text="EDIT"
                    icon='fa-solid fa-pen-to-square'
                />
            </Link>
        </div>
    </div>
);
export default SingleReview;
