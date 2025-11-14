import Image from 'next/image'
import React from 'react'
import { FaApple,  FaGooglePlay } from 'react-icons/fa'

const MobileApp = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center'>
        
        <Image
          src="/images/app.png"
          alt='app preview'
          width={800}
          height={800}
          className='object-cover'
        />

        <div>
          <h1 className='text-2xl sm:text-4xl font-bold leading-8 sm:leading-12'>
            Connecting our users with iOS & Android apps.
          </h1>

          <p className='mt-6 text-sm sm:text-base text-gray-800 leading-6 sm:leading-8 dark:text-gray-400'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
            ab similique dolorem pariatur iusto rerum. Quasi doloribus repellendus
            quibusdam porro minus suscipit asperiores praesentium accusantium maiores.
          </p>

          <div className='mt-8 flex space-x-4'>
            <a href="#" className='flex w-fit items-center border border-gray-400 px-4 py-3 rounded-md bg-gray-950 transition-all duration-300'>
              <FaApple className='text-2xl mr-2 text-white' />
              <div>
                <p className='text-xs text-white'>Download on the</p>
                <p className='text-sm font-semibold text-white'>App Store</p>
              </div>
            </a>

            <a href="#" className='flex w-fit items-center border border-gray-400 px-4 py-3 rounded-md bg-gray-950 transition-all duration-300'>
              <FaGooglePlay className='text-2xl mr-2 text-white' />
              <div>
                <p className='text-xs text-white'>Download on</p>
                <p className='text-sm font-semibold text-white'>Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileApp
