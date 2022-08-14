import React, { useEffect } from 'react';
import SliderImg from '../slider/SliderImg';
import { useSelector, useDispatch } from 'react-redux'
import { fetchServices } from '../redux/actions';
function Services(props) {
    const data = useSelector(state => state.serviceState)
    const dispatch = useDispatch()
    useEffect(() => {
        fetchServices()
    }, [])
    const handleData = () => {
        console.log(data);
    }
    return (
        <div>
            <SliderImg />
            <button className='' onClick={() => handleData(dispatch(fetchServices()))}>click me</button>
        </div>
    );
}

export default Services;