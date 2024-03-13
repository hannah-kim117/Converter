

import "./App.css";
// importing components from react-router-dom package
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";


import Home from "./Home";

import About from "./About";

import Faq from "./Faq";
import ContactUs from "./ContactUs";


function App() {
	return (
		<>
			{/* This is the alias of BrowserRouter i.e. Router */}
			<Router>
				<Routes>
					
					<Route
						exact
						path="/"
						element={<Home />}
					/>

					
					<Route
						path="/about"
						element={<About />}
					/>

					<Route
						path="/faq"
						element={<Faq />}
					/>

					
					<Route
						path="/contactus"
						element={<ContactUs />}
					/>

					{/* If any route mismatches the upper 
		route endpoints then, redirect triggers 
		and redirects app to home component with to="/" */}
					{/* <Redirect to="/" /> */}
					<Route
						path="*"
						element={<Navigate to="/" />}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
