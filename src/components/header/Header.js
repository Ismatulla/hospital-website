import React from 'react';
import hospitalLogo from '../assets/images/hospital.png'
import { Link } from 'react-router-dom';
function Header(props) {
    return (
        <nav className='navbar  z-9999 inset-0 lg:h-20 lg:shadow-xl md:shadow-md sm:h-20 sm:shadow-sm md:h-20'>
            <div className=" container max-auto px-20 flex justify-between items-center min-h-full min-w-full lg:flex-row md:flex-row sm:flex-col lg:flex-row">
                <Link to='/'>
                    <div className="lg:flex md:flex sm:flex items-center lg:pt-0  sm:items-center sm:justify-center sm:pt-3"><img src={hospitalLogo} alt="" className='h-12 pr-5' /><span className='text-3xl text-cyan-400'>Carely</span>
                    </div>
                </Link>
                <ul className='lg:flex  md:flex sm:flex items-center text-2xl justify-between text-neutral-800 gap-4  transition-all lg:flex-row lg:block  md:flex-row sm:flex-col sm:justify-between sm:hidden '>
                    <Link to='/'>
                        <li className='hover:text-cyan-400 transition-all cursor-pointer '>Home</li>
                    </Link>
                    <Link to='/services'>
                        <li className='hover:text-cyan-400 transition-all cursor-pointer'>Services</li>
                    </Link>
                    <Link to='/about'>
                        <li className='hover:text-cyan-400 transition-all cursor-pointer'>About</li>
                    </Link>
                    <Link to='/doctors'>
                        <li className='hover:text-cyan-400 transition-all cursor-pointer'>Doctors</li>
                    </Link>
                    <Link to='/book'>
                        <li className='hover:text-cyan-400 transition-all cursor-pointer'>Book</li>
                    </Link>
                    <Link to='/review'>
                        <li className='hover:text-cyan-400 transition-all cursor-pointer'>Review</li>
                    </Link>
                    <Link to='/blogs'>
                        <li className='hover:text-cyan-400 transition-all cursor-pointer'>Blogs</li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
}

export default Header;