import React from 'react'
import RestuarantCard from './RestuarantCard'

const Restuarant = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='text-xl sm:text-2xl text-center font-extrabold'>
       Available Restaurant  in Our Area
        </div>
        <div  className='w-[80%] mx-auto grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-14'>
          <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            <RestuarantCard
            image="/images/r1.jpg"
            title="Pizza Hut Drlicious Pizza" />
          </div>
          
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
            <RestuarantCard
            image="/images/r2.jpg"
            title="Suya Pizza" />
          </div>
          
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
            <RestuarantCard
            image="/images/r3.jpg"
            title="Chicken Pizza" />
          </div>
        
          <div>
            <RestuarantCard
            image="/images/r4.jpg"
            title="Garlic pizza" />
          </div>

          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="400">
            <RestuarantCard
            image="/images/r5.jpg"
            title="Pineapple pizza" />
          </div>

          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="500">
            <RestuarantCard
            image="/images/r6.jpg"
            title="Wells dish" />
          </div>
        </div>
        <div className='mt-16 text-center'>
          <button className='px-9 py-2.5 sm:px-12 sm:py-3.5 cursor-pointer rounded-full font-bold text-base sm:text-lg bg-cyan-700 text-white dark:text-black hover:bg-cyan-950
          transition-all duration-300 dark:bg-cyan-300 dark:hover:bg-cyan-200'>
            Discover More &rarr;</button>

        </div>
        </div>
  )
}

export default Restuarant