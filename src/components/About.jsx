import {Carousel} from 'flowbite-react'
import React from 'react';
import Illustration21 from '../photos/illuu.png'
import Illustration1 from '../photos/download.png'
import Illustration2 from '../photos/illu3.png'
import Navbar from '../components/Navbar'





const About = () => {
 
  return (
      <>
          <Navbar/>
        <div className='bg-neutralSilver' id="home">
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto h-screen'>
        <Carousel className='w-full mx-auto'>
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
              <div>
                <img src={Illustration21} alt="" />
              </div>
              {/* hero text */}
              <div className='md:w-1/2'>
                <h1 className='text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug'>
                  Lessons and insights <br /><span className='text-brandPrimary leading-snug'>
                    from 8 years</span></h1>
                <p className='text-neutralGray text-base mb-8 '>
                  Where to grow your business as a photographer: site or social media?</p>
                <button className='btn-primary'>
                  Register</button>
              </div>
            </div>
             <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
              <div>
                <img src={Illustration1} alt="" />
              </div> 
              {/* hero text */}
              <div className='md:w-1/2'>
                <h1 className='text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug'>
                  Lessons and insights <br />
                  <span className='text-brandPrimary leading-snug'>from 8 years</span></h1>
                <p className='text-neutralGray text-base mb-8 '>
                  Where to grow your business as a photographer: site or social media?</p>
                <button className='btn-primary'>
                  Register</button>
              </div>
            </div>
             <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
              <div>
                <img src={Illustration2} alt="" />
              </div>
              {/* hero text */}
              <div className='md:w-1/2'>
                <h1 className='text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug'>
                  Lessons and insights <br />
                  <span className='text-brandPrimary leading-snug'>
                    from 8 years</span></h1>
                <p className='text-neutralGray text-base mb-8 '>
                  Where to grow your business as a photographer: site or social media?</p>
                <button className='btn-primary'>
                  Register</button>
              </div>
        </div>
      </Carousel>

           </div>

          </div>
          </>
        
    );

};

export default About