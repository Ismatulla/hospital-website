import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchNavbar } from '../pages/redux/actions';
import { useDispatch, useSelector } from 'react-redux'

function HeaderLink(props) {
  
  return (
    <Link to={`${props.to}`}>
      <li className='hover:text-cyan-400 transition-all cursor-pointer link '>{props.headLink}</li>
    </Link>
  );
};

export default HeaderLink;


