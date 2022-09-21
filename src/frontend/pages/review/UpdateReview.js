import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchSingleData, fetchDeleteRequest } from '../redux/actions/index'
import { putAllReviews } from '../redux/actions/index';
import { storage } from '../../config/firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid';

import Button, { DangerButton } from '../../components/Button';
import Spinner from '../../components/Spinner';
import UploadInput from '../../components/UploadInput';

function UpdateReview() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  let { singleData } = useSelector(state => state.serviceState)
  let {reviews} = useSelector(state => state.serviceState)
  console.log(reviews);

  const [name, setName] = useState('')

  const [opinion, setOpinion] = useState('')


  const [photo, setPhoto] = useState(null)
  const [imageUrls, setImageUrls] = useState([]);
  const imagesListRef = ref(storage, "images/");

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

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, [])


  const handleReview = () => {
    if (photo === null) return
    setLoading(true)
    dispatch(putAllReviews({
      ...singleData,
      name: name,
      opinion: opinion,
      photo: imageUrls[imageUrls.length - 1]
    }, id))
    const imgRef = ref(storage, `images/${photo.name + v4()}`)
    uploadBytes(imgRef, photo).then((snapshot) => {
      getDownloadURL(snapshot.ref).then(url => {
        setImageUrls(prev => [...prev, url])
      })
    })
    setLoading(false)
  }
console.log(singleData);
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
            onSubmit={handleReview}
            action="/reviews"
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
            <UploadInput
              header='Update profile photo'
              onChange={e => setPhoto(e.target.files[e.target.files.length - 1])}
            />
            <div>

              <Button
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