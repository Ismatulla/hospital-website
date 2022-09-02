import React, { useEffect } from 'react';
import SingleStatistic from './SingleStatistic';
import { useSelector, useDispatch } from 'react-redux'
import { fetchStatistics } from '../redux/actions/index'
function Statistics(props) {
    const dispatch = useDispatch()
    const { statistics } = useSelector(state => state.serviceState)
    useEffect(() => {
        dispatch(fetchStatistics())
    }, [])
    return (
        <div className='max-w-7xl m-auto lg:-mt-32
        z-10 grid gap-3 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 items-center sm:mt-0 mb-8 justfy-center  h-72'>
            {
                statistics.map(statistic => (
                    <SingleStatistic
                        key={statistic.id}
                        qty={statistic.qty}
                        status={statistic.status}
                        icon={statistic.icon}
                    />
                ))
            }
        </div>
    );
}

export default Statistics;