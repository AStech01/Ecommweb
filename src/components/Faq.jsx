import React from 'react'
import AsImge from '../photos/pic6.avif'
import AsImgf from '../photos/pic7.avif'
import AsImgg from '../photos/pic8.avif'


const Faq = () => {
  return (
      <div>
           
          <div className='flex flex-row justify-evenly flex-wrap mt-4'>
          <div className=''> <Card
      className="max-w-sm hover:scale-95 transition-all duration-300 "
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImg}
    >
           <div className='bg-yellow-200 p-2 rounded-lg '>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
         Sack dress
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
            </h5>
            <div className='flex items-center justify-center'>
            <button className='custom-btn btn-7   text-xl  transition-all
                         duration-300 rounded  mt-2  font-bold'>Click Me</button></div>
              </div>
        </Card>
          </div> 
       <div className='lg:mt-0 md:mt-0 mt-2'>
         <Card
      className="max-w-sm hover:scale-95 transition-all duration-300"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImge}
    >
           <div className='bg-yellow-200 p-2 rounded-lg '>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
         Sheath dress
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
                <div className='flex items-center justify-center'>
            <button className='custom-btn btn-7   text-xl  transition-all
                         duration-300 rounded  mt-2  font-bold'>Click Me</button></div>
              
              </div>
          </Card>
        </div> 
        <div  className='lg:mt-0 md:mt-0 mt-2'>
           <Card
      className="max-w-sm hover:scale-95 transition-all duration-300"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImgf}
          >
            <div className='bg-yellow-200 p-2 rounded-lg '>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Trumpet dress
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
                <div className='flex items-center justify-center'>
          <button className='custom-btn btn-7   text-xl  transition-all
                         duration-300 rounded  mt-2  font-bold'>Click Me</button></div>
              </div>
      
          </Card>
        </div>
        <div  className='lg:mt-0 md:mt-0 mt-2'>
           <Card
      className="max-w-sm hover:scale-95 transition-all duration-300"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={AsImgg}
    >
          <div className='bg-yellow-200 p-2 rounded-lg '>
      <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Culotte dress
              </h5>
              <h1 className='text-5xl text-center font-bold '>30-60 OFF</h1>
              <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        Shop now
              </h5>
                <div className='flex items-center justify-center'>
           <button className='custom-btn btn-7   text-xl  transition-all
                         duration-300 rounded  mt-2  font-bold'>Click Me</button></div>
              </div>
          </Card>
          </div>
       
       
      </div>


    </div>
  )
}

export default Faq