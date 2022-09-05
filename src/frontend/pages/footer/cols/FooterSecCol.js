import React from 'react'

const FooterSecCol = () => (
  <div className=' flex justify-between flex-col items-center '>
    <h1 className='text-2xl font-semibold text-cyan-700  mb-4'>Contact Info</h1>
    <ul className='flex flex-col gap-y-3'>
      <li>
        <span className='px-2 inline-block'>
          <i className="fa-solid fa-phone-flip" />
        </span>
        +123-45-67
      </li>
      <li>
        <span className='px-2 inline-block'>
          <i className="fa-solid fa-phone-flip">
          </i>
        </span>
        +222-44-21
      </li>
      <li>
        <span className='px-2 inline-block'>
          <i className="fa-solid fa-envelope" />
        </span> carely@gmail.com
      </li>
      <li>
        <span className='px-2 inline-block'>
          <i className="fa-solid fa-envelope" />
        </span>
        help@gmail.com
      </li>
      <li>
        <span className='px-2 inline-block'>
          <i className="fa-solid fa-location-dot" />
        </span>
        Sydney,Australia
      </li>
    </ul>
  </div>
)

export default FooterSecCol
