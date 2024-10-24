import React from "react";
import { Footer } from "flowbite-react";
import logo from '../photos/images.png'
import {  BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import imgo from '../pics/Icons-App-Store-Google-play-1170x723.png'
import Cars from "../components/Cars";


const MyFooter = () => {
  return (
    <div>
      <div>
          <div className='w-full h-36 bg-gray-900 mt-4'> 
        <div className='flex w-full   justify-evenly items-center  ' >
          <div>
          <h4 className='uppercase text-white mt-4 md:text-[20px] text-[12px]'>Download our App</h4>
          <img className='md:w-32 w-20 mt-3 md:ml-5' src={imgo} alt="" />
            </div>
          <div className='text-white md:mt-4 -mt-2 text-[9px] md:text-[20px] '>
            <h2 className='md:text-[15px] sm:text-[12px] '>FOR ANY HELP, YOU MAY CALL US AT</h2>
            <h6 className='mt-3 md:text-[15px] text-[12px]'>1800-266-3333</h6>
            <p className='md:text-[15px] mt-4 '>(Monday to Saturday: 10 am - 10 pm, Sunday: 10 am - 7 pm)</p>
          </div>
            
        </div>
        </div>
      </div>
      <Footer className="bg " container>
      <div className="w-full ">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="space-y-4 mb-8">
            <a href=""className='text-2xl font-semibold flex items-center space-x-3'><img src={logo} alt="" className='w-10 inline-block items-center' />
                <span className='text-[#263238]' >TECTIC</span></a>
              <div>
                <p className="mb-1">Copyright © 2020 Nexcent ltd.</p>
                <p>All rights reserved</p>
              </div>    
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
           
          </div>
        </div>
      </div>
      </Footer>
      
     
       
      </div>

    
    
    )
}


export default MyFooter