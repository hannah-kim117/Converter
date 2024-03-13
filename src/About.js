

import React from "react";
import Header from "./Header";
import './about.css'

const About = () => {
	return (
		<div> <Header/>
		<div className="about-container">
			
            <h1 className="header">About Us</h1>
            <div className="description">
                <p>This Audio Converter is a tool that allows users to convert WAV audio files to MP3 format. It provides a convenient way to convert audio files while also allowing users to specify the bitrate of the resulting MP3 file.</p>
                <h2>Available Features</h2>
                <ul>
                    <li>Convert WAV audio files to MP3 format.</li>
                    <li>Specify the bitrate of the resulting MP3 file before uploading.</li>
                    <li>Conversion will happen automatically once the file has been uploaded. Users will be able to download this converted file onto their local device.</li>
                </ul>
                <h2>How To</h2>
                <ol>
                    <li>Upload a WAV File: Click on the "Choose File" button to select a WAV audio file from your device.</li>
                    <li>Specify Bitrate: Choose the desired bitrate for the resulting MP3 file. The bitrate determines the quality and size of the MP3 file.</li>
                    <li>Convert to MP3: Once the WAV file is uploaded and the bitrate is specified, click on the "Convert" button to start the conversion process.</li>
                    <li>Download Converted File: Choose the desired folder on your local device to download the converted file.</li>
                </ol>
                <h2>Requirements</h2>
                <ul>
                    <li>Upload WAV files only.</li>
                    <li>You must specify the bitrate.</li>
                </ul>
            </div>
            
        </div>
		</div>
    );
};

export default About;
