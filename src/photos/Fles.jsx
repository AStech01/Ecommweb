import React from 'react'
import Sla from '../photos/img1.avif'
import Slb from '../photos/img2.avif'
import Slc from '../photos/img5.avif'
import Sld from '../photos/img7.avif'
import Sle from '../photos/img3.avif'
import Slf from '../photos/img4.avif'
import Slg from '../photos/img6.avif'
import Slh from '../photos/img-8.avif'


const Fles = () => {


    



    return (
       
        <div className='w-full h-screen bg-[#310914] flex justify-center items-center '>
            <div>
      <div className='flex flex-row'>
          <img src={Sla} alt="" />

          <img src={Slb} alt="" />
          
          <img src={Slc} alt="" />
          <img src={Sld} alt="" />
          
          
      </div>
      <div className='flex flex-row'>
              <img src={Sle} alt="" />
              <img src={Slf} alt="" />
              <img src={Slg} alt="" />
              <img src={Slh} alt="" />
                </div>
            </div>
            
      </div>
  )
}

export default Fles