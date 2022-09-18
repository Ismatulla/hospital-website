import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { fetchSingleData } from '../redux/actions/index'
import { putAllReviews } from '../redux/actions/index';

import Button from '../../components/Button';
import Spinner from '../../components/Spinner';

function UpdateReview() {
  const { singleData } = useSelector(state => state.serviceState)
  const [name, setName] = useState('')
  const [opinion, setOpinion] = useState('')
  const [photo, setPhoto] = useState(null)

  const handleName = (e) => setName(e.target.value)
  const handleOpinion = (e) => {
    setOpinion(e.target.value)
    console.log(e.target);
  }
  const handleReview = () => {
    dispatch(putAllReviews({ name: name, opinion: opinion, photo: photo }))
  }
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchSingleData(id))

  }, [id])

  return (
    <div className=' container justify-items-center align-items-center place-items-center mx-auto my-8'>
      {singleData === null ? <Spinner /> : (
        <div className='leave_review'>
          <form onSubmit={handleReview}
            action='/reviews'
            className='flex items-center justify-center border-2 rounded-md border-cyan-400 flex-col xl:w-1/2 lg:w-1/2 xl:m-auto lg:m-auto md:w-4/5 md:m-auto sm:m-auto sm:w-4/5 gap-y-8 lg:px-16 xl:px-16 md:px-8 sm:px-8 '>

            <h1 className='text-4xl my-4 font-semibold sm:text-center md:text-center'>Update your review</h1>

            <input
              onChange={handleName}
              value={name}
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border-2 border-cyan-400 rounded-md py-2 pl-9 pr-3 focus:outline-none   sm:text-sm" placeholder="your name" type="text" name="search" id='name' required />


            <textarea
              onChange={handleOpinion}
              value={opinion}
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border-2 border-cyan-400 rounded-md py-2 pl-9 pr-3 focus:outline-none   sm:text-sm" placeholder="your opinion" type="tel" name="search" id='opinion' required

            />

            <h1 className='text-3xl text-slate-400 -mb-7'>update your photo </h1>
            {/* img upload */}
            <div>
              {photo && (
                <div>
                  <img src={URL.createObjectURL(photo)} width={"120px"} alt="not found" />
                  <br />
                  <button onClick={() => setPhoto(null)}>Remove</button>
                </div>
              )}
              <br />
              <br />
              <input
                name="myImage"
                type="file"
                onChange={(e) => {
                  setPhoto(e.target.files[0])
                }}
              />

            </div>
            {/* ///////////////////////////////////////// */}
            <div>
              <Button
                text="update it"
                icon="fa-solid fa-pen-to-square"
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default UpdateReview;