
import React, { useState } from 'react';

import Navbar from '../components/Navbar'

import ia from '../pics/ia.avif'
import ib from '../pics/ib.avif'
import ic from '../pics/ic.avif'
import id from '../pics/id.avif'
import ie from '../pics/ie.avif'
import Login from './Login';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaAngleDown } from 'react-icons/fa6';




const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
              const [currentImage,setCurrentImage] = useState(0)

  const productImages = [ ia,ib,ic,id,ie ] 
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
          <button className='border-2 mt-2 p-2 ' onClick={()=>setIsMenuOpen(true)}> Add to Wishlist</button >
          <button className='border-2 mt-2 p-2 mx-2'  onClick={()=>setIsMenuOpen(true)}> Add to Wishlist</button>
        
         
      
               <div>
                <Login isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
                </div>
            <div className='ques'>
                  <h3>
                Lets go for a 
              </h3>
        <FontAwesomeIcon icon={FaAngleDown} />
              
            </div>   
            
              </div> 
          </div >
        
        
      </div>
      
       

       
        
    
        
      
      </div>
   
           
 

        
        
    );

};

export default About