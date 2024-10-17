import React from 'react'
import ia from '../pics/ia.avif'
import ib from '../pics/ib.avif'
import ic from '../pics/ic.avif'
import id from '../pics/id.avif'
import ie from '../pics/ie.avif'
import { useState } from 'react'

const Faq = () => {
  const [currentImage,setCurrentImage] = useState(0)

  const productImages = [ ia,ib,ic,id,ie ] 
  return (
      <div className='p-5'>
      <div className='flex gap-4 items-center'>
        <div className='flex flex-col gap-4'>
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

    </div>
  )
}

export default Faq