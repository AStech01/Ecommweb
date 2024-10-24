import React from 'react'
import Slae from '../pics/aaa.avif'
import Slbe from '../pics/bbb.avif'
import Slce from '../pics/ccc.avif'
import Slde from '../pics/ddd.avif'
import Slee from '../pics/eee.avif'
import Slfe from '../pics/fff.avif'
import Slge from '../pics/ggg.avif'
import Slhe from '../pics/hhh.avif'


const Files = () => {
  return (
   
        <div className='w-full md:h-screen h-[1000px] bg-[#310914] flex justify-center items-center  '>
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
            
      </div>
  )
}

 

export default Files