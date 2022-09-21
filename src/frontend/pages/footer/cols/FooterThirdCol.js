import React from 'react'
import Ui from './Ul'
const FooterThirdCol = () => (
  <div className='follow flex justify-between flex-col items-center '>
    <h1 className='text-2xl font-semibold text-cyan-700 mb-4'>Follow Us</h1>
    <ul className='flex flex-col gap-y-3'>
      <Ui icon="fa-brands fa-facebook-f" text="Facebook" />
      <Ui icon="fa-brands fa-twitter" text=" Twitter" />
      <Ui icon="fa-brands fa-linkedin-in" text=" LinkedIn" />
      <Ui icon="fa-brands fa-instagram" text="Instagram" />
      <Ui icon="fa-brands fa-pinterest" text="Pinterest" />
    </ul>
  </div>
)


export default FooterThirdCol