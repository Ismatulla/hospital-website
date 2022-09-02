import React from 'react';
function SingleStatistic({ qty, status, icon }) {
    return (
        <React.Fragment>
            <div className="card lg:w-20 lg:h-24 sm:w-80 sm:m-auto sm:shadow-md sm:h-72 md:w-90 md:m-auto  lg:min-h-full lg:min-w-full text-center shadow-xl   cursor-pointer hover:-translate-y-2 transition-all bg-white ">
                <div className="logo">
                    <i className={`${icon} text-7xl text-cyan-400 pt-4`}>
                    </i>
                </div>
                <h1 className='lg:text-6xl md:text-3xl sm:text-3xl pt-3 font-semibold'>{qty}</h1>
                <h3 className='lg:text-3xl md:text-xl sm:text-xl pt-3 opacity-60 '>{status}</h3>
            </div>
        </React.Fragment>
    );
}

export default SingleStatistic;