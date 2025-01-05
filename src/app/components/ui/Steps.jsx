'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

//components
import Title from './Title'
//data
import { workPoints } from '@/app/data'

export default function Work() {
  const [activeSection, setActiveSection] = useState('')
  const [progress, setProgress] = useState(0)
  const [height, setHeight] = useState(0)

  const handleScroll = () => {
    const section = document.getElementById('scroll-section')
    if (section) {
      const { top, height } = section.getBoundingClientRect()
      const totalHeight = height * 2 + window.innerHeight

      // Calculate progress as a percentage
      const scrolled = Math.min(
        Math.max((window.scrollY - top - height) / totalHeight, 0),
        1
      )
      setProgress(scrolled * 100)
    }
  }
  const calculateHeight = () => {
    const calculatedHeight = Math.ceil(
      document.getElementById('mainHeader')?.clientHeight + 20
    )
    setHeight(calculatedHeight)
  }
  useEffect(() => {
    // Calculate header height initially
    calculateHeight()
    const timeout = setTimeout(() => {
      // Map section IDs to DOM elements
      const pointElements = workPoints.map((item) =>
        document.getElementById(item.id)
      )

      // Intersection Observer setup
      const observer = new IntersectionObserver(
        (entries) => {
          // Find the first visible section
          const visibleSection = entries.find((entry) => entry.isIntersecting)
          if (visibleSection) {
            setActiveSection(visibleSection.target.id)
          }
        },
        {
          threshold: 0.5, // Adjust threshold to 50% visibility for more sensitivity
          rootMargin: '0px 0px -50% 0px', // Optional: Offset the bottom for better overlap handling
        }
      )
      // Observe each section
      pointElements.forEach((section) => {
        if (section) observer.observe(section)
      })
      return () => observer.disconnect()
    }, 100)


    // Cleanup on component unmount
    window.addEventListener('resize', calculateHeight)
    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll)
    return () => {
      clearTimeout(timeout)
      window.removeEventListener('resize', calculateHeight)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [workPoints])

  return (
    <section>
      <Title br={false} heading={['How Does', ' EnerFi Work?']} />
      <div
        id='scroll-section'
        className={`grid grid-cols-[1%_50%,49%]
      bg-[url('/Frame1.png')] bg-cover bg-no-repeat bg-center lg:my-20 md:my-14 my-10 relative  mx-4 lg:mx-10 `}
      >
        <div className='bg-[#1F2B15] max-w-[4px]  h-[100%] translate-y-[10%] '>
          <span
            className=' bg-[#0ae106] block'
            style={{ height: `${progress}%` }}
          ></span>
        </div>
        {/* Right Section: Image and Decorative Element */}
        <div className=' mx-2 sm:mx-4 md:mx-6 lg:mx-8 flex flex-col lg:gap-10 sm:gap-6 gap-4 mt-4 lg:mt-8'>
          {workPoints.map((working) => {
            return (
              <div
                key={working.id}
                id={working.id}
                className={`lg:pr-10 md:pr-6 sm:pr-3 flex flex-col sm:gap-3 gap-1 ${
                  activeSection === working.id ? 'opacity-100' : 'opacity-50'
                }`}
              >
                <h4 className='text-sm xs:text-[18px] sm:text-[24px] leading-6 md:text-3xl lg:text-4xl xl:text-5xl capitalize text-[#0AE106] font-bold '>
                  {working.title}
                </h4>
                <ul className='list-disc sm:pl-4 pl-5'>
                  <li className='text-[10px] xs:text-sm sm:text-base lg:text-lg'>
                    {working.point}
                  </li>
                </ul>
              </div>
            )
          })}
        </div>
        <aside
          className=' sticky mx-auto w-[90%] xs:max-w-[350px] sm:max-w-full h-fit border border-[#0ae1068b] bg-[#030a12] rounded-lg shadow-[1px_12px_20px_#0ae1063c] pr-6'
          style={{ top: height + 'px' }}
        >
          <Image
            src='/heroImg3.png'
            alt='Hero Image'
            width={634}
            height={482}
            quality={100}
            className='rounded-lg bg-cover bg-center w-full h-full select-none'
          />
        </aside>
      </div>
    </section>
  )
}
