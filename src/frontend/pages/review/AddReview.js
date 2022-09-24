import React, { useState, useId, } from 'react';
import Spinner from '../../components/Spinner'
import Button from '../../components/Button';
import { postAallReviews } from '../redux/actions/index'
import { useDispatch } from 'react-redux'
import axios from 'axios';


function AddReview() {
  const [name, setName] = useState('')
  const [opinion, setOpinion] = useState('')
  const [photo, setPhoto] = useState(null)
  const [imgURL, setimgURL] = useState('')
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const id = useId()
  const random = Math.random() * 10
  const handleName = (e) => setName(e.target.value)
  const handleOpinion = (e) => setOpinion(e.target.value)

  const uploadPhoto = () => {
    if (photo === null) return
    const formData = new FormData()
    formData.append("file", photo)
    formData.append("upload_preset", "ofwttnqh")
    axios.post("https://api.cloudinary.com/v1_1/dhkmvhsre/image/upload", formData).then(res => setimgURL(res?.data?.secure_url))

  }
  uploadPhoto()
  const handleReview = () => {

    if (name.trim() === '') return
    if (opinion.trim() === '') return
    dispatch(postAallReviews({ id: id * random, name: name, opinion: opinion, photo: imgURL }))
    setName('')
    setOpinion('')
    uploadPhoto()
  }

  return (
    <div className='leave_review'>
      <form
        action='/reviews'
        type="POST"
        onSubmit={handleReview}
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
        <h1 className='text-3xl text-cyan-400'>Add profile photo</h1>
        <label
          className="block"
        >
          <input
            onChange={(e) => setPhoto(e.target.files[0])}
            type="file"
            required
            className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
        </label>
        <div>
          <Button
            onClick={uploadPhoto}
            text="Add rewiev"
            icon="fa-solid fa-plus"
            type="submit"
          />
          <img src={imgURL} alt="not uploaded yet" className='h-40 mb-4' />
        </div>
      </form>
    </div>
  );
}

export default AddReview;
