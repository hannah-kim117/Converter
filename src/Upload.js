import React, { useState } from 'react';
import './upload.css'; // Import the CSS file


const UploadButton = ({ onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onFileUpload(file);
  };

  const handleUploadConfirmation = () => {
    if (selectedFile) {
      const isConfirmed = window.confirm(`Are you sure you want to upload ${selectedFile.name}?`);
      if (isConfirmed) {
        // Perform upload
        // For demonstration purposes, we'll just log a message
        console.log(`File ${selectedFile.name} uploaded.`);
      }
    } else {
      alert('Please choose a file before uploading. It should take less than 30 seconds to upload.');
    }
  };

  return (
    <div className="upload-container"> {/* Apply the container class */}
      <input
        type="file"
        accept=".wav"
        onChange={handleFileChange}
        className="upload-button" /* Assign a class name to the input element */
      />
      <p>Accepts WAV files only.</p>
      <p>{selectedFile ? `Selected file: ${selectedFile.name}` : 'No file selected'}</p>
      <button onClick={handleUploadConfirmation}>Upload</button>
    </div>
  );
};

export default UploadButton;
