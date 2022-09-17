import React, { useState } from 'react';
import UploadImg from '../../components/UploadImg';
import Button from '../../components/Button';

function AddReview() {
  const [name, setName] = useState('')
  const [opinion, setOpinion] = useState('')

  const handleName = (e) => setName(e.target.value)
  const handleOpinion = (e) => setOpinion(e.target.value)
  const handleReview = () => {
    if (name.trim() === '') return
    if (opinion.trim() === '') return
    setName('')
    setOpinion('')
  }

  return (
    <div className='leave_review'>
      <form onSubmit={handleReview}
        action='/reviews'
        className='flex items-center justify-center border-2 rounded-md border-cyan-400 flex-col xl:w-1/2 lg:w-1/2 xl:m-auto lg:m-auto md:w-4/5 md:m-auto sm:m-auto sm:w-4/5 gap-y-8 lg:px-16 xl:px-16 md:px-8 sm:px-8 '>

        <h1 className='text-4xl my-4 font-semibold sm:text-center md:text-center'>Leave Review</h1>

        <input
          onChange={handleName}
          value={name}
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border-2 border-cyan-400 rounded-md py-2 pl-9 pr-3 focus:outline-none   sm:text-sm" placeholder="your name" type="text" name="search" id='name' required />


        <textarea
          onChange={handleOpinion}
          value={opinion}
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border-2 border-cyan-400 rounded-md py-2 pl-9 pr-3 focus:outline-none   sm:text-sm" placeholder="your opinion" type="tel" name="search" id='opinion' required

        />

        <h1 className='text-3xl text-slate-400 -mb-7'>Please upload your photo </h1>
        <UploadImg />
        <div>
          <Button
            text="Add it"
            icon="fa-solid fa-plus"
          />
        </div>
      </form>
    </div>
  );
}

export default AddReview;