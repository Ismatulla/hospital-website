import React from 'react';
import HeaderLink from '../../components/HeaderLink';

const HeaderList = ({ toggleHeader }) => {
  return (
    <ul className={`lg:flex  md:flex sm:flex items-center text-2xl justify-between text-neutral-800 gap-4  transition-all lg:flex-row lg:block   sm:justify-between responsive-header  ${toggleHeader === false ? 'toggleHeading' : 'removeHeading'}`}>
      <HeaderLink to="/" headLink="Home" />
      <HeaderLink to="/services" headLink="Services" className={`${toggleHeader === false ? 'toggleHeading' : 'removeHeading'}`} />
      <HeaderLink to="/about" headLink="About" />
      <HeaderLink to="/doctors" headLink="Doctors" />
      <HeaderLink to="/book" headLink="Book" />
      <HeaderLink to="/reviews" headLink="Review" />
      <HeaderLink to="/blogs" headLink="Blogs" />
    </ul>
  );
}

export default HeaderList;

