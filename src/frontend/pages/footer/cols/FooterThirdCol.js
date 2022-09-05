import React from 'react'

const FooterThirdCol = () => (
  <div className='follow flex justify-between flex-col items-center '>
    <h1 className='text-2xl font-semibold text-cyan-700 mb-4'>Follow Us</h1>
    <ul className='flex flex-col gap-y-3'>
      <li >
        <span className='px-2 inline-block'>
          <i className="fa-brands fa-facebook-f" />
        </span>
        Facebook
      </li>
      <li>
        <span className='px-2 inline-block'>
          <i className="fa-brands fa-twitter" />
        </span>
        Twitter
      </li>
      <li>
        <span className='px-2 inline-block'>
          <i className="fa-brands fa-linkedin-in"></i>
        </span>
        LinkedIn
      </li>
      <li>
        <span className='px-2 inline-block'>
          <i className="fa-brands fa-instagram"></i>
        </span>
        Instagram
      </li>
      <li>
        <span className='px-2 inline-block'>
          <i className="fa-brands fa-pinterest"></i>
        </span>
        Pinterest
      </li>
    </ul>
  </div>
)


export default FooterThirdCol