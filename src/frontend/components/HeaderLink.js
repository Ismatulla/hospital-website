import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLink = (props) => (
  <Link to={`${props.to}`}>
    <li className='hover:text-cyan-400 transition-all cursor-pointer link ' onClick={props.onClick}>{props.headLink}</li>
  </Link>
);


export default HeaderLink;


