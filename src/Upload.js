import React, { useState } from 'react';
import './upload.css'; // Import the CSS file


const UploadButton = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedBitRate, setSelectedBitRate] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // retrieve users file from event and store it in local variable called file
    setSelectedFile(file); // get local variable called file, and set it to global variable called selectedFile.
    
  };

  const handleBitRate = (event) => {
    const bitRate = event.target.value; // retrieve users file from event and store it in local variable called file
    setSelectedBitRate(bitRate); // get local variable called file, and set it to global variable called selectedFile.
    
  };

  const handleSubmit = () => {
    if (selectedFile && selectedBitRate) {
      const isConfirmed = window.confirm(`Are you sure you want to upload ${selectedFile.name} with a bitrate of ${selectedBitRate}?`);
      if (isConfirmed) {
        // Perform upload
        // For demonstration purposes, just log a message
        console.log(`File ${selectedFile.name} with bitrate ${selectedBitRate} uploaded.`);
        
        // SEnd post request to localhost server with users input (file and bitrate)
        const formData = new FormData();
        formData.append('audio', selectedFile);
        formData.append('bitRate', selectedBitRate);

        fetch('http://localhost:5000/convert-wav', {
          method: 'POST',
          body: formData
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.blob();
        })

        //Need to define an anchor link, create DOM string containing url that represents the file, 
        //then set that string as href value for the anchor link
        .then(blob => {
          const url = window.URL.createObjectURL(blob); //Create URL for blob data
          const link = document.createElement('a'); //Create link element
          link.href = url;    //Set URL as href
          link.download = 'converted_file.mp3'; // Set the filename for the downloaded file
          document.body.appendChild(link);  //Append the link to the DOM
          
          //Trigger the download
          link.click();  
          //removes the <a> element from the document body (good practice to remove it from the document to clean up)
          document.body.removeChild(link); 
          //then revoke this URL to release the resources associated with it and avoid memory leaks
          window.URL.revokeObjectURL(url);

          console.log(blob);
          alert("File successfully uploaded.");

        })

        
        .catch(error => {
          console.error('There was a problem with your fetch operation:', error);
          alert('An error occurred while uploading the file.');
        });
       
        

      }
    } else {
      alert('Please choose a file and specify the bitrate before uploading. It should take less than 30 seconds to upload.');
    }
  };

  return (
    <div className="upload-container"> {/* Apply the container class */}
      <input
        type="file"
        name="audio"
        id="audio"
        accept="audio/wav"
        required
        onChange={handleFileChange}
        className="upload-button" /* Assign a class name to the input element */
      />
      <p><i>Accepts WAV files only.</i></p>
      
        
      <p>{selectedFile ? `Selected file: ${selectedFile.name}` : 'No file selected'}</p>

      <label for="bitRateInput">Specify bitrate between 96 and 320 kbps:</label>
      <input
          type="number"
          min="96"
          max="320"
          id="bitRateInput"
          name="bitRateInput"
          required
          onChange={handleBitRate}
        />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
};

export default UploadButton;
