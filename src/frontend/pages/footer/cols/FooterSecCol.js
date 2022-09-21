import React from 'react'
import Ul from './Ul'

const FooterSecCol = () => (

  <div className=' flex justify-between flex-col items-center '>
    <h1 className='text-2xl font-semibold text-cyan-700  mb-4'>Contact Info</h1>
    <ul className='flex flex-col gap-y-3'>
      <Ul icon="fa-solid fa-phone-flip" text="+123-45-67" />
      <Ul icon="fa-solid fa-phone-flip" text="+222-44-21" />
      <Ul icon="fa-solid fa-envelope" text="carely@gmail.com" />
      <Ul icon="fa-solid fa-envelope" text="help@gmail.com" />
      <Ul icon="fa-solid fa-location-dot" text="Sydney,Australia" />
    </ul>
  </div>
)

export default FooterSecCol
