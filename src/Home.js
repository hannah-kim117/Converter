
import React from "react";

import Header from "./Header";
import Upload from "./Upload";

const Home = () => {
	return (
		<div>
            <Header />
			<h1>File Converter</h1>
			<h3>Easily convert your WAV files to MP3</h3>
			<Upload />
			
		</div>	
	);
};

export default Home;
