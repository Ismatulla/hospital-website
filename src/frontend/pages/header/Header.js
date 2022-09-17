import React, { useState } from 'react';
import hospitalLogo from '../assets/images/hospital.png'
import { Link } from 'react-router-dom';
import HeaderList from './HeaderList';

const Header = () => {

    const [toggleHeader, setToggleHeader] = useState(false)
    const handleHeader = () => setToggleHeader(!toggleHeader)
    
    return (
        <nav className='navbar  z-50 fixed bg-white inset-0 lg:h-20 lg:shadow-xl md:shadow-md sm:h-20 sm:shadow-sm md:h-20 relative'>
            <div className=" container max-auto px-20 flex justify-between items-center min-h-full min-w-full lg:flex-row md:flex-row sm:flex-col lg:flex-row ">
                <Link to='/'>
                    <div className="lg:flex md:flex sm:flex items-center lg:pt-0  sm:items-center sm:justify-center sm:pt-3"><img src={hospitalLogo} alt="" className='h-12 pr-5' /><span className='text-3xl text-cyan-400'>Carely</span>
                    </div>
                </Link>
                <HeaderList 
                toggleHeader={toggleHeader}
                handleHeader={handleHeader}
                />
                {
                    !toggleHeader ? <div className='lg:hidden xl:hidden pointer text-3xl absolute top-6 right-6 ' onClick={handleHeader}>
                        <i className="fa-solid fa-bars" />
                    </div> : <div className='lg:hidden xl:hidden pointer text-3xl absolute top-6 right-6' onClick={handleHeader}>
                        <i className="fa-solid fa-xmark" />
                    </div>
                }

            </div>
        </nav>
    );
}
export default Header;
