import React from 'react';

const Ul = (props) => (
  <li >
    <span className='px-2 inline-block'>
      <i className={`${props.icon}`} />
    </span>
    {`${props.text}`}
  </li>
);


export default Ul;