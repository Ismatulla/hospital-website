import React from 'react';
import SingleStatistic from './SingleStatistic';
import { useSelector, useDispatch } from 'react-redux'
function Statistics(props) {
    const dispatch = useDispatch()
    const statistics = useSelector(state => state.serviceState)
    return (
        <div>
            <h1>statistic</h1>
            <SingleStatistic />
        </div>
    );
}

export default Statistics;