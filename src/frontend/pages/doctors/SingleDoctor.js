import React from 'react';
import Icon from '../../components/Icon';

const SingleDoctor=({ facebook, instagram, linkedIn, photo, name, twitter, title })=> (
    
        <div className='lg:rounded-xl sm:rounded-xl md:rounded-xl lg:max-w-xs sm:w-80 sm:m-auto sm:shadow-md  md:w-90 md:m-auto  lg:min-h-full lg:min-w-full text-center shadow-xl   cursor-pointer hover:shadow-inner transition-all bg-white pb-96 singleCard object-cover bg-cyan-100'>
            <div className='w-full pb-0 lg:rounded-t-xl sm:rounded-t-xl md:rounded-t-xl '>
                <img src={photo} alt="" className='w-full h-60 object-cover lg:rounded-t-xl sm:rounded-t-xl md:rounded-t-xl ' />
            </div>
            <h1 className='lg:text-4xl md:text-3xl sm:text-3xl pt-6 font-semibold'>{name}</h1>
            <div className='flex flex-col justify-between min-h-full'>
                <div >
                    <p className='px-10  py-4  leading-7 block w-full text-2xl text-cyan-700  '>{title}</p>
                </div>
                <div className='flex gap-x-3 justify-center'>
                    <Icon
                        icon={<i className="fa-brands fa-square-facebook" />}
                        href={facebook}
                    />
                    <Icon
                        icon={<i className="fa-brands fa-square-twitter" />}
                        href={twitter}
                    />
                    <Icon
                        icon={<i className="fa-brands fa-instagram" />}
                        href={instagram}
                    />
                    <Icon
                        icon={<i className="fa-brands fa-instagram" />}
                        href={linkedIn}
                    />
                </div>
            </div>
        </div>
    );


export default SingleDoctor;