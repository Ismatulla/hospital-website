import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchSingleData } from '../redux/actions/index'
import { putAllReviews } from '../redux/actions/index';

import Button from '../../components/Button';
import Spinner from '../../components/Spinner';

function UpdateReview() {
  const dispatch = useDispatch()
  const { id } = useParams()

  let { singleData } = useSelector(state => state.serviceState)
  const [name, setName] = useState('')
  const [opinion, setOpinion] = useState('')
  const [photo, setPhoto] = useState(null)
  const handleName = (e) => setName(e.target.value)

  const handleOpinion = (e) => setOpinion(e.target.value)

  const handleReview = (e) => {
    e.preventDefault()
    dispatch(putAllReviews({
      ...singleData,
      name: name,
      opinion: opinion,
      photo: photo
    }, id))
  }

  useEffect(() => {
    dispatch(fetchSingleData(id))
  }, [id])

  useEffect(() => {
    setName(singleData?.name)
    setOpinion(singleData?.opinion)
  }, [singleData])

  const uploadImg = () => {
    const formData = new FormData()
    formData.append("flie", photo)
    formData.append("upload_preset", "v0x7gguk")
    axios.post("https://api.cloudinary.com/v1_1./dczub3u51/image/upolad",
       formData).then(res => console.log(res))
  }

  return (
    <div className=' container justify-items-center align-items-center place-items-center mx-auto my-8'>
      {singleData === null ? <Spinner /> : (
        <div className='leave_review'>
          <form
            onSubmit={handleReview}

            method='PUT'
            className='flex items-center justify-center border-2 rounded-md border-cyan-400 flex-col xl:w-1/2 lg:w-1/2 xl:m-auto lg:m-auto md:w-4/5 md:m-auto sm:m-auto  gap-y-8 lg:px-16 xl:px-16 md:px-8 sm:px-8 '>

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
            <input
              onChange={e => setPhoto(e.target.files[0])}
              type="file" name="" id="" />
            <div>
              <Button
                onClick={uploadImg}
                type='submit'
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