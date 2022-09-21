import React, { useEffect, useState } from 'react';
import { storage } from '../../config/firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'; import React from 'react';
import Button from './Button';
const [photo, setPhoto] = useState(null)
const [imageUrls, setImageUrls] = useState([]);
const imagesListRef = ref(storage, "images/");


function UploadImg() {
  const uploadImg = () => {
    const imgRef = ref(storage, `images/${photo.name + v4()}`)
    uploadBytes(imgRef, photo).then((snapshot) => {
      getDownloadURL(snapshot.ref).then(url => {
        setImageUrls(prev => [...prev, url])
      })
    })
  }
  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, [])
  return (
    <div>
      <Button
        onClick={uploadImg}
        type='submit'
        text="update it"
        icon="fa-solid fa-pen-to-square"
      />
      {imageUrls.map((url) => {
        return <img src={url} />;
      })}
    </div>
  );
}

export default UploadImg;
