import { Carousel } from 'flowbite-react'
import React from 'react'
import Fles from './Fles'

const Carousels = () => {
  return (
    <div className="h-[60vh] lg:h-[80vh] mt-4">
      <Carousel>
        <div>
            <Fles/>
        </div>
        <div>
            <Fles/>
        </div>
        <div>
            <Fles/>
        </div>
        <div>
            <Fles/>
        </div>
        
      </Carousel>
    </div>
  )
}

export default Carousels