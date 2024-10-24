
import { Carousel } from 'flowbite-react'

import aboutImg from '../pics/download (1).jfif'
import vatt from '../pics/884469dd-a414-433d-b68e-23c0a1435aba.avif'

import omge from '../pics/q2342.png'
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
import './home.css'
  import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import React, { useEffect } from 'react';
import 'animate.css';



import Slae from '../pics/aaa.avif'
import Slbe from '../pics/bbb.avif'
import Slce from '../pics/ccc.avif'
import Slde from '../pics/ddd.avif'
import Slee from '../pics/eee.avif'
import Slfe from '../pics/fff.avif'
import Slge from '../pics/ggg.avif'
import Slhe from '../pics/hhh.avif'
import Cars from '../components/Cars'
import Img from '../components/img'

const Home = () => {


        useEffect(() => {
        AOS.init(); // Initialize AOS
    }, []);

  return (
      <div className=''>
          <div>
              <Navbar/>
          </div>
      {/* <div className='flex justify-evenly items-center px-4 lg:px-14 h-36 lg:mx-28   mt-32 '>
        <div>
          <h1 className='animate__animated  animate__heartBeat animate__infinite lg:text-6xl md:text-4xl text-2xl font-bold text-yellow-500'>FLAT <span>$500</span> OFF</h1>
        </div>
        <div>
         <h4 className='animate__animated animate__swing animate__infinite lg:text-4xl md:text-4xl text-xl text-yellow-500'> On Your 1st Purchase </h4>
        </div>
      </div>
      <div className='lg:mx-24 lg:mt-8 '>
        <img className=' w-full' src={aboutImg} alt="" />
      </div> */}
      
    
        {/* <div className='w-full lg:h-screen h-[750px] bg-[#1a0505] flex justify-center items-center  '>
            <div className='fles1-hide'>
      <div className='flex flex-row'>
          <img src={Slae} alt="" />

          <img src={Slbe} alt="" />
          
          <img src={Slce} alt="" />
          <img src={Slde} alt="" />
          
          
      </div>
      <div className='flex flex-row'>
              <img src={Slee} alt="" />
              <img src={Slfe} alt="" />
              <img src={Slge} alt="" />
              <img src={Slhe} alt="" />
                </div>
            </div>

            <div className=' flex-col items-center justify-center fles2-block'>
                <div>
                    <img src="https://images-static.nykaa.com/uploads/02a2656f-338a-4ce9-bee8-8b4075964bd9.gif?tr=w-600,cm-pad_resize" alt="" />
                </div>
                <div className="scroll-container overflow-auto flex " style={{whiteSpace:'nowrap'}}>
  <img src={Slce} alt="Cinque Terre" width="200" height="200"/>
  <img src=  {Slde}  alt="Forest" width="200" height="200"/>
  <img src= {Slge} alt="Northern Lights" width="200" height="200"/>
                    <img src={Slhe} alt="Mountains" width="200" height="200" />
                     <img src={Slce} alt="Cinque Terre" width="200" height="200"/>
  <img src=  {Slde}  alt="Forest" width="200" height="200"/>
  <img src= {Slge} alt="Northern Lights" width="200" height="200"/>
  <img src= {Slce} alt="Mountains" width="200" height="200"/>
  <img src={Slde} alt="Cinque Terre" width="200" height="200"/>
  <img src=  {Slhe}  alt="Forest" width="200" height="200"/>
  <img src= {Slge} alt="Northern Lights" width="200" height="200"/>
                    <img src={Slce} alt="Mountains" width="200" height="200" />
                     <img src={Slde} alt="Cinque Terre" width="200" height="200"/>
  <img src=  {Slhe}  alt="Forest" width="200" height="200"/>
  <img src= {Slge} alt="Northern Lights" width="200" height="200"/>
  <img src= {Slce} alt="Mountains" width="200" height="200"/>
</div>
            </div>
            
      </div> */}

      <div className='mt-20'>
        <Cars/>
            </div>


          <div className='mt-6'>
        <Img/>
      </div>


 



      {/* <div className='flip-right flex items-center justify-center mt-4 lg:mt-0 md:mt-0   ' >
        <img className= 'animate__animated animate__shakeX animate__infinite w-48   ' src={omge} alt="" />
        <img className='imgk animate__animated animate__shakeX animate__infinite  w-48   ' src={omge} alt=""   />
        <img className='imgk w-48 animate__animated animate__shakeX animate__infinite ' src={omge} alt=""   />
        <img className='imgk w-48 animate__animated animate__shakeX animate__infinite' src={omge} alt=""  />
      
       <div data-aos="flip-right"></div>


      </div> */}
       <div className='mt-10'>
        <h4 className='md:ml-10 lg:ml-20 md:text-3xl text-2xl pt-10 text-center md:text-left'>Buy Kids' Collection Online <span className='text-zinc-400 text-[18px]'>80,726 items</span></h4>
       
      </div>
      <div className='flex flex-row justify-evenly flex-wrap mt-4'>
          <div className=''> <Card
      className="max-w-sm hover:scale-95 transition-all duration-300 "
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImg}
    >
           <div className='bg-yellow-50 p-2 rounded-lg '>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
         Sack dress
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
            </h5>
            <div className='flex items-center justify-center'>
            <button className='custom-btn btn-7   text-xl  transition-all
                         duration-300 rounded  mt-2  font-bold'>Click Me</button></div>
              </div>
        </Card>
          </div> 
       <div className='lg:mt-0 md:mt-0 mt-2'>
         <Card
      className="max-w-sm hover:scale-95 transition-all duration-300"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImge}
    >
           <div className='bg-yellow-50 p-2 rounded-lg '>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
         Sheath dress
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
                <div className='flex items-center justify-center'>
            <button className='custom-btn btn-7   text-xl  transition-all
                         duration-300 rounded  mt-2  font-bold'>Click Me</button></div>
              
              </div>
          </Card>
        </div> 
        <div  className='lg:mt-0 md:mt-0 mt-2'>
           <Card
      className="max-w-sm hover:scale-95 transition-all duration-300"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImgf}
          >
            <div className='bg-yellow-50 p-2 rounded-lg '>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Trumpet dress
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
                <div className='flex items-center justify-center'>
          <button className='custom-btn btn-7   text-xl  transition-all
                         duration-300 rounded  mt-2  font-bold'>Click Me</button></div>
              </div>
      
          </Card>
        </div>
        <div  className='lg:mt-0 md:mt-0 mt-2'>
           <Card
      className="max-w-sm hover:scale-95 transition-all duration-300"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImgg}
    >
          <div className='bg-yellow-50 p-2 rounded-lg '>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Culotte dress
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
                <div className='flex items-center justify-center'>
           <button className='custom-btn btn-7   text-xl  transition-all
                         duration-300 rounded  mt-2  font-bold'>Click Me</button></div>
              </div>
          </Card>
          </div>
       
       
      </div>
       <div className='flex flex-row justify-evenly flex-wrap mt-4'>
          <div> <Card
      className="max-w-sm hover:scale-95 transition-all duration-300"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImgh}
    >
           <div className='bg-yellow-50 p-2 rounded-lg '>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
         Babydoll dress
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
            </h5>
              <div className='flex items-center justify-center'>
           <button className='custom-btn btn-7   text-xl  transition-all
                         duration-300 rounded  mt-2  font-bold'>Click Me</button></div>
              </div>
        </Card>
          </div> 
       <div className='lg:mt-0 md:mt-0 mt-2'>
         <Card
      className="max-w-sm hover:scale-95 transition-all duration-300"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImgi}
    >
           <div className='bg-yellow-50 p-2 rounded-lg '>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Polo dress
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
                <div className='flex items-center justify-center'>
          <button className='custom-btn btn-7   text-xl  transition-all
                         duration-300 rounded  mt-2  font-bold'>Click Me</button></div>
              </div>
          </Card>
        </div> 
        <div  className='lg:mt-0 md:mt-0 mt-2'>
           <Card
      className="max-w-sm hover:scale-95 transition-all duration-300"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImgj}
          >
            <div className='bg-yellow-50 p-2 rounded-lg '>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
         Balloon Dress
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
                <div className='flex items-center justify-center'>
          <button className='custom-btn btn-7   text-xl  transition-all
                         duration-300 rounded  mt-2  font-bold'>Click Me</button></div>
              </div>
      
          </Card>
        </div>
        <div  className='lg:mt-0 md:mt-0 mt-2'>
           <Card
      className="max-w-sm hover:scale-95 transition-all duration-300"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImgk}
    >
          <div className='bg-yellow-50 p-2 rounded-lg '>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        A-line Dress
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
                <div className='flex items-center justify-center'>
           <button className='custom-btn btn-7   text-xl  transition-all
                         duration-300 rounded  mt-2  font-bold'>Click Me</button></div>
              </div>
          </Card>
          </div>
       
       
      </div>
       <div className='flex flex-row justify-evenly flex-wrap mt-4'>
          <div> <Card
      className="max-w-sm hover:scale-95 transition-all duration-300" 
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImgl}
    >
           <div className='bg-yellow-50 p-2 rounded-lg '>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
         Denim Dress
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
            </h5>
              <div className='flex items-center justify-center'>
         <button className='custom-btn btn-7   text-xl  transition-all
                         duration-300 rounded  mt-2  font-bold'>Click Me</button></div>
              </div>
        </Card>
          </div> 
       <div className='lg:mt-0 md:mt-0 mt-2'>
         <Card
      className="max-w-sm hover:scale-95 transition-all duration-300"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImgm}
    >
           <div className='bg-yellow-50 p-2 rounded-lg '>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Camisole Dress
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
                <div className='flex items-center justify-center'>
          <button className='custom-btn btn-7   text-xl  transition-all
                         duration-300 rounded  mt-2  font-bold'>Click Me</button></div>
              </div>
          </Card>
        </div> 
        <div  className='lg:mt-0 md:mt-0 mt-2'>
           <Card
      className="max-w-sm hover:scale-95 transition-all duration-300"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImgn}
          >
            <div className='bg-yellow-50 p-2 rounded-lg '>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Corset Dress
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
                <div className='flex items-center justify-center'>
            <button className='custom-btn btn-7   text-xl  transition-all
                         duration-300 rounded  mt-2  font-bold'>Click Me</button></div>
              </div>
      
          </Card>
        </div>
        <div  className='lg:mt-0 md:mt-0 mt-2'>
           <Card
      className="max-w-sm hover:scale-95 transition-all duration-300"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImgo}
    >
          <div className='bg-yellow-50 p-2 rounded-lg '>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
         Dirndl Dress
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
                <div className='flex items-center justify-center'>
           <button className='custom-btn btn-7   text-xl  transition-all
                         duration-300 rounded  mt-2  font-bold'>Click Me</button></div>
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