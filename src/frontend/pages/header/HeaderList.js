import React, { useState } from 'react';
import HeaderLink from '../../components/HeaderLink';

const HeaderList = ({ toggleHeader, handleHeader }) => {
  return (
    <ul className={`lg:flex  md:flex sm:flex items-center text-2xl justify-between text-neutral-800 gap-4  transition-all lg:flex-row lg:block   sm:justify-between responsive-header ${toggleHeader ? 'removeHeading' : 'toggleHeading'} `}>

      <HeaderLink
        onClick={handleHeader}
        to="/" headLink="Home"
        className={` ${toggleHeader ? 'removeHeading' : 'toggleHeading'} `} />

      <HeaderLink
        onClick={handleHeader}
        to="/services" headLink="Services"
        className={` ${toggleHeader ? 'removeHeading' : 'toggleHeading'} `} />

      <HeaderLink
        onClick={handleHeader}
        to="/about" headLink="About"
        className={` ${toggleHeader ? 'removeHeading' : 'toggleHeading'} `} />

      <HeaderLink
        onClick={handleHeader}
        to="/doctors" headLink="Doctors"
        className={` ${toggleHeader ? 'removeHeading' : 'toggleHeading'} `} />

      <HeaderLink
        onClick={handleHeader}
        to="/book" headLink="Book"
        className={` ${toggleHeader ? 'removeHeading' : 'toggleHeading'} `} />

      <HeaderLink
        onClick={handleHeader}
        to="/reviews" headLink="Review"
        className={` ${toggleHeader ? 'removeHeading' : 'toggleHeading'} `} />

      <HeaderLink
        onClick={handleHeader}
        to="/blogs" headLink="Blogs"
        className={` ${toggleHeader ? 'removeHeading' : 'toggleHeading'} `} />
    </ul>
  );
}

export default HeaderList;

