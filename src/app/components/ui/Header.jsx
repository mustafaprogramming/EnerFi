'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
//icons
import { FiSearch } from 'react-icons/fi'
//components
import Button from './Button'
import Nav from './Nav'
import SubMenu from './SubMenu'

export default function Header() {
  const [data, setData] = useState([])
  const [location, setLocation] = useState({})
  const [subMenuOpen, setSubMenuOpen] = useState(false)
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const headerRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)

  // Close the submenu
  function closeSubmenu() {
    setSubMenuOpen(false)
  }

  // Open the submenu
  function openSubmenu() {
    setSubMenuOpen(true)
  }

  // Set the data and location for the submenu
  function handleButtonClick(e, data) {
    if (data === undefined || data.length <= 0) return
    const tempBtn = e.currentTarget.getBoundingClientRect()
    const center = Math.floor((tempBtn.left + tempBtn.right) / 2)
    const bottom = Math.floor(tempBtn.bottom)
    setLocation({ center, bottom })
    openSubmenu()
    setData(data)
  }

  // Close submenu if clicked outside
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('submenu')) {
      closeSubmenu()
    }
  }

  // Scroll event listener to adjust header style
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const height = headerRef.current.getBoundingClientRect().height
        if (window.scrollY > height) {
          setScrolled(true)
        } else {
          setScrolled(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mouseover', handleSubmenu)

    // Cleanup event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mouseover', handleSubmenu)
    }
  }, [])

  return (
    <header
      id='mainHeader'
      ref={headerRef}
      className={`h-[10vh] min-h-[60px] w-full max-w-[1440px] ${
        scrolled ? 'fixed bg-[#030A12]' : ''
      } z-30 top-0 flex gap-5 px-[7vw] items-center`}
    >
      <div className='flex gap-1 items-center mr-auto relative z-30'>
        <Image 
          src='/enerfi-logo.png'
          alt='logo'
          width={35}
          height={38}
          className='bg-no-repeat bg-center bg-cover'
        />
        <Link href='/' className='text-3xl sm:text-4xl font-semibold select-none'>
          EnerFi
        </Link>
      </div>

      <div className='flex gap-3 lg:gap-5 items-center'>
        <div
          className={`fixed h-screen w-screen top-0 left-0 backdrop-blur-xl bg-black/50 ${
            sideBarOpen ? 'md:hidden z-20' : 'hidden'
          }`}
        ></div>
        <Nav settingData={handleButtonClick} sideBarOpen={sideBarOpen} />
        <Button small className={'xs:flex hidden'}>
          Join Presale
        </Button>
        <button
          className='md:hidden border border-[#0AE106] rounded-md text-3xl text-[#0AE106] relative z-[21] flex gap-1.5 flex-col p-1.5  sm:p-2 '
          onClick={() => setSideBarOpen(!sideBarOpen)}
        >
          <span
            className={`${
              sideBarOpen ? 'rotate-45 translate-y-[7px]' : ''
            } transition-all duration-500 w-[20px] h-[1px] block bg-[#0AE106]`}
          ></span>
          <span
            className={`${
              sideBarOpen
                ? 'opacity-0'
                : 'opacity-100 transition-all duration-500'
            } w-[20px] h-[1px] block bg-[#0AE106]`}
          ></span>
          <span
            className={`${
              sideBarOpen ? '-rotate-45 -translate-y-[7px]' : ''
            } transition-all duration-500 w-[20px] h-[1px] block bg-[#0AE106]`}
          ></span>
        </button>
      </div>
      <SubMenu
        data={data}
        location={location}
        subMenuOpen={subMenuOpen}
        openSubmenu={openSubmenu}
      />
    </header>
  )
}
export function SearchHeader() {
  return (
    <header
    id='docHeader'
      className={` min-h-[10vh] fixed bg-[#030A12] top-0 border-b-2 w-full max-w-[1440px] z-30 flex sm:flex-row flex-col gap-x-5 gap-y-2 lg:px-[7vw] md:pl-[6vw]  px-5 sm:py-3 py-5 border-[#757575] `}
    >
      <div className='flex w-full sm:w-fit gap-1 items-center mr-auto relative z-30'>
        <Image
          src='/enerfi-logo.png'
          alt='logo'
          width={35}
          height={38}
          className='bg-no-repeat bg-center bg-cover min-w-[35px] select-none '
        />
        <Link
          href='/'
          className='text-2xl sm:text-3xl md:text-4xl font-semibold'
        >
          EnerFi
          <span className='text-base md:text-lg text-[#0ae106] font-thin'>
            Docs
          </span>
        </Link>
        <Button  small className={'font-semibold sm:py-2 py-2 sm:hidden ml-auto'}>
          {' '}
          Join Presale
        </Button>
      </div>
      <form className='flex gap-2 w-full justify-end'>
        <div className='grid grid-cols-[90%_10%] lg:max-w-[500px] md:max-w-[350px] sm:max-w-[300px] w-full border border-[#323232] bg-[#151515] rounded-xl overflow-hidden pr-2'>
          <input
            type='text'
            placeholder='Search'
            className='outline-none px-4 lg:px-6 py-2 bg-transparent font-thin text-sm sm:text-base '
            aria-label='Search Documentations'
          />
          <div className='text-[#0ae106] text-2xl flex items-center justify-end '>
            <FiSearch />
          </div>
        </div>
        <Button  small className={'font-semibold sm:py-2 py-2 sm:flex hidden'}>
          {' '}
          Join Presale
        </Button>
      </form>
    </header>
  )
}
