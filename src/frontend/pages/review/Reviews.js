import React, { useEffect } from 'react';
import SingleReview from './SingleReview';
import { fetchAllReviews } from '../redux/actions/index'
import { useSelector, useDispatch } from 'react-redux'

function Reviews() {
    const dispatch = useDispatch()
    const { reviews } = useSelector(state => state.serviceState)
    
    useEffect(() => {
        dispatch(fetchAllReviews())
    }, [])

    return (
        <div className='mt-28 lg:px-16 xl:px-16 md:px-8 sm:px-4 mb-24 '>
            <h1 className=' lg:text-6xl sm:text-3xl font-bold text-center block'>
                CLIENT'S <span className='text-cyan-400 '>REVIEW</span>
            </h1>
            <div className=' mt-24 grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 review-cards '>
                {
                    reviews.map((review, index) => (
                        <SingleReview key={index}
                            name={review.name}
                            opinion={review.opinion}
                            photo={review.photo}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Reviews;