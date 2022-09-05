import React, { useEffect } from 'react';
import SliderImg from '../slider/SliderImg';
import { useSelector, useDispatch } from 'react-redux'
import { fetchServices } from '../redux/actions';
import Statistics from '../statistics/Statistics'
import SingleService from './SingleService';

function Services() {

    const { service } = useSelector(state => state.serviceState)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchServices())
    }, [])

    return (
        <div className='flex flex-col justify-center '>
            <div>
                <SliderImg />
            </div>
            <div className=' lg:min-h-full  md:h-48 statistic-container'>
                <Statistics />
            </div>
            <div className='bg-cyan-100 py-32 lg:px-24 bg-border'>
                <h1 className=' pb-16 lg:text-6xl sm:text-3xl font-bold text-center block'>
                    Our <span className='text-cyan-700  '> Services</span>
                </h1>
                <div className='grid xl:grid-cols-3  lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 items-center justify-center'>
                    {
                        service.map((s, idx) => (
                            <SingleService
                                key={s.title}
                                title={s.title}
                                description={s.description}
                                details={s.details}
                                idx={idx}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Services;