import React, { useState } from 'react';
import { uploadPropertyImages } from '../api';

const ImageUpload = ({ onUploadSuccess }) => {
  const [files, setFiles] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    files.forEach(file => formData.append('images', file));
    const res = await uploadPropertyImages(formData);
    onUploadSuccess(res.data.images);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" multiple onChange={e => setFiles([...e.target.files])} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default ImageUpload;
