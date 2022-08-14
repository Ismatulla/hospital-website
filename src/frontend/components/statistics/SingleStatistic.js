import React from 'react';
function SingleStatistic(props) {
    return (
        <div className=' grid gap-3 grid-cols-4 items-center  mb-8 justfy-center'>
            <div className="card w-20 h-20 bg-teal-400  ">
                <div className="logo">
                    <i className='fas fa-user-md'>
                    </i>
                </div>
                <h1></h1>
            </div>
            <div className="card">
                <div className="logo">
                    <i className='fas fa-users'>
                    </i>
                </div>
                <h1>140+</h1>
                <h3>doctors at work</h3>
            </div>
            <div className="card">
                <div className="logo">
                    <i className='fas fa-procedures'>
                    </i>
                </div>
                <h1>140+</h1>
                <h3>doctors at work</h3>
            </div>
            <div className="card">
                <div className="logo">
                    <i className='fas fa-hospital'>
                    </i>
                </div>
                <h1>140+</h1>
                <h3>doctors at work</h3>
            </div>
        </div>
    );
}

export default SingleStatistic;