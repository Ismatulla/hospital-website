import React, { useState } from 'react';
function UploadImg() {
  const [selectedImage, setSelectedImage] = useState(null)
  return (
    <div>
      {selectedImage && (
        <div>
          <img src={URL.createObjectURL(selectedImage)} width={"120px"} alt="not found" />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />
      <br />
      <input
        name="myImage"
        type="file"
        onChange={(e) => {
          setSelectedImage(e.target.files[0])
        }}
      />

    </div>
  );
}

export default UploadImg;