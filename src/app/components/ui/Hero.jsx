import Image from 'next/image'
import Link from 'next/link'
//components
import Button from './Button'
//icons
import { BsArrowRight } from 'react-icons/bs'

export default function Hero() {
  return (
    <section className="flex xs:px-10 px-5 bg-[url('/Frame1.png')] bg-cover bg-no-repeat bg-center relative lg:overflow-x-visible overflow-x-hidden">
      <div className='flex flex-col lg:gap-5 gap-3 md:pl-[4vw] mt-20 relative z-[1] pb-10 w-full'>
        {/* Header Title */}
        <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-nowrap'>
          Where Blockchain <br />
          Meets <span className='text-[#0AE106]'>Clean Energy</span>
        </h1>

        {/* Subtitle */}
        <p className='text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-nowrap text-[#979F90] font-[300]'>
          Powering the Future Together
        </p>

        {/* Buttons Section */}
        <div className='flex gap-3 mt-5 lg:mt-10'>
          <Button fill>Join Presale</Button>
          <Button white>Whitepaper</Button>
        </div>

        {/* Decorative Dots */}
        <div className='flex gap-2 sm:mt-32 mt-20'>
          <span
            className={`bg-[#0AE106] border border-[#333333] w-16 h-3 rounded-lg`}
          ></span>
          <span
            className={`bg-black/10 border border-[#333333] w-16 h-3 rounded-lg`}
          ></span>
          <span
            className={`bg-black/10 border border-[#333333] w-16 h-3 rounded-lg`}
          ></span>
        </div>

        {/* Link to Testimonials */}
        <Link
          href={''}
          className='border border-[#0AE106] flex w-fit px-3 sm:px-6 py-1 sm:py-2 items-center rounded-lg md:ml-auto mx-auto bg-[#151515] hover:scale-95 scale-90 transition-all duration-500 h-fit mt-6'
        >
          <div className='flex'>
            <Image
              src={'/reviewImg1.png'}
              alt='img'
              width={35}
              height={35}
              quality={100}
              className='rounded-full border border-[#333333] bg-cover bg-no-repeat bg-center min-w-[25px] sm:min-w-[30px] min-h-[25px] sm:min-h-[30px]'
            />
            <Image
              src={'/reviewImg2.png'}
              alt='img'
              width={35}
              height={35}
              quality={100}
              className='rounded-full border border-[#333333] bg-cover bg-no-repeat bg-center min-w-[25px] sm:min-w-[30px] min-h-[25px] sm:min-h-[30px] -translate-x-2'
            />
            <Image
              src={'/reviewImg3.png'}
              alt='img'
              width={35}
              height={35}
              quality={100}
              className='rounded-full border border-[#333333] bg-cover bg-no-repeat bg-center min-w-[25px] sm:min-w-[30px] min-h-[25px] sm:min-h-[30px] -translate-x-4'
            />
          </div>
          <p className='font-[200] text-sm sm:text-base text-nowrap'>
            What Others Say About Us
          </p>
          <BsArrowRight className='ml-2 text-xl' />
        </Link>

        {/* Floating Button */}
        <button className='sm:w-[50px] w-[35px] sm:h-[50px] h-[35px] backdrop-blur-lg rounded-full border flex items-center justify-center absolute bottom-[25%] lg:bottom-[40%] right-[0%] text-xl sm:text-2xl hover:scale-100 scale-95 transition-all duration-500'>
          <BsArrowRight />
        </button>
      </div>

      {/* Background Images */}
      <div className='absolute top-0 left-0 w-full h-full'>
        <div className='absolute left-[75%] top-[20%] xs:top-[30%] z-0 w-[30%] xs:w-[160px] sm:w-[220px] md:w-[240px] lg:w-[300px] centered'>
          <Image
            src={'/heroImg1.png'}
            alt='hero image'
            width={300}
            height={480}
            className='bg-no-repeat bg-center bg-cover w-full h-full select-none'
          />
        </div>
        <div className='absolute left-[88%] top-[30%] xs:top-[40%] z-0 w-[30%] xs:w-[160px] sm:w-[220px] md:w-[240px] lg:w-[300px] centered'>
          <Image
            src={'/heroImg2.png'}
            alt='hero image'
            width={300}
            height={480}
            className='bg-no-repeat bg-center bg-cover w-full h-full select-none'
          />
        </div>
      </div>
    </section>
  )
}

export function HeroSecondary({ heading, text, place }) {
  return (
    <section className="grid grid-cols-1 xs:grid-cols-2 w-full px-10 mb-5 xs:my-10 xs:mb-32 z-[-1] bg-[url('/Frame1.png')] bg-cover bg-no-repeat bg-center relative lg:overflow-x-visible overflow-x-hidden">
      <div className='relative z-[1]'>
        {place && <div className='bg-[#0ae10628] text-[#0AE1068b] px-7 py-1.5 w-fit rounded-lg sm:mb-10 mb-6 mt-2'>
          {place}
        </div>}
        {heading&&<h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold max-w-[300px] md:max-w-fit text-nowrap'>
          {heading[0]||''}<br />
          {heading[1]||''}<span className='text-[#0AE106] '>{heading[2]||''}</span>
        </h1>}
        {text&&<p className='text-sm sm:text-base md:text-lg text-[#979F90] font-[300] mt-2'>
          {text}
        </p>}
      </div>
      <aside className='max-w-[300px] xs:min-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[680px] border border-[#0ae1068b] rounded-lg bg-[#030a12] shadow-[1px_12px_20px_#0ae1063c] xs:pr-3 pr-5 overflow-hidden xs:translate-x-[50px] mt-10 xs:my-5 sm:my-0 mx-auto'>
        <Image
          src={'/heroImg3.png'}
          alt='hero image'
          width={680}
          height={480}
          quality={100}
          className='bg-no-repeat bg-center bg-cover w-full h-full select-none'
        />
      </aside>
    </section>
  );
};
