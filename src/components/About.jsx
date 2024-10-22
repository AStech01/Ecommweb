
import React, { useState } from 'react';
import { Carousel } from "flowbite-react";
import Navbar from '../components/Navbar'

import ia from '../pics/ia.avif'
import ib from '../pics/ib.avif'
import ic from '../pics/ic.avif'
import id from '../pics/id.avif'
import ie from '../pics/ie.avif'
import Login from './Login';
import imgf from '../photos/k1.avif'
import imgg from '../photos/k2.avif'
import imgh from '../photos/k3.avif'
import imgi from '../photos/k4.avif'
import imgj from '../photos/k5.avif'
import imgk from '../photos/i1.avif'
import imgl from '../photos/i2.avif'
import imgm from '../photos/i3.avif'
import imgn from '../photos/i4.avif'
import imgo from '../photos/i5.avif'
import imgp from '../photos/l1.avif'
import imgq from '../photos/l2.avif'
import imgr from '../photos/l3.avif'
import imgs from '../photos/l4.avif'
import imgt from '../photos/l5.avif'
import imgu from '../photos/m1.avif'
import imgv from '../photos/m2.avif'
import imgw from '../photos/m3.avif'
import imgx from '../photos/m4.avif'
import imgy from '../photos/m5.avif'

import imga from '../photos/n1.avif'
import imgb from '../photos/n2.avif'
import imgc from '../photos/n3.avif'
import imgd from '../photos/n4.avif'
import imge from '../photos/n2.avif'

import imgab from '../photos/a1.avif'
import imgac from '../photos/a2.avif'
import imgad from '../photos/a3.avif'
import imgae from '../photos/a4.avif'
import imgaf from '../photos/a5.avif'

import imgag from '../photos/b1.avif'
import imgah from '../photos/b2.avif'
import imgai from '../photos/b3.avif'
import imgaj from '../photos/b4.avif'
import imgak from '../photos/b5.avif'

import imgau from '../photos/d1.avif'
import imgav from '../photos/d2.avif'
import imgaw from '../photos/d3.avif'
import imgax from '../photos/d4.avif'
import imgay from '../photos/d5.avif'

import cod from '../pics/COD.png'
import deli from '../pics/Free_Delivery.png'
import ret from '../pics/Return.avif'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaAngleDown } from 'react-icons/fa6';

import { Label, TextInput } from "flowbite-react";

