import React from 'react';
import hospitalLogo from '../assets/images/hospital.png'
import HeaderLink from '../../components/Header';
import { Link } from 'react-router-dom';

const Header=()=> (
        <nav className='navbar  z-50 fixed bg-white inset-0 lg:h-20 lg:shadow-xl md:shadow-md sm:h-20 sm:shadow-sm md:h-20'>
            <div className=" container max-auto px-20 flex justify-between items-center min-h-full min-w-full lg:flex-row md:flex-row sm:flex-col lg:flex-row">
                <Link to='/'>
                    <div className="lg:flex md:flex sm:flex items-center lg:pt-0  sm:items-center sm:justify-center sm:pt-3"><img src={hospitalLogo} alt="" className='h-12 pr-5' /><span className='text-3xl text-cyan-400'>Carely</span>
                    </div>
                </Link>
                <ul className='lg:flex  md:flex sm:flex items-center text-2xl justify-between text-neutral-800 gap-4  transition-all lg:flex-row lg:block  md:flex-row sm:flex-col sm:justify-between sm:hidden '>
                    <HeaderLink to="/" headLink="Home" />
                    <HeaderLink to="/services" headLink="Services" />
                    <HeaderLink to="/about" headLink="About" />
                    <HeaderLink to="/doctors" headLink="Doctors" />
                    <HeaderLink to="/book" headLink="Book" />
                    <HeaderLink to="/reviews" headLink="Review" />
                    <HeaderLink to="/blogs" headLink="Blogs" />
                </ul>
            </div>
        </nav>
    );
export default Header;
