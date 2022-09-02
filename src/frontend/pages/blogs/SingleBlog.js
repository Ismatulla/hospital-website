import React from 'react';
import Button from '../../components/Button';

function SingleBlog({ description, blogger, title, date, image }) {
    return (
        <div className='border-2 border-cyan-400 rounded-xl'>
            <div className='p-6'>
                <div className='mb-6'>
                    <img className='rounded-xl object-cover h-40 w-full' src={image} alt="not found" />
                </div>
                <div>
                    <div className='flex justify-between mb-4'>
                        <span>  <i className="fa-solid fa-calendar text-cyan-400"></i> {date}</span>
                        <span> <i className="fa-solid fa-user text-cyan-400"></i> {blogger}</span>
                    </div>
                    <h1 className='text-2xl text-cyan-400 block pb-2'>{title}</h1>
                    <p>{description}</p>
                    <div className='mt-6 flex xl:justify-start lg:justify-start md:justify=center sm:justify-center sm:items-center'>
                    <Button/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleBlog;