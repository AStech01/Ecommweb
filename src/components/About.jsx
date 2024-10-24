
import React, { useState } from 'react';
import { Carousel } from "flowbite-react";
import Navbar from '../components/Navbar'

import iae from '../pics/ia.avif'
import ibe from '../pics/ib.avif'
import ice from '../pics/ic.avif'
import ide from '../pics/id.avif'
import iee from '../pics/ie.avif'
import Login from './Login';


import { Datepicker } from "flowbite-react";


import cod from '../pics/COD.png'
import deli from '../pics/Free_Delivery.png'
import ret from '../pics/Return.avif'

import {  Drawer } from "flowbite-react";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";


import aa from '../pics/aa.avif'
import ab from '../pics/ab.avif'
import ac from '../pics/ac.avif'
import ad from '../pics/ad.avif'
import ae from '../pics/ae.avif'
import ba from '../pics/ba.avif'
import bb from '../pics/bb.avif'
import bc from '../pics/bc.avif'
import bd from '../pics/bd.avif'
import be from '../pics/be.avif'

import ca from '../pics/ca.avif'
import cb from '../pics/cb.avif'
import cc from '../pics/cc.avif'
import cd from '../pics/cd.avif'
import ce from '../pics/ce.avif'

import da from '../pics/da.avif'
import db from '../pics/db.avif'
import dc from '../pics/dc.avif'
import dd from '../pics/dd.avif'
import de from '../pics/de.avif'

import ea from '../pics/ea.avif'
import eb from '../pics/eb.avif'
import ec from '../pics/ec.avif'
import ed from '../pics/ed.avif'
import eab from '../pics/ea.avif'

import fa from '../pics/fa.avif'
import fb from '../pics/fb.avif'
import fc from '../pics/fc.avif'
import fd from '../pics/fd.avif'
import fe from '../pics/fe.avif'

import ga from '../pics/ga.avif'
import gb from '../pics/gb.avif'
import ggc from '../pics/gc.avif'
import gd from '../pics/gd.avif'
import ge from '../pics/ge.avif'

import ha from '../pics/ha.avif'
import hb from '../pics/hb.avif'
import hc from '../pics/hc.avif'
import hd from '../pics/hd.avif'
import he from '../pics/he.avif'

import ia from '../pics/ia.avif'
import ib from '../pics/ib.avif'
import ic from '../pics/ic.avif'
import id from '../pics/id.avif'
import ie from '../pics/ie.avif'


import { Label, TextInput } from "flowbite-react";

