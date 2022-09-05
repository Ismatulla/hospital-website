import React from 'react';
import HeaderLink from '../../components/Header';

const HeaderList = ({ toggleHeader }) => (
  <ul className={`lg:flex  md:flex sm:flex items-center text-2xl justify-between text-neutral-800 gap-4  transition-all lg:flex-row lg:block   sm:justify-between responsive-header  ${toggleHeader === false ? 'toggleHeading' : 'removeHeading'}`}>
      <HeaderLink to="/" headLink="Home" className="removeHeading" />
      <HeaderLink to="/services" headLink="Services" />
      <HeaderLink to="/about" headLink="About" />
      <HeaderLink to="/doctors" headLink="Doctors" />
      <HeaderLink to="/book" headLink="Book" />
      <HeaderLink to="/reviews" headLink="Review" />
      <HeaderLink to="/blogs" headLink="Blogs" />
  </ul>
);

export default HeaderList;

