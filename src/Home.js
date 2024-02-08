
import React from "react";
// Importing Link from react-router-dom to 
// navigate to different end points.
import { Link } from "react-router-dom";
import Header from "./Header";
import Upload from "./Upload";

const Home = () => {
	return (
		<div>
            <Header />
			<Upload />
			<h1>Home Page</h1>
			<br />
			<ul>
				<li>
					{/* Endpoint to route to Home component */}
					<Link to="/">Home</Link>
				</li>
				<li>
					{/* Endpoint to route to About component */}
					<Link to="/about">About</Link>
				</li>
                <li>
					{/* Endpoint to route to About component */}
					<Link to="/faq">FAQ</Link>
				</li>
				<li>
					{/* Endpoint to route to Contact Us component */}
					<Link to="/contactus">Contact Us</Link>
				</li>
			</ul>
		</div>
	);
};

export default Home;
