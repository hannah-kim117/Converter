import React, { useState } from 'react';
import Header from './Header'; // Import the Header component
import './Faq.css'; // Import the CSS file


const Faq = () => {
  return (
    <div>
      <Header /> {/* Include the Header component */}
      <h1>FAQ Page</h1>
    </div>
  );
};

function FAQPage() {
  const faqData = [
    { question: "Question 1", answer: "Answer to question 1" },
    { question: "Question 2", answer: "Answer to question 2" },
    // Add more FAQ items as needed
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      <Faq /> {/* Include the Faq component */}
      <div>
        {faqData.map((item, index) => (
          <div key={index}>
            <h2>
              {item.question}
              <button onClick={() => handleToggle(index)}>
                {expandedIndex === index ? '▲' : '▼'}
              </button>
            </h2>
            {expandedIndex === index && <p>{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQPage;
