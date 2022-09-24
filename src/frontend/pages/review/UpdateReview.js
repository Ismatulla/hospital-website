import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchSingleData, fetchDeleteRequest } from '../redux/actions/index'
import { putAllReviews } from '../redux/actions/index';


import Button, { DangerButton } from '../../components/Button';
import Spinner from '../../components/Spinner';
import axios from 'axios';

function UpdateReview() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  let { singleData } = useSelector(state => state.serviceState)

  const [name, setName] = useState('')
  const [opinion, setOpinion] = useState('')
  const [photo, setPhoto] = useState(null)
  const [imgURL, setImgURL] = useState('')

  const handleName = (e) => setName(e.target.value)

  const handleOpinion = (e) => setOpinion(e.target.value)

  const deleteData = () => {
    alert('are you sure you want to delete!')
    setLoading(true)
    dispatch(fetchDeleteRequest(id))
    navigate('/reviews')
    setLoading(false)

  }

  useEffect(() => {
    setLoading(true)
    dispatch(fetchSingleData(id))
    setLoading(false)
  }, [id])

  useEffect(() => {
    setLoading(true)
    setName(singleData?.name)
    setOpinion(singleData?.opinion)
    setLoading(false)
  }, [singleData])

  const uploadPhoto = () => {
    if (imgURL === '') return
    const formData = new FormData()
    formData.append("file", imgURL)
    formData.append("upload_preset", "ofwttnqh")
    axios
      .post("https://api.cloudinary.com/v1_1/dhkmvhsre/image/upload", formData)
      .then(res => setPhoto(res?.data?.secure_url))

  }
  uploadPhoto()
  const handleReview = () => {

    setLoading(true)
    dispatch(putAllReviews({
      ...singleData,
      name: name,
      opinion: opinion,
      photo: photo
    }, id))
    setLoading(false)
  }

  return (
    <div className=' container justify-items-center align-items-center place-items-center mx-auto my-8'>
      <div className='btn_add mt-44'>
        <DangerButton
          type="submit"
          onClick={deleteData}
          text='Delete Review'
          icon="fa-solid fa-trash" />
      </div>
      {loading === true ? <Spinner /> : (
        <div className='leave_review'>
          <form
            action='/reviews'
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
            <h1 className='text-3xl text-cyan-400'>Update profile photo</h1>
            <label className="block">
              <input
                required
                onChange={(e) => setImgURL(e.target.files[0])}
                type="file"
                className="
      block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100 "/>
            </label>
            <div>
              <Button onClick={uploadPhoto}
                type='submit'
                text="update it"
                icon="fa-solid fa-pen-to-square"
              />
              <img src={photo} alt="not uploaded yet" className='h-40 mb-4' />

            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default UpdateReview;