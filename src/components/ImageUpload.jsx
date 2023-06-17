import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState();

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
    console.log(event.target.files)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
   console.log(selectedImage)

    axios.post('/upload-image', selectedImage)
      .then(response => {
       
      })
      .catch(error => {
        // Handle errors
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleImageChange} />
      <button type="submit">Upload</button>
    </form>
  );
}

export default ImageUpload;