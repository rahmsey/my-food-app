import Image from 'next/image'
import React from 'react'
import { FaApple, FaGooglePay, FaLocationArrow } from 'react-icons/fa'
import { FaGooglePlay } from 'react-icons/fa6'
import { GrMapLocation } from 'react-icons/gr'

const Hero = () => {
  return (
    <div className='relative w-full h-screen flex justify-center flex-col'>
        
        <div className='w-[90%] md:w-[80%] mx-auto grid items-center grid-cols-1 xl:grid-cols-2 gap-10'>
        
        <div data-aos="fade-up">
            {/* Heading */}
            <h1 className='text-3xl md:text-4xl lg:text-5xl mt-6 mb-6 font-extrabold leading [2.5rem] md:leading-[4rem]'>
                Your Favoutite Food, <span className='text-pink-600'> delivered</span> your home</h1>
          <p className='text-sm md:text-base font-medium text-gray-800 dark:text-gray-400'>
            Food, drinks, groceries, and more available for delivery and pickup.
          </p>
          {/* address input */}
          <div className='w-full mt-8 mb-8 max-w-md'>
            <div className='flex items-center h-14 overflow-hidden bg-gray-100 shadow-md'>
            <div className='px-4 text-gray-500'>
                  <GrMapLocation className='w-5 h-5 text-black'  />

            </div>
            <input type="text" placeholder="Enter your address" className='flex-1 px-2 text-sm text-black bg-transparent outline-none h-full' />
            <button className='bg-gray-900 cursor-pointer text-white px-4 h-full hover:bg-gray-800 flex items-center justify-center'>
                <FaLocationArrow className='w-4 h-4'/>
            </button>
            </div>
          </div>
           {/* download text */}
           <p className='text-gray-700 dark:text-gray-400 text-sm mb-6'>
            Apps Available to download on
           </p>
           {/* App scroll button */}
           <div className='flex space-x-4'>
            <a href="#_" className='flex items-center group border border-gray-400 px-4 py-3 rounded-md hover:bg-gray-950 transition-all duration-300'>
                <FaApple className="text-2zl mr-2 group-hover:text-white transition-all duration-300" />
                <div>
                    <p className='text-xs group-hover:text-white transition-all duration-300'>Download on the </p>
                    <p className='text-sm font-semibold group-hover:text-white transition-all duration-300'>App Store</p>
                </div>
            </a>
             <a href="#_" className='flex items-center group border border-gray-400 px-4 py-3 rounded-md hover:bg-gray-950 transition-all duration-300'>
                <FaGooglePlay className="text-2zl mr-2 group-hover:text-white transition-all duration-300" />
                <div>
                    <p className='text-xs group-hover:text-white transition-all duration-300'>Download on the </p>
                    <p className='text-sm font-semibold group-hover:text-white transition-all duration-300'>Google Play</p>
                </div>
            </a>
           
           </div>
           {/* PlayStore Button */}
            
           
           
        </div>

        <div
         data-aos="fade-left" 
         data-aos-delay="150" 
         className='mx-auto hidden xl:block'
         >
           
            <Image src="/images/hero.png" alt='image' width={500} height={500}/>
        </div>
         </div>
        </div>
  )
}

export default Hero