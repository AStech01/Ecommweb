import React, { useEffect, useState } from 'react'
import logo from '../photos/images.png'
import { Link } from 'react-scroll'
import { FaBars, FaXmark } from "react-icons/fa6";



function Navbar () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
       
    //set toogle
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

   


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll',handleScroll);
        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    });
    //nav items array

    const navItems = [
        { link: "Home", path: "/" },
        { link: "Service", path: "service" },
        { link: "About", path: "/about" },
        { link: "Product", path: "product" },
        { link: "Testimonial", path: "testimonial" },
        { link: "FAQ", path: "faq" },

    ];

    const scollToTop = () => {
         window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
    }
   
    
  return (
      <header className='w-full bg-white md:bg-transparent z-[1000] fixed top-0'>
          <nav className={`py-4 lg:px-14 px-4 bg-yellow-100 ${isSticky ?"sticky top-0 left-0 right-0 border-b bg-white duration-300":""}`}>
              <div className='flex justify-between items-center text-base gap-8 ' >
                  <a href=""className='text-2xl font-semibold flex items-center space-x-3'><img src={logo} alt="" className='w-10 inline-block items-center' />
                      <span className='text-[#263238]' >NEXCENT</span></a>
                             {/* nav items */}
                  <ul className='cont-hidden space-x-12'>
                      {
                          //   navItems.map(({ link, path }) => <link key={path} to={path}>{link}</link>)
                          navItems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} offset={-100} key={path}
                              className='block cursor-pointer text-base text-gray-900 hover:text-brandPrimary first:font-medium' > {link}</Link>)
                      }
                      
                  </ul>
                             {/* buttons large device */}
                  <div className='space-x-12 lg-hidden items-center'> 
                      <a href="" className='lg-hidden items-center text-brandPrimary hover:text-gray900'>
                          Login</a>
                      <button className='bg-brandPrimary text-white py-2 px-2 transition-all
                         duration-300 rounded hover:bg-neutralDGray'>Sign up</button>
                  </div>
                  {/* btn for mobiles */}
                  <div className='md:hidden'>
                      <button 
                          onClick={()=>setIsMenuOpen((prev)=>!prev)}
                        className=' text-neutralDGray focus:outline-none focus:text-gray-500'>
                          {
                              isMenuOpen ? (<FaXmark className='h-6 w-6' />)
                                  : (<FaBars className='h-6 w-6 text-neutralDGray' />)
                          }
                      </button>
                  </div>
                  
              </div>
              {/* nav items for mobiles */}
              <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${ isMenuOpen ?"block fixed top-0 left-0 right-0 " :"hidden"}`}>
                   {
                         
                          navItems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} offset={-100} key={path}
                              className='block text-base text-white hover:text-brandPrimary first:font-medium' > {link}</Link>)
                      }
              </div>
              <div className='relative'>
                  {isSticky && <button className='absolute -bottom-[800px] right-0 p-2 btn-primary' onClick={scollToTop}>top</button>}
              </div>
          </nav>
     </header>
   
  )
}

export default Navbar