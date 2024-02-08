import React, { useState } from 'react';
import './upload.css'; // Import the CSS file


const UploadButton = ({ onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onFileUpload(file);
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
    </div>
  );
};

export default UploadButton;
