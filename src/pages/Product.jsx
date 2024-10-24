
import React from 'react'
import { Carousel } from 'flowbite-react'

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
import MyFooter from './MyFooter'
import Navbar from '../components/Navbar'
import one from '../pics/Artboard_8_c6c2698f-fd4f-45a8-b84a-aa932cb34945.webp'
import Cars from '../components/Cars'
import Img from '../components/img'



const Product = () => {
  return (
     
          <div>
          <Navbar />
             
      <div className='mt-14'>
        <h4 className='md:ml-10 lg:ml-20 md:text-3xl text-2xl pt-10 text-center md:text-left'>Gadgets & Tech Accessories <span className='text-zinc-400 text-[18px]'>55,726 items</span></h4>
      </div>
       <div className='10'>
        <Cars/>
      </div>
          <div className='mt-6'>
        <Img/>
      </div>
      
      <div className='grid 2xl:grid-cols-4  gap-3 grid-rows md:grid-cols-2 xl:grid-cols-3 my-20 lg:px-16 justify-items-center    '  >
        
        <div className=" lg:w-96 lg:h-96 w-80 h-80 hover:scale-95 transition-all duration-300">
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
     
      <div className="lg:w-96 lg:h-96 w-80 h-80 hover:scale-95 transition-all duration-300 ">
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
                <div className="lg:w-96 lg:h-96 w-80 h-80 hover:scale-95 transition-all duration-300 ">
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
                     <div className="lg:w-96 lg:h-96 w-80 h-80 hover:scale-95 transition-all duration-300">
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
                     <div className="lg:w-96 lg:h-96 w-80 h-80  hover:scale-95 transition-all duration-300">
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
                     <div className="lg:w-96 lg:h-96 w-80 h-80  hover:scale-95 transition-all duration-300">
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
                     <div className="lg:w-96 lg:h-96 w-80 h-80  hover:scale-95 transition-all duration-300">
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
                     <div className="lg:w-96 lg:h-96 w-80 h-80  hover:scale-95 transition-all duration-300">
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
                     <div className="lg:w-96 lg:h-96 w-80 h-80  hover:scale-95 transition-all duration-300">
      <Carousel >
         <div className='flex flex-col relative  '>
              <img className='w-full' src={ea} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={eb} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>
      
                   <div className='flex flex-col relative  '>
              <img className='w-full' src={ec} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={ed} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={eab} alt="..." />
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
               <div className="lg:w-96 lg:h-96 w-80 h-80  hover:scale-95 transition-all duration-300">
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
                    <div className="lg:w-96 lg:h-96 w-80 h-80 hover:scale-95 transition-all duration-300 ">
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
                  <div className="lg:w-96 lg:h-96 w-80 h-80 hover:scale-95 transition-all duration-300 ">
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
              
              
      </div>
       
         <div className='mt-4'>
        <MyFooter />
        </div>
    </div>
          
   
  )
}

export default Product