import { Rating } from "flowbite-react";
import MyFooter from '../pages/MyFooter';
const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
              const [currentImage,setCurrentImage] = useState(0)

  const productImages = [ia, ib, ic, id, ie] 
  
 
 
  return (
     
    <div>
      <Navbar />


      <div className='p-5 md:mx-[20%] my-20 flex md:flex-row flex-col'>
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
                <div className=' px-4 md:my-20 my-10'>
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
                    className='md:w-full w-72'
        
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

            <div className='flex flex-rows-3 md:w-full w-80 md:gap-4   md:justify-center md:text-[15px] text-[12px]  mt-4 h-48'>
              <div className='md:mx-2 md:w-32 w-20 '>
                <img className='md:w-12 w-10 mx-4 ' src={cod} alt="" />
                <h4 className=''>COD available</h4>
                <button className='md:mt-9 mt-8 text-red-400'>Know More</button>
              </div >
              <div className='mx-4 md:w-32 w-20'> <img className='md:w-12 w-10 mx-4 ' src={deli} alt="" />
                <h4>7-day return & replacement</h4>
                <button className='mt-4 text-red-400'>Know More</button>
              </div>
              <div className='mx-4 md:w-32 w-20' > <img className='md:w-12 w-10 mx-4 ' src={ret} alt="" /><h4>7-day return & replacement</h4>
                  <button className='mt-4 text-red-400'>Know More</button>
              </div>
             </div>

            
              </div> 
          </div >
        
        
      </div>

      <div>
        <div>
          <h3 className='mx-24 bold text-xl'>Similar Products</h3>
            </div>
          <div className=' grid 2xl:grid-cols-4  gap-3 grid-rows md:grid-cols-2 xl:grid-cols-3 my-20 lg:px-16 justify-items-center    '  >
          <div className=" lg:w-96 lg:h-96 w-80 h-80 ">
          <Carousel >
            <div className='flex flex-col relative  '>
              <img className='w-full' src={imgf} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2 '>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgg} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>
      
                   <div className='flex flex-col relative  '>
              <img className='w-full' src={imgh} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgi} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgj} alt="..." />
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
     
      <div className="lg:w-96 lg:h-96 w-80 h-80  ">
      <Carousel >
         <div className='flex flex-col relative  '>
              <img className='w-full' src={imgk} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgl} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>
      
                   <div className='flex flex-col relative  '>
              <img className='w-full' src={imgm} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgn} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgo} alt="..." />
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
         <div className="lg:w-96 lg:h-96 w-80 h-80  ">
      <Carousel >
                 <div className='flex flex-col relative  '>
              <img className='w-full' src={imgp} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgq} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>
      
                   <div className='flex flex-col relative  '>
              <img className='w-full' src={imgr} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgs} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgt} alt="..." />
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
         <div className="lg:w-96 lg:h-96 w-80 h-80   ">
      <Carousel >
               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgu} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgv} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>
      
                   <div className='flex flex-col relative  '>
              <img className='w-full' src={imgw} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgx} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgy} alt="..." />
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

                      <div className=" lg:w-96 lg:h-96 w-80 h-80 ">
          <Carousel >
            <div className='flex flex-col relative  '>
              <img className='w-full' src={imga} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgb} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>
      
                   <div className='flex flex-col relative  '>
              <img className='w-full' src={imgc} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgd} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imge} alt="..." />
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
     
      <div className="lg:w-96 lg:h-96 w-80 h-80  ">
      <Carousel >
         <div className='flex flex-col relative  '>
              <img className='w-full' src={imgag} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgah} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>
      
                   <div className='flex flex-col relative  '>
              <img className='w-full' src={imgai} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgaj} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgak} alt="..." />
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
         <div className="lg:w-96 lg:h-96 w-80 h-80  ">
      <Carousel >
                 <div className='flex flex-col relative  '>
              <img className='w-full' src={imgab} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgac} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>
      
                   <div className='flex flex-col relative  '>
              <img className='w-full' src={imgad} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgae} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgaf} alt="..." />
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
         <div className="lg:w-96 lg:h-96 w-80 h-80   ">
      <Carousel >
               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgau} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgav} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>
      
                   <div className='flex flex-col relative  '>
              <img className='w-full' src={imgaw} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgax} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgay} alt="..." />
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
        
                    <div className=" lg:w-96 lg:h-96 w-80 h-80 ">
          <Carousel >
            <div className='flex flex-col relative  '>
              <img className='w-full' src={imgf} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgg} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>
      
                   <div className='flex flex-col relative  '>
              <img className='w-full' src={imgh} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgi} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgj} alt="..." />
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
     
      <div className="lg:w-96 lg:h-96 w-80 h-80  ">
      <Carousel >
         <div className='flex flex-col relative  '>
              <img className='w-full' src={imgk} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgl} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>
      
                   <div className='flex flex-col relative  '>
              <img className='w-full' src={imgm} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgn} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgo} alt="..." />
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
         <div className="lg:w-96 lg:h-96 w-80 h-80  ">
      <Carousel >
                 <div className='flex flex-col relative  '>
              <img className='w-full' src={imgp} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgq} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>
      
                   <div className='flex flex-col relative  '>
              <img className='w-full' src={imgr} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgs} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgt} alt="..." />
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
         <div className="lg:w-96 lg:h-96 w-80 h-80   ">
      <Carousel >
               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgu} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgv} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>
      
                   <div className='flex flex-col relative  '>
              <img className='w-full' src={imgw} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgx} alt="..." />
              <div className='bg-transparent  mt-20 absolute left-[10%]
              bottom-[15%] w-[80%] items-center '>
                <h6 className='text-3xl text-black '>Rompers</h6>
                <p>Foil Printed Sleeveless Kurta and Sharara  </p>
                <p className='text-xl font-bold'>₹1,480 <span className='text-green-600'>63% Off</span></p>
                <button className='custom-btn btn-8 my-2'>Click Me</button>
              </div>
            </div>

               <div className='flex flex-col relative  '>
              <img className='w-full' src={imgy} alt="..." />
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
            <div className="lg:w-96 lg:h-96 w-80 h-80   ">
     
        </div>
        <div className="lg:w-96 lg:h-96 w-80 h-80  ">
 
      </div>
       
        </div>
        
           <div className='mt-4'>
        <MyFooter />
        </div>
                
         </div>
      
       

       
        
    
        
      
      </div>
   
           
 

        
        
    );

};

export default About