import React, { useState, useId, useEffect } from 'react';
import { storage } from '../../config/firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid';

export function UploadImg(props) {
  const [imageUrls, setImageUrls] = useState([]);
  const imagesListRef = ref(storage, "images/");

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

    </div>
  );
}

export const imgReference = (photo) => {
  const imgRef = ref(storage, `images/${photo.name + v4()}`)
  uploadBytes(imgRef, photo).then((snapshot) => {
    getDownloadURL(snapshot.ref).then(url => {
      setImageUrls(prev => [...prev, url])
    })
  })
}