import { Rating } from "flowbite-react";
import MyFooter from '../pages/MyFooter';
const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
              const [currentImage,setCurrentImage] = useState(0)

  const productImages = [iae, ibe, ice, ide, iee] 
  
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
 
  return (
     
    <div>
      <Navbar />


      <div className='p-2 xl:mx-[10%] mt-14 flex lg:flex-row flex-col'>
      <div className='flex gap-4 items-center flex-row'>
        <div className='flex flex-col gap-4 '>
          <img src={productImages[0]} width={100} height={100} alt="" onMouseOver={e=>(setCurrentImage(0))} className='cursor-pointer rounded-md' />
          <img src={productImages[1]} width={100} height={100} alt="" onMouseOver={e=>(setCurrentImage(1))} className='cursor-pointer rounded-md' />
          <img src={productImages[2]} width={100} height={100} alt="" onMouseOver={e=>(setCurrentImage(2))} className='cursor-pointer rounded-md'/>
          <img src={productImages[3]} width={100} height={100} alt="" onMouseOver={e=>(setCurrentImage(3))} className='cursor-pointer rounded-md'/>
          <img src={productImages[4]} width={100} height={100}  alt="" onMouseOver={e=>(setCurrentImage(4))} className='cursor-pointer rounded-md'/>
          </div>
          
        <div>
          <img src={productImages[currentImage]} width={480} height={480} alt="" className=' rounded-md'/>
        </div>
     
           </div>
            <div>
                <div className=' px-4 md:mt-20 mt-10'>
           <h6 className='text-blue-700'> LATEST STYLE <span className='text-black text-xl'>| </span> 
            EXPRESS SHIPPING </h6>
          <h3 className='text-black text-2xl mt-1'>Styli</h3>
          <p className='text-sm text-gray-500 mt-1'>Women Black Textured Sling Bag</p>
          <p className='text-xl font-bold mt-2 '>₹1,480 <span className='text-green-600'>63% Off</span></p>
            <p className='text-gray-500 mt-1'>MRP ₹2,299 Inclusive of all taxes</p>
            <Rating className='mt-3'>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
    </Rating>
          <button className='border-2 mt-2 p-2 ' onClick={()=>setIsMenuOpen(true)}> Add to Wishlist</button >
            <button className='border-2 mt-2 p-2 md:mx-2 ' onClick={() => setIsMenuOpen(true)}> Add to Wishlist</button>
            <hr className='mt-4 solid border-gray-300 ' />
        
         
      
               <div>
                <Login isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
            </div>
            
            <div className='ques  mt-4  '>
              <div className=' '><h3 className='box text-xl'> Select Delivery Location </h3></div>
                <div>
                <p id='panel' className=' mt-2 '>Enter the pincode of your area to check product availability and delivery options
                </p>
                <div className="max-w-md">
      <div className="mb-2 block">
        <Label className=' ' htmlFor="email3" value="" />
      </div>
      <TextInput
        id="email3"
        type="email"
                    placeholder="Enter Pincode"
                    className='md:w-full w-60'
        
                    required
        helperText={
          <>
            We’ll never share your details. Read our
            <a href="#" className="ml-1 font-medium text-cyan-600 hover:underline dark:text-cyan-500">
              Privacy Policy
            </a>
            
            .
          </>
        }
      />
    </div>
              </div>
                
              
              
            </div>   

            <div className='flex flex-rows-3 md:w-full w-80 md:gap-4   lg:justify-center md:text-[15px] text-[12px]  mt-4 h-48'>
              <div className='md:mx-2 md:w-32 w-20 '>
                <img className='md:w-12 w-10 mx-2 ' src={cod} alt="" />
                <h4 className='md:text-sm text-[10px] '>COD available</h4>
                <button onClick={() => setIsOpen(true)} className='md:mt-9 mt-8 text-red-400'>Know More</button>
                <div >
                    <Drawer className='mt-16' open={isOpen} onClose={handleClose}>
        <Drawer.Header title="Drawer" />
        <Drawer.Items className=''>
          <p className="mb-6  text-sm text-gray-500 dark:text-gray-400">
            Supercharge your hiring by taking advantage of our&nbsp;
            <a href="#" className="text-cyan-600 underline hover:no-underline dark:text-cyan-500">
              limited-time sale
            </a>
            &nbsp;for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design
            job board.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <a
              href="#"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Learn more
            </a>
             
                      
                      </div>
                      <div className='mt-4 '>
                        <p className='text-sm text-gray-500'> Lorem ipsum dolor sit, amet consectetur
                          adipisicing elit. Non repellat fugit natus
                          modi placeat, veniam voluptates laborum
                          minima iure consectetur dignissimos
                          aut quasi. Ad eius maxime sit esse corporis! Ab!</p>
                        
                        <div>
                           <Datepicker className='mt-4 text-gray-700' />
                        </div>
                        <div className='mt-4'>
         <Timeline>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>February 2022</Timeline.Time>
          <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
            E-commerce & Marketing pages.
          </Timeline.Body>
          <Button color="gray">
            Learn More
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>March 2022</Timeline.Time>
          <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
          <Timeline.Body>
            All of the pages and components are first designed in Figma and we keep a parity between the two versions
            even as we update the project.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>April 2022</Timeline.Time>
          <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
                        </div>
                      </div>
        </Drawer.Items>
      </Drawer>
                </div>
              </div >
              <div className='mx-4 md:w-32 w-20'>
                <img className='md:w-12 w-10 mx-2 ' src={deli} alt="" />
                <h4 className='md:text-sm text-[10px]'>7-day return & replacement</h4>
                <button onClick={() => setIsOpen(true)} className='mt-4 text-red-400'>Know More</button>
                <div >
                    <Drawer className='mt-16' open={isOpen} onClose={handleClose}>
        <Drawer.Header title="Drawer" />
        <Drawer.Items className=''>
          <p className="mb-6  text-sm text-gray-500 dark:text-gray-400">
            Supercharge your hiring by taking advantage of our&nbsp;
            <a href="#" className="text-cyan-600 underline hover:no-underline dark:text-cyan-500">
              limited-time sale
            </a>
            &nbsp;for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design
            job board.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <a
              href="#"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Learn more
            </a>
             
                      
                      </div>
                      <div className='mt-4 '>
                        <p className='text-sm text-gray-500'> Lorem ipsum dolor sit, amet consectetur
                          adipisicing elit. Non repellat fugit natus
                          modi placeat, veniam voluptates laborum
                          minima iure consectetur dignissimos
                          aut quasi. Ad eius maxime sit esse corporis! Ab!</p>
                        
                        <div>
                           <Datepicker className='mt-4 text-gray-700' />
                        </div>
                        <div className='mt-4'>
         <Timeline>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>February 2022</Timeline.Time>
          <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
            E-commerce & Marketing pages.
          </Timeline.Body>
          <Button color="gray">
            Learn More
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>March 2022</Timeline.Time>
          <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
          <Timeline.Body>
            All of the pages and components are first designed in Figma and we keep a parity between the two versions
            even as we update the project.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>April 2022</Timeline.Time>
          <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
                        </div>
                      </div>
        </Drawer.Items>
      </Drawer>
                </div>
              </div>
              <div className='mx-2 md:w-32 w-20' > <img className='md:w-12 w-10 mx-2 ' src={ret} alt="" /><h4 className='md:text-sm text-[10px]'>7-day return & replacement</h4>
                <button onClick={() => setIsOpen(true)} className='mt-4 text-red-400'>Know More</button>
                <div >
                    <Drawer className='mt-16' open={isOpen} onClose={handleClose}>
        <Drawer.Header title="Drawer" />
        <Drawer.Items className=''>
          <p className="mb-6  text-sm text-gray-500 dark:text-gray-400">
            Supercharge your hiring by taking advantage of our&nbsp;
            <a href="#" className="text-cyan-600 underline hover:no-underline dark:text-cyan-500">
              limited-time sale
            </a>
            &nbsp;for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design
            job board.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <a
              href="#"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Learn more
            </a>
             
                      
                      </div>
                      <div className='mt-4 '>
                        <p className='text-sm text-gray-500'> Lorem ipsum dolor sit, amet consectetur
                          adipisicing elit. Non repellat fugit natus
                          modi placeat, veniam voluptates laborum
                          minima iure consectetur dignissimos
                          aut quasi. Ad eius maxime sit esse corporis! Ab!</p>
                        
                        <div>
                           <Datepicker className='mt-4 text-gray-700' />
                        </div>
                        <div className='mt-4'>
         <Timeline>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>February 2022</Timeline.Time>
          <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
            E-commerce & Marketing pages.
          </Timeline.Body>
          <Button color="gray">
            Learn More
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>March 2022</Timeline.Time>
          <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
          <Timeline.Body>
            All of the pages and components are first designed in Figma and we keep a parity between the two versions
            even as we update the project.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>April 2022</Timeline.Time>
          <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
                        </div>
                      </div>
        </Drawer.Items>
      </Drawer>
                </div>
              </div>
             
            </div>
          </div> 
         
             
              </div >
        
        
        
      </div>
        <div>
      <div className='md:max-w-[1550px] mx-auto  md:mt-10 '>
          <h4 className='md:text-4xl text-2xl bold'> Similar Products <span className='text-zinc-400 text-[18px]'>10,726 items</span></h4>
           
                  <div className='grid 2xl:grid-cols-4  gap-6 grid-rows md:grid-cols-2 xl:grid-cols-3 my-20 lg:px-10 justify-items-center  '  >
          <div className=" lg:w-80 lg:h-80 w-72 h-72 hover:scale-95 transition-all duration-300">
          <Carousel >
            <div className='flex flex-col relative  '>
              <img className='w-full' src={aa} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2 '>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={ab} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>
      
                   <div className='flex flex-col relative  '>
              <img className='w-full' src={ac} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={ad} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={ae} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>
      </Carousel>
      </div>
     
      <div className="lg:w-80 lg:h-80 w-72 h-72 hover:scale-95 transition-all duration-300 ">
      <Carousel >
         <div className='flex flex-col relative  '>
              <img className='w-full' src={be} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={bb} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>
      
                   <div className='flex flex-col relative  '>
              <img className='w-full' src={bc} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={bd} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={ba} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>
      </Carousel>
              </div>
                <div className="lg:w-80 lg:h-80 w-72 h-72 hover:scale-95 transition-all duration-300 ">
      <Carousel >
         <div className='flex flex-col relative  '>
              <img className='w-full' src={ca} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={cb} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>
      
                   <div className='flex flex-col relative  '>
              <img className='w-full' src={cc} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={cd} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={ce} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>
      </Carousel>
              </div>
                     <div className="lg:w-80 lg:h-80 w-72 h-72 hover:scale-95 transition-all duration-300 ">
      <Carousel >
         <div className='flex flex-col relative  '>
              <img className='w-full' src={da} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={db} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>
      
                   <div className='flex flex-col relative  '>
              <img className='w-full' src={dc} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={dd} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={de} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>
      </Carousel>
              </div>
                     <div className="lg:w-80 lg:h-80 w-72 h-72  hover:scale-95 transition-all duration-300">
      <Carousel >
         <div className='flex flex-col relative  '>
              <img className='w-full' src={fa} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={fb} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>
      
                   <div className='flex flex-col relative  '>
              <img className='w-full' src={fc} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={fd} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={fe} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>
      </Carousel>
              </div>
                     <div className="lg:w-80 lg:h-80 w-72 h-72  hover:scale-95 transition-all duration-300">
      <Carousel >
         <div className='flex flex-col relative  '>
              <img className='w-full' src={ga} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={gb} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>
      
                   <div className='flex flex-col relative  '>
              <img className='w-full' src={ggc} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={gd} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={ge} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>
      </Carousel>
              </div>
                     <div className="lg:w-80 lg:h-80 w-72 h-72  hover:scale-95 transition-all duration-300">
      <Carousel >
         <div className='flex flex-col relative  '>
              <img className='w-full' src={ha} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={hb} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>
      
                   <div className='flex flex-col relative  '>
              <img className='w-full' src={hc} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={hd} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={he} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>
      </Carousel>
              </div>
                     <div className="lg:w-80 lg:h-80 w-72 h-72 hover:scale-95 transition-all duration-300">
      <Carousel >
         <div className='flex flex-col relative  '>
              <img className='w-full' src={ia} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={ib} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>
      
                   <div className='flex flex-col relative  '>
              <img className='w-full' src={ic} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={id} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={ie} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>
      </Carousel>
              </div>
               
              
              
              
              
              
      </div>

        </div>
        </div>

       
         
      <div>
         
        
           <div className='mt-4'>
        <MyFooter />
        </div>
                
         </div>
      
       

       
        
    
        
      
      </div>
   
           
 

        
        
    );

};

export default About