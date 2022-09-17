import React from 'react';
import Button from '../../components/Button';
import ServiceFonts from './ServiceFonts';

function SingleService(props) {

    const { title, description, details, idx } = props

    return (
        <div className='rounded-xl  lg:max-w-xs sm:w-80 sm:m-auto sm:shadow-md  md:w-90 md:m-auto  lg:min-h-full lg:min-w-full text-center shadow-xl   cursor-pointer hover:shadow-inner transition-all bg-white pb-96 singleCard object-cover'>
            <div >
                <i className={`${ServiceFonts[idx]} text-7xl text-cyan-400 pt-6`}></i>
            </div>
            <h1 className='lg:text-4xl md:text-3xl sm:text-3xl pt-3 font-semibold'>{title}</h1>
            <div className='flex flex-col justify-between min-h-full'>
                <div className='xl:h-40 lg:h-40 md:h-44 sm:h-48'>
                    <p className='px-10 py-8 leading-7 block w-full  '>{description}</p>
                </div>
                <div>
                    <Button
                        text={details}
                        icon="fas fa-chevron-right"
                    />
                </div>
            </div>
        </div>
    );
}

export default SingleService;
