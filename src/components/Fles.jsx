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
       
        <div className='w-full h-screen bg-[#310914] flex justify-center items-center  '>
            <div className='fles1-hide'>
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

            <div className=' flex-col items-center justify-center fles2-block'>
                <div>
                    <img src="https://images-static.nykaa.com/uploads/c6bf20a3-ddbe-478b-b82c-2495370058ff.gif?tr=w-600,cm-pad_resize" alt="" />
                </div>
                <div className="scroll-container overflow-auto flex " style={{whiteSpace:'nowrap'}}>
  <img src={Slc} alt="Cinque Terre" width="200" height="200"/>
  <img src=  {Sld}  alt="Forest" width="200" height="200"/>
  <img src= {Slg} alt="Northern Lights" width="200" height="200"/>
                    <img src={Slh} alt="Mountains" width="200" height="200" />
                     <img src={Slc} alt="Cinque Terre" width="200" height="200"/>
  <img src=  {Sld}  alt="Forest" width="200" height="200"/>
  <img src= {Slg} alt="Northern Lights" width="200" height="200"/>
  <img src= {Slc} alt="Mountains" width="200" height="200"/>
  <img src={Sld} alt="Cinque Terre" width="200" height="200"/>
  <img src=  {Slh}  alt="Forest" width="200" height="200"/>
  <img src= {Slg} alt="Northern Lights" width="200" height="200"/>
                    <img src={Slc} alt="Mountains" width="200" height="200" />
                     <img src={Sld} alt="Cinque Terre" width="200" height="200"/>
  <img src=  {Slh}  alt="Forest" width="200" height="200"/>
  <img src= {Slg} alt="Northern Lights" width="200" height="200"/>
  <img src= {Slc} alt="Mountains" width="200" height="200"/>
</div>
            </div>
            
      </div>
  )
}

export default Fles