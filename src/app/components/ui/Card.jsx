'use client'
import Image from 'next/image'
//icons
import { useEffect, useRef, useState } from 'react'
import { PiStarOfDavidLight } from 'react-icons/pi'

export default function Card({ card }) {
  const { title, text, img } = card
  return (
    <article className='p-2 lg:p-3 sm:pb-5 flex flex-col gap-1 border border-[#333333] hover:shadow-[2px_2px_10px_#0ae1068b] hover:scale-105 transition-all duration-500 rounded-xl overflow-hidden max-w-[250px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[270px] xl:max-w-[300px]'>
      {/* Image Container */}
      <div className='w-full h-[50%] rounded-xl overflow-hidden'>
        <Image
          src={img}
          alt={title}
          width={200}
          height={200}
          className='w-full h-full bg-cover bg-center select-none'
        />
      </div>

      {/* Content Container */}
      <div className='p-2 flex flex-col gap-2'>
        {/* Title */}
        <h5 className='font-bold text-[14px] xs:text-[16px] sm:text-[18px] md:text-[20px] line-clamp-2 sm:leading-5 lg:leading-7'>
          {title}
        </h5>

        {/* Text */}
        <p className='text-[#979F90] text-[14px] lg:text-[16px] leading-4 line-clamp-4'>
          {text}
        </p>
      </div>
    </article>
  )
}

export function SmallCard({ title, text }) {
  return (
    <article className='border border-[#0ae1068b] shadow-[1px_1px_6px_#0ae1068b] p-5 flex flex-col md:gap-1 lg:gap-2 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-[1px_2px_7px_#0ae1068b] h-[220px] md:h-[250px]'>
      {/* Icon Section */}
      <span className='flex justify-center items-center w-[50px] h-[50px] bg-[#079a057c] rounded-xl sm:ml-3 ml-1 mb-3 text-3xl text-[#0ae106]'>
        <PiStarOfDavidLight />
      </span>

      {/* Title Section */}
      <h5 className='capitalize font-bold text-base sm:text-lg md:text-xl truncate'>
        {title}
      </h5>

      {/* Description Section */}
      <p className='text-[#979F90] text-[14px] sm:text-[16px] lg:text-[18px] md:line-clamp-4 line-clamp-5 leading-4 md:leading-6 font-thin'>
        {text}
      </p>
    </article>
  )
}

export function CircleCards({ item }) {
  const { size, position, title, text } = item
  const { x, y } = position

  // States to control visibility and position of details
  const [showDetails, setShowDetails] = useState(false)
  const [showUp, setShowUp] = useState(false)
  const [showLeft, setShowLeft] = useState(false)

  const cardRef = useRef(null)

  useEffect(() => {
    const divisionY = window.innerHeight / 2
    const divisionX = window.innerWidth / 2
    const cardRect = cardRef.current.getBoundingClientRect()
    const positionY = cardRect.height / 2 + cardRect.y
    const positionX = cardRect.width / 2 + cardRect.x

    // Set position visibility based on screen dimensions
    setShowLeft(divisionX < positionX)
    setShowUp(divisionY < positionY)
  }, [showDetails])

  return (
    <article
      onMouseOver={() => setShowDetails(true)}
      onMouseOut={() => setShowDetails(false)}
      className='z-[3] absolute centered flex flex-col items-center'
      style={{
        width: `${size}%`,
        height: `${size}%`,
        top: `${y}%`,
        left: `${x}%`,
      }}
    >
      {/* Circle with hover effect for showing details */}
      <span
        ref={cardRef}
        className='sm:text-lg md:text-2xl lg:text-3xl rounded-full bg-[#161616] flex justify-center items-center w-full h-full'
      >
        <PiStarOfDavidLight />
      </span>

      {/* Title of the card */}
      <p className='absolute -z-[10] text-center text-[10px] leading-3 xs:text-[14px] xs:leading-4 lg:text-base top-[100%] w-[100px] xs:w-[150px] line-clamp-2 mt-1'>
        {title}
      </p>

      {/* Card details that appear on hover */}
      {(title || text) && (
        <div
          className={`z-[50] ${
            showUp ? '-translate-y-[95%]' : 'translate-y-[35%]'
          } ${showLeft ? '-translate-x-[65%]' : 'translate-x-[65%]'} ${
            showDetails ? 'scale-100' : 'scale-0'
          } absolute flex flex-col rounded-2xl gap-1 xs:gap-2 xs:p-4 px-2 py-3 border w-[150px] xs:w-[200px] sm:w-[250px] lg:w-[300px] transition-all duration-500 ${
            showLeft
              ? showUp
                ? 'origin-bottom-right'
                : 'origin-top-right'
              : showUp
              ? 'origin-bottom-left'
              : 'origin-top-left'
          } overflow-hidden`}
        >
          {/* Background effect */}
          <div className='backdrop-blur-2xl z-[-1] bg-gradient-to-b from-white/10 to-black/10 absolute w-full h-full top-0 left-0'></div>

          {/* Icon */}
          <span className='flex text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
            <PiStarOfDavidLight />
          </span>

          {/* Title and description of the details */}
          <h5 className='capitalize font-bold text-[14px] leading-4 xs:text-[16px] lg:text-lg xl:text-xl line-clamp-2'>
            {title}
          </h5>
          <p className='text-[#979F90] text-[12px] leading-3 xs:text-[14px] xs:leading-4 lg:text-base xl:text-lg'>
            {text}
          </p>
        </div>
      )}
    </article>
  )
}
