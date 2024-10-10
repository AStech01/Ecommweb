import React from 'react'
import { Carousel } from 'flowbite-react'

import aboutImg from '../photos/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg'
import omg from '../photos/colorful-3d-banner-big-sale_23-2148409367.jpg'
import AsImge from '../photos/pic6.avif'
import AsImgf from '../photos/pic7.avif'
import AsImgg from '../photos/pic8.avif'
import AsImgh from '../photos/pic9.avif'
import AsImgi from '../photos/pic10.avif'
import AsImgj from '../photos/pic11.avif'
import AsImgk from '../photos/pic12.avif'
import AsImgl from '../photos/pic13.avif'
import AsImgm from '../photos/pic14.avif'
import AsImgn from '../photos/pic15.avif'
import AsImgo from '../photos/pic16.avif'


import { Card } from "flowbite-react";
import AsImg from '../photos/pic3.jpg'
import SlideImg from '../photos/copy-space-friends-with-skateboard-basketball-ball_23-2148478710.avif'
import MyFooter from './MyFooter'
import Fles from '../components/Fles'
import Navbar from '../components/Navbar'
import Carousels from '../components/Carousels'



const Home = () => {
  return (
      <div>
          <div>
              <Navbar/>
          </div>
      <div className='flex justify-evenly items-center px-4 lg:px-14 h-36 lg:mx-28    mt-32 bg-yellow-100'>
        <div>
          <h1 className='lg:text-6xl md:text-4xl text-2xl font-bold text-yellow-500'>FLAT <span>$500</span> OFF</h1>
        </div>
        <div>
         <h4 className='lg:text-4xl md:text-4xl text-xl text-yellow-500'> On Your 1st Purchase </h4>
        </div>
              
      </div>
      <div className='lg:mx-24 lg:mt-8 '>
        <img className=' w-full' src={aboutImg} alt="" />
      </div>
      <div className='flex items-center justify-center mt-4 lg:mt-0 md:mt-0   '>
        <img className='w-48 ' src={omg} alt="" />
        <img className='w-48 hidden    ' src={omg} alt="" />
        <img className='w-48 hidden     ' src={omg} alt="" />
        <img className='w-48 hidden   ' src={omg} alt="" />
        <img className='w-48 hidden    ' src={omg} alt="" />
        <img className='w-48 hidden' src={omg} alt="" />
       
       


      </div>
      <div className='flex justify-evenly items-center px-4 lg:px-14 h-36 lg:mx-28    mt-20 bg-yellow-100'>
          <h1 className='lg:text-6xl md:text-4xl text-2xl font-bold text-yellow-500' >CATEGORY SPECIALS</h1>
      </div>
      <div className='flex flex-row justify-evenly flex-wrap mt-4'>
          <div className=''> <Card
      className="max-w-sm "
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImg}
    >
           <div className='bg-yellow-200 p-2 rounded-lg '>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
         Sack dress
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
            </h5>
            <div className='flex items-center justify-center'>
            <button className='bg-brandPrimary text-white py-2 px-10 transition-all
                         duration-300 rounded hover:bg-neutralDGray mt-2 text-2xl font-semibold'>Click Me</button></div>
              </div>
        </Card>
          </div> 
       <div className='lg:mt-0 md:mt-0 mt-2'>
         <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImge}
    >
           <div className='bg-yellow-200 p-2 rounded-lg '>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
         Sheath dress
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
                <div className='flex items-center justify-center'>
            <button className='bg-brandPrimary text-white py-2 px-10 transition-all
                         duration-300 rounded hover:bg-neutralDGray mt-2 text-2xl font-semibold'>Click Me</button></div>
              
              </div>
          </Card>
        </div> 
        <div  className='lg:mt-0 md:mt-0 mt-2'>
           <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImgf}
          >
            <div className='bg-yellow-200 p-2 rounded-lg '>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Trumpet dress
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
                <div className='flex items-center justify-center'>
            <button className='bg-brandPrimary text-white py-2 px-10 transition-all
                         duration-300 rounded hover:bg-neutralDGray mt-2 text-2xl font-semibold'>Click Me</button></div>
              </div>
      
          </Card>
        </div>
        <div  className='lg:mt-0 md:mt-0 mt-2'>
           <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImgg}
    >
          <div className='bg-yellow-200 p-2 rounded-lg '>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Culotte dress
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
                <div className='flex items-center justify-center'>
            <button className='bg-brandPrimary text-white py-2 px-10 transition-all
                         duration-300 rounded hover:bg-neutralDGray mt-2 text-2xl font-semibold'>Click Me</button></div>
              </div>
          </Card>
          </div>
       
       
      </div>
       <div className='flex flex-row justify-evenly flex-wrap mt-4'>
          <div> <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImgh}
    >
           <div className='bg-yellow-200 p-2 rounded-lg '>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
         Babydoll dress
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
            </h5>
              <div className='flex items-center justify-center'>
            <button className='bg-brandPrimary text-white py-2 px-10 transition-all
                         duration-300 rounded hover:bg-neutralDGray mt-2 text-2xl font-semibold'>Click Me</button></div>
              </div>
        </Card>
          </div> 
       <div className='lg:mt-0 md:mt-0 mt-2'>
         <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImgi}
    >
           <div className='bg-yellow-200 p-2 rounded-lg '>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Polo dress
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
                <div className='flex items-center justify-center'>
            <button className='bg-brandPrimary text-white py-2 px-10 transition-all
                         duration-300 rounded hover:bg-neutralDGray mt-2 text-2xl font-semibold'>Click Me</button></div>
              </div>
          </Card>
        </div> 
        <div  className='lg:mt-0 md:mt-0 mt-2'>
           <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImgj}
          >
            <div className='bg-yellow-200 p-2 rounded-lg '>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
         Balloon Dress
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
                <div className='flex items-center justify-center'>
            <button className='bg-brandPrimary text-white py-2 px-10 transition-all
                         duration-300 rounded hover:bg-neutralDGray mt-2 text-2xl font-semibold'>Click Me</button></div>
              </div>
      
          </Card>
        </div>
        <div  className='lg:mt-0 md:mt-0 mt-2'>
           <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImgk}
    >
          <div className='bg-yellow-200 p-2 rounded-lg '>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        A-line Dress
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
                <div className='flex items-center justify-center'>
            <button className='bg-brandPrimary text-white py-2 px-10 transition-all
                         duration-300 rounded hover:bg-neutralDGray mt-2 text-2xl font-semibold'>Click Me</button></div>
              </div>
          </Card>
          </div>
       
       
      </div>
       <div className='flex flex-row justify-evenly flex-wrap mt-4'>
          <div> <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImgl}
    >
           <div className='bg-yellow-200 p-2 rounded-lg '>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
         Denim Dress
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
            </h5>
              <div className='flex items-center justify-center'>
            <button className='bg-brandPrimary text-white py-2 px-10 transition-all
                         duration-300 rounded hover:bg-neutralDGray mt-2 text-2xl font-semibold'>Click Me</button></div>
              </div>
        </Card>
          </div> 
       <div className='lg:mt-0 md:mt-0 mt-2'>
         <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImgm}
    >
           <div className='bg-yellow-200 p-2 rounded-lg '>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Camisole Dress
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
                <div className='flex items-center justify-center'>
            <button className='bg-brandPrimary text-white py-2 px-10 transition-all
                         duration-300 rounded hover:bg-neutralDGray mt-2 text-2xl font-semibold'>Click Me</button></div>
              </div>
          </Card>
        </div> 
        <div  className='lg:mt-0 md:mt-0 mt-2'>
           <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImgn}
          >
            <div className='bg-yellow-200 p-2 rounded-lg '>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Corset Dress
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
                <div className='flex items-center justify-center'>
            <button className='bg-brandPrimary text-white py-2 px-10 transition-all
                         duration-300 rounded hover:bg-neutralDGray mt-2 text-2xl font-semibold'>Click Me</button></div>
              </div>
      
          </Card>
        </div>
        <div  className='lg:mt-0 md:mt-0 mt-2'>
           <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImgo}
    >
          <div className='bg-yellow-200 p-2 rounded-lg '>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
         Dirndl Dress
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
                <div className='flex items-center justify-center'>
            <button className='bg-brandPrimary text-white py-2 px-10 transition-all
                         duration-300 rounded hover:bg-neutralDGray mt-2 text-2xl font-semibold'>Click Me</button></div>
              </div>
          </Card>
          </div>
       
       
      </div>

      
      <div>
        <Carousels/>
      </div>
             
      {/* <div >
        <Fles/>
      </div> */}

      <div className='mt-4'>
        <MyFooter />
        </div>

    </div>
    
    
  )
}

export default Home