import React from 'react'
import Navbar from '../components/navbar'
import { Carousel } from 'flowbite-react'

import aboutImg from '../photos/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg'
import omg from '../photos/colorful-3d-banner-big-sale_23-2148409367.jpg'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'

import { Card } from "flowbite-react";
import AsImg from '../photos/pic3.jpg'



const Home = () => {
  return (
      <div>
          <div>
              <Navbar/>
          </div>
      <div className='flex justify-evenly items-center px-4 lg:px-14 h-36 lg:mx-28    mt-32 bg-yellow-100'>
        <div>
          <h1 className='lg:text-4xl text-2xl font-bold text-yellow-500'>FLAT <span>$500</span> OFF</h1>
        </div>
        <div>
         <h4 className='lg:text-4xl text-xl text-yellow-500'> On Your 1st Purchase </h4>
        </div>
              
      </div>
      <div className='lg:mx-24 lg:mt-8 '>
        <img className=' w-full' src={aboutImg} alt="" />
      </div>
      <div className='flex items-center justify-center  '>
        <img className='w-60 mt-4 lg:mt-0 md:mt-0  ' src={omg} alt="" />
        <img className='w-60 hidden   md:block ' src={omg} alt="" />
        <img className='w-60 hidden  md:block ' src={omg} alt="" />
        <img className='w-60 hidden  lg:block ' src={omg} alt="" />
        <img className='w-60 hidden xl:block ' src={omg} alt="" />
        <img className='w-60 hidden ' src={omg} alt="" />
        <img className='w-60 hidden ' src={omg} alt="" />
          <img className='w-60 hidden  ' src={omg} alt="" />
       


      </div>
      <div className='flex justify-evenly items-center px-4 lg:px-14 h-36 lg:mx-28    mt-20 bg-yellow-100'>
          <h1 className='lg:text-6xl text-2xl font-bold text-yellow-500' >CATEGORY SPECIALS</h1>
      </div>
      <div className='flex flex-row justify-evenly flex-wrap mt-4'>
          <div> <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImg}
    >
           <div className=''>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
         Kids Wear
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
              </div>
        </Card>
          </div> 
       <div className='lg:mt-0 md:mt-0 mt-2'>
         <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImg}
    >
           <div className=''>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
         Kids Wear
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
              </div>
          </Card>
        </div> 
        <div  className='lg:mt-0 md:mt-0 mt-2'>
           <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImg}
          >
            <div className=''>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
         Kids Wear
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
              </div>
      
          </Card>
        </div>
        <div  className='lg:mt-0 md:mt-0 mt-2'>
           <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImg}
    >
          <div className=''>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
         Kids Wear
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
              </div>
          </Card>
          </div>
       
       
      </div>
       <div className='flex flex-row justify-evenly flex-wrap mt-4'>
          <div> <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImg}
    >
           <div className=''>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
         Kids Wear
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
              </div>
        </Card>
          </div> 
       <div className='lg:mt-0 md:mt-0 mt-2'>
         <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImg}
    >
           <div className=''>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
         Kids Wear
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
              </div>
          </Card>
        </div> 
        <div  className='lg:mt-0 md:mt-0 mt-2'>
           <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImg}
          >
            <div className=''>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
         Kids Wear
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
              </div>
      
          </Card>
        </div>
        <div  className='lg:mt-0 md:mt-0 mt-2'>
           <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImg}
    >
          <div className=''>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
         Kids Wear
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
              </div>
          </Card>
          </div>
       
       
      </div>
       <div className='flex flex-row justify-evenly flex-wrap mt-4'>
          <div> <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImg}
    >
           <div className=''>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
         Kids Wear
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
              </div>
        </Card>
          </div> 
       <div className='lg:mt-0 md:mt-0 mt-2'>
         <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImg}
    >
           <div className=''>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
         Kids Wear
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
              </div>
          </Card>
        </div> 
        <div  className='lg:mt-0 md:mt-0 mt-2'>
           <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImg}
          >
            <div className=''>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
         Kids Wear
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
              </div>
      
          </Card>
        </div>
        <div  className='lg:mt-0 md:mt-0 mt-2'>
           <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImg}
    >
          <div className=''>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
         Kids Wear
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
              </div>
          </Card>
          </div>
       
       
      </div>
  
    </div>
  )
}

export default Home