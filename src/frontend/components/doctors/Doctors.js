import React, { useEffect } from 'react';
import SingleDoctor from './SingleDoctor';
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllDoctors } from '../redux/actions';
function Doctors(props) {
    const { doctors } = useSelector(state => state.serviceState)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllDoctors())
    }, [])
    return (
        <div className='my-36 lg:mx-36 md:mx-30 sm:mx-0' >
            <h1 className=' pb-16 lg:text-6xl sm:text-3xl font-bold text-center block'>
                OUR <span className='text-cyan-400  '>DOCTORS</span>
            </h1>
            <div className='  grid xl:grid-cols-3  lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 items-center justify-center '>
                {
                    doctors.map(doctor => (
                        <SingleDoctor
                            key={doctor.id}
                            name={doctor.name}
                            category={doctor.category}
                            title={doctor.title}
                            photo={doctor.photo}
                            facebook={doctor.facebook}
                            twitter={doctor.twitter}
                            instagram={doctor.instagram}
                            linkedIn={doctor.linkedIn}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Doctors;