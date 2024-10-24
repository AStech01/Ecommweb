import React from 'react'
import { Carousel } from "flowbite-react";
import onea from '../pics/abcd.webp'
import oneb from '../pics/abcde.webp'
import onec from '../pics/abcdf.webp'
import oned from '../pics/abcdg.webp'
import onee from '../pics/abcdh.webp'


const Cars = () => {
  return (
      <div>
          <div className="h-40 md:h-[350px] xl:h-[600px] 2xl:h-[720px]">
           <Carousel>
        <img src={onea} alt="..." />
        <img src={oneb} alt="..." />
        <img src={onec} alt="..." />
        <img src={oned} alt="..." />
        <img src={onee}  alt="..." />
              </Carousel>
              </div>
          </div>
          
  )
}

export default Cars