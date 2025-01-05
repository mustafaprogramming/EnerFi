import Image from 'next/image'
//components
import Button from './components/ui/Button'
import Hero from './components/ui/Hero'
import AboutUs from './components/ui/AboutUs'
import CardSection from './components/ui/CardSection'
import { CircleCards } from './components/ui/Card'
import FAQ from './components/ui/FAQ'
import Work from './components/ui/Work'

const cardsArray = [
  {
    id: '73787',
    img: '/cardImg1.png',
    title: 'PPA - Power Purchase Agreements',
    text: "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
  },
  {
    id: '72467',
    img: '/cardImg2.png',
    title: 'Direct energy sales to the grid',
    text: "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
  },
  {
    id: '35095',
    img: '/cardImg3.png',
    title: 'crypto mining with generated energy supply',
    text: "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
  },
]
const circleCardArray = [
  {
    id: '28729',
    text: '',
    title: '',
    size: 11,
    position: { x: 30, y: 50 },
  },
  {
    id: '28730',
    text: '',
    title: '',
    size: 8,
    position: { x: 83, y: 39 },
  },
  {
    id: '28717',
    text: 'Earl access to proiects for token stakers.',
    title: 'Access to Premium Projects',
    size: 10,
    position: { x: 67, y: 63 },
  },
  {
    id: '28718',
    text: 'Revenue-Backed Buybacks of proiects for token stakers.',
    title: 'Revenue-Backed Buybacks',
    size: 9,
    position: { x: 19, y: 65 },
  },
  {
    id: '28719',
    text: 'Referral Rewards Program for token stakers.',
    title: 'Referral Rewards Program',
    size: 8,
    position: { x: 99, y: 59 },
  },
  {
    id: '28720',
    text: 'Real Yeild of proiects for token stakers.',
    title: 'Real Yeild',
    size: 7,
    position: { x: 2, y: 59 },
  },
]
export default function Home() {
  return (
    <main>
      <Hero />
      <section className='grid grid-cols-1 sm:grid-cols-2 w-full px-5 md:px-10 items-center gap-10 lg:gap-20'>
        {/* Left Section: Image and Decorative Element */}
        <aside className='relative mx-auto w-[90%] xs:max-w-[350px] sm:max-w-full h-fit -rotate-[3deg] border border-[#0ae1068b] bg-[#030a12] rounded-lg shadow-[1px_12px_20px_#0ae1063c] pr-6'>
          <Image
            src='/heroImg3.png'
            alt='Hero Image'
            width={634}
            height={482}
            quality={100}
            className='rounded-lg bg-cover bg-center w-full h-full select-none '
          />
          {/* Decorative Glow Element */}
          <div
            className='absolute w-[80%] h-[30px] left-[20%] rounded-full bg-[#0ae106] opacity-5'
            style={{
              boxShadow: '4px 4px 10px #0ae106',
              transform: 'translateY(-50%) rotate(3deg)',
            }}
          ></div>
        </aside>

        {/* Right Section: Text Content and Button */}
        <div className='relative flex flex-col items-center sm:items-start gap-4 lg:gap-8 pb-10 z-[1] mt-8 sm:mt-16'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold max-w-[300px] md:max-w-fit text-nowrap'>
            What is <span className='text-[#0AE106]'>EnerFi?</span>
          </h1>
          <p className='text-sm sm:text-base lg:text-xl font-light text-center sm:text-left text-[#979F90] leading-5'>
            We leverage Web3 technology to tokenize solar farms, wind turbines,
            and hydroelectric plants, allowing you to be a fractional owner of
            energy-producing assets. EnerFi bridges sustainability and
            profitability, offering accessible investment opportunities while
            funding renewable energy infrastructure.
          </p>
          <Button fill className='flex gap-3'>
            Join Presale
          </Button>
        </div>
      </section>
      <AboutUs />
      <Work />
      <CardSection array={cardsArray} />
      <section className='relative flex items-center justify-center mx-auto my-10 scale-95 h-[80vw] w-[80vw] max-h-[950px] max-w-[950px] '>
        {/* Logo Image */}
        <Image
          src='/bigLogo.png'
          alt='Logo'
          width={150}
          height={150}
          className='relative z-[3] w-[23%] h-[23%] bg-cover bg-center select-none'
        />

        {/* First Circle Layer */}
        <div className='absolute z-[2] w-[43%] h-[43%] rounded-full circle'></div>

        {/* Second Circle Layer */}
        <div className='absolute z-[1] w-[70%] h-[70%] rounded-full circle-2'></div>

        {/* Third Circle Layer */}
        <div className='absolute z-[0] w-full h-full rounded-full circle-2'></div>

        {/* Circle Cards */}
        {circleCardArray.map((item) => (
          <CircleCards key={item.id} item={item} />
        ))}
      </section>
      <FAQ />
    </main>
  )
}
