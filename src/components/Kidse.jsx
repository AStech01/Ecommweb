import React from 'react'

import Slaea from '../pics/iii.avif'
import Slbea from '../pics/ooo.avif'
import Slcea from '../pics/jjj.avif'
import Sldea from '../pics/kkk.avif'
import Sleea from '../pics/lll.avif'
import Slfea from '../pics/ppp.avif'
import Slgea from '../pics/mmm.avif'
import Slhea from '../pics/nnn.avif'


const Kidse = () => {
  return (
   
       <div className='w-full lg:h-screen h-[650px] lg:bg-[#e6f080] bg-blue-900 flex justify-center items-center  '>
            <div className='fles1-hide'>
      <div className='flex flex-row'>
          <img src={Slaea} alt="" />

          <img src={Slbea} alt="" />
          
          <img src={Slcea} alt="" />
          <img src={Sldea} alt="" />
          
          
      </div>
      <div className='flex flex-row'>
              <img src={Sleea} alt="" />
              <img src={Slfea} alt="" />
              <img src={Slgea} alt="" />
              <img src={Slhea} alt="" />
                </div>
            </div>

            <div className=' flex-col items-center justify-center fles2-block bg-blue-950'>
                <div>
                    <img src="https://images-static.nykaa.com/uploads/b66428c8-0b8e-4100-942c-a9b1e1893a8a.gif?tr=w-600,cm-pad_resize" alt="" />
                </div>
                <div className="scroll-container overflow-auto flex " style={{whiteSpace:'nowrap'}}>
  <img className='' src={Slcea} alt="Cinque Terre" width="200" height="200 "/>
  <img src=  {Sldea}  alt="Forest" width="200" height="200"/>
  <img src= {Slgea} alt="Northern Lights" width="200" height="200"/>
                    <img src={Slhea} alt="Mountains" width="200" height="200" />
                     <img src={Slcea} alt="Cinque Terre" width="200" height="200"/>
  <img src=  {Sldea}  alt="Forest" width="200" height="200"/>
  <img src= {Slgea} alt="Northern Lights" width="200" height="200"/>
  <img src= {Slcea} alt="Mountains" width="200" height="200"/>
  <img src={Sldea} alt="Cinque Terre" width="200" height="200"/>
  <img src=  {Slhea}  alt="Forest" width="200" height="200"/>
  <img src= {Slgea} alt="Northern Lights" width="200" height="200"/>
                    <img src={Slcea} alt="Mountains" width="200" height="200" />
                     <img src={Sldea} alt="Cinque Terre" width="200" height="200"/>
  <img src=  {Slhea}  alt="Forest" width="200" height="200"/>
  <img src= {Slgea} alt="Northern Lights" width="200" height="200"/>
  <img src= {Slcea} alt="Mountains" width="200" height="200"/>
</div>
            </div>
            
      </div>
  )
}

 
      

export default Kidse