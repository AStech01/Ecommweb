import React, { useState } from 'react';
import './faq.css';
import { FaAngleDown } from 'react-icons/fa6';
import Navbar from './Navbar';
import MyFooter from '../pages/MyFooter';
import imgo from '../pics/Icons-App-Store-Google-play-1170x723.png'

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePanel = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: "What is the E-Commerce?", answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit It looks like there are  a few issues in your React component that are preventing the FAQ accordion from working properly. Here are some changes to fix the issues:Lorem ipsum dolor sit amet consectetur, adipisicing elit It looks like there are  a few issues in your React component that are preventing the FAQ accordion from working properly. Here are some changes to fix the issues " },
    { question: "What is the purpose of this FAQ?", answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit It looks like there are  a few issues in your React component that are preventing the FAQ accordion from working properly. Here are some changes to fix the issues:Lorem ipsum dolor sit amet consectetur, adipisicing elit It looks like there are  a few issues in your React component that are preventing the FAQ accordion from working properly. Here are some changes to fix the issues " },
    { question: "How can I contact support?", answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit It looks like there are  a few issues in your React component that are preventing the FAQ accordion from working properly. Here are some changes to fix the issues:Lorem ipsum dolor sit amet consectetur, adipisicing elit It looks like there are  a few issues in your React component that are preventing the FAQ accordion from working properly. Here are some changes to fix the issues " },
    { question: " Marketing and Promotion?", answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit It looks like there are  a few issues in your React component that are preventing the FAQ accordion from working properly. Here are some changes to fix the issues:Lorem ipsum dolor sit amet consectetur, adipisicing elit It looks like there are  a few issues in your React component that are preventing the FAQ accordion from working properly. Here are some changes to fix the issues " },
    { question: "Monitor and Improve?", answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit It looks like there are  a few issues in your React component that are preventing the FAQ accordion from working properly. Here are some changes to fix the issues:Lorem ipsum dolor sit amet consectetur, adipisicing elit It looks like there are  a few issues in your React component that are preventing the FAQ accordion from working properly. Here are some changes to fix the issues " },
    { question: "How can help Customer Service?", answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit It looks like there are  a few issues in your React component that are preventing the FAQ accordion from working properly. Here are some changes to fix the issues:Lorem ipsum dolor sit amet consectetur, adipisicing elit It looks like there are  a few issues in your React component that are preventing the FAQ accordion from working properly. Here are some changes to fix the issues " },

        { question: "Set Up Payment Methods?", answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit It looks like there are  a few issues in your React component that are preventing the FAQ accordion from working properly. Here are some changes to fix the issues:Lorem ipsum dolor sit amet consectetur, adipisicing elit It looks like there are  a few issues in your React component that are preventing the FAQ accordion from working properly. Here are some changes to fix the issues " },
    {
      question: "your complaints and problem solving?", answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit It looks like there are  a few issues in your React component that are preventing the FAQ accordion from working properly. Here are some changes to fix the issues:Lorem ipsum dolor sit amet consectetur, adipisicing elit It looks like there are  a few issues in your React component that are preventing the FAQ accordion from working properly. Here are some changes to fix the issues "
      
     },
  ];

  return (
    <div>

       <div>
              <Navbar/>
          </div>

      <div className='wrapper '>
       
          
        {faqs.map((faq, index) => (
          <div className='faq' key={index}>
            <button className='accordin' onClick={() => togglePanel(index)}>
              {faq.question}
              <FaAngleDown className={`icon ${activeIndex === index ? 'active' : ''}`} />
            </button>
            <div className='panel' style={{ display: activeIndex === index ? 'block' : 'none' }}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

  
       
      <div className='mt-4'>
        <MyFooter />
        </div>
    </div>
  );
};

export default Faq;
