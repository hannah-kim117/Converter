import React, { useState } from 'react';
import Header from './Header'; 
import './Faq.css'; 

import { Link } from 'react-router-dom';


function FAQPage() {
  const faqData = [
    { question: "How do I convert my WAV file to an MP3 file?", 
	answer: "Navigate to the 'Home' page and click on the upload button. It will only accept WAV files. \nYou must also specify the bitrate before you press the upload button." },
    { question: "What is a bitrate?", answer: "Bitrate refers to the amount of data used to represent a given length of audio. It determines the quality and size of the MP3 file." },
    {question: "How long does the process take?", answer: "Generally the conversion of one audio file to mp3 takes roughly 10 to 30 seconds."},
    {question: "My conversion failed. What now?", answer: "If you run into any problems, we would be more than happy to help you. Please send us an email using the form on the 'Contact Us' page."}
    // Add more FAQ items as needed
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      <Header /> {/* Include the Header component */}
      <h1>Frequently Asked Questions</h1>
      <div className='faq-container'>
        {faqData.map((item, index) => (
          <div key={index}>
            <div className={`faq-question ${expandedIndex === index ? 'expanded' : ''}`} onClick={() => handleToggle(index)}>
              <h2>{item.question} {expandedIndex === index ? '▲' : '▼'}</h2>
              <p className={`faq-answer ${expandedIndex === index ? 'expanded' : ''}`}>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
	  <Link to="/ContactUs" className="contact-us-button">Contact Us</Link> {/* Link to the Contact Us page */}
    </div>
  );
}
export default FAQPage;
