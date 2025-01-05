
//icons
import { IoMdArrowDropdown } from 'react-icons/io'

//data

import { links } from '@/app/data'

//components

import Link from 'next/link'
import Button from './Button'

export default function Nav({ settingData, sideBarOpen }) {
  return (
    <nav
      className={`${
        sideBarOpen
          ? 'flex flex-col gap-4 transition-all duration-500'
          : 'md:scale-100 scale-0'
      } 
    px-5 md:px-0 md:static md:w-fit sm:w-[70vw] w-[90vw]
    fixed z-[21] top-[15vh] left-[50%] md:-translate-x-[0%] -translate-x-[50%] md:bg-transparent md:border-none border border-[#0AE106] md:py-0 pt-10 pb-5 rounded-lg`}
    >
      <ul className='md:flex w-full grid grid-cols-2 gap-y-3 capitalize h-full'>
        {links.map((link, ind) => {
          return (
            <div key={ind} className='flex flex-col gap-1'>
              <Link
                href={link.link}
                className={`${
                  link.subLinks
                    ? 'submenu cursor-default'
                    : 'hover:text-[#0AE106]'
                } md:h-full md:px-2 md:text-base text-lg md:font-normal font-bold flex items-center py-3`}
                onMouseOver={(e) => settingData(e, link.subLinks)}
              >
                {link.page}
                {link.subLinks && (
                  <IoMdArrowDropdown className='submenu md:block hidden' />
                )}
              </Link>

              {/* Submenu Items */}
              {link.subLinks?.map((item, idx) => {
                return (
                  <div key={idx} className='pl-1 md:hidden block'>
                    <h6 className='font-[500]'>{item.title}</h6>
                    <ul className='pl-1.5'>
                      {item.links.map((subItem, subIdx) => {
                        return (
                          <li key={subIdx}>
                            <Link
                              href={subItem.link}
                              className='text-sm text-[#979F90] hover:text-[#0AE106]'
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )
              })}
            </div>
          )
        })}
      </ul>

      <Button full small className='xs:hidden flex'>
        Join Presale
      </Button>
    </nav>
  )
}
