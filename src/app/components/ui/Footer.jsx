import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
//icons
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa'
//components
import Button from './Button'
import Title from './Title'

export default function Footer() {
  return (
    <footer className='circle-border sm:mt-32 mt-24'>
      <div className='flex flex-col items-center'>
        {/* Title Section */}
        <Title heading={['Powering The Future', 'Together']} />

        {/* Presale Button */}
        <Button fill className='my-10'>
          presale
        </Button>
      </div>

      {/* Footer Navigation */}
      <aside className='grid xs:grid-cols-[20%_80%] xs:my-16'>
        {/* Logo and Brand Name */}
        <div className='flex gap-1 items-start mx-auto mb-10 xs:mr-auto relative z-10 px-4'>
          <Image
            src='/enerfi-logo.png'
            alt='logo'
            width={35}
            height={38}
            className='bg-no-repeat bg-center bg-cover select-none'
          />
          <Link href='/' className='text-2xl sm:text-3xl font-semibold'>
            EnerFi
          </Link>
        </div>

        {/* Sitemap, Dashboard, and Info Sections */}
        <div className='text-[#757575] grid grid-cols-3 xs:px-10 px-5 gap-10'>
          {/* Sitemap Links */}
          <ul className='flex flex-col gap-3 '>
            <h5 className='text-white'>SITEMAP</h5>
            <li>
              <Link href='/docs' className='hover:text-[#0ae106]'>
                About
              </Link>
            </li>
            <li>
              <Link href='/docs' className='hover:text-[#0ae106]'>
                Product
              </Link>
            </li>
            <li>
              <Link href='/docs' className='hover:text-[#0ae106]'>
                Pricing
              </Link>
            </li>
            <li>
              <Link href='/docs' className='hover:text-[#0ae106]'>
                Blog
              </Link>
            </li>
            <li>
              <Link href='/docs' className='hover:text-[#0ae106]'>
                Contact
              </Link>
            </li>
          </ul>

          {/* Dashboard Links */}
          <ul className='flex flex-col gap-3'>
            <h5 className='text-white'>DASHBOARD</h5>
            <li>
              <Link href='/dashboard' className='hover:text-[#0ae106]'>
                Payroll
              </Link>
            </li>
            <li>
              <Link href='/dashboard' className='hover:text-[#0ae106]'>
                Beauty
              </Link>
            </li>
            <li>
              <Link href='/dashboard' className='hover:text-[#0ae106]'>
                Settings
              </Link>
            </li>
          </ul>

          {/* Info Links */}
          <ul className='flex flex-col gap-3'>
            <h5 className='text-white'>INFO</h5>
            <li>
              <Link href='/docs' className='hover:text-[#0ae106]'>
                Catalog
              </Link>
            </li>
            <li>
              <Link href='/docs' className='hover:text-[#0ae106]'>
                License
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* Footer Bottom Section */}
      <div className='flex justify-between text-[#757575] border-t border-[#757575] py-5 mt-5 px-5 text-sm xs:text-base'>
        <span>© 2024 EnerFi. All rights reserved</span>

        {/* Social Icons */}
        <div className='flex gap-2 text-[#0ae106] text-xl sm:text-2xl'>
          <a href='#' className='hover:text-[#757575]'>
            <FaFacebookF />
          </a>
          <a href='#' className='hover:text-[#757575]'>
            <FaYoutube />
          </a>
          <a href='#' className='hover:text-[#757575]'>
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  )
}
