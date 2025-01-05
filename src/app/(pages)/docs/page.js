'use client'
import { useEffect, useState } from 'react'
//data
import { documentations } from '@/app/data'
//icons
import { FaAngleDoubleLeft } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'


export default function Docs() {
  const [activeSection, setActiveSection] = useState('')
  const [height, setHeight] = useState(0)
  const [navOpen, setNavOpen] = useState(false)

  const navigate = (id) => {
    const element = document.getElementById(id)
    const yOffset = window.innerWidth > 640 ? 90 : 180;
    const y = (element.getBoundingClientRect().top + window.scrollY)-yOffset // Calculate position
    window.scrollTo({
      top: y,
      behavior: 'smooth',
    })
    setNavOpen(false)
  }
  const calculateHeight = () => {
    const calculatedHeight = document.getElementById('docHeader')?.clientHeight
    setHeight(calculatedHeight)
  }
  useEffect(() => {
    calculateHeight()
    // Flatten the section IDs from the documentations array
    const sectionElements = documentations
      .flatMap((doc) => doc.sections) // Access all sections
      .map((section) => document.getElementById(section.id)) // Get elements by ID

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting)
        if (visibleSection) {
          setActiveSection(visibleSection.target.id)
        }
      },
      { threshold: 1 } // Adjust threshold for when sections are considered "active"
    )

    sectionElements.forEach((section) => {
      if (section) observer.observe(section) // Observe only if the section exists
    })
    window.addEventListener('resize', calculateHeight)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', calculateHeight)
    }
  }, [documentations])

  return (
    <div
      className='grid sm:grid-cols-[35%_65%] md:grid-cols-[30%_70%] border-b border-[#757575] relative'
      style={{ marginTop: `${height}px` }}
    >
      {/* Sidebar */}
      <div className="absolute left-0 w-full h-[90vh] bg-[url('/Frame1.png')] bg-cover bg-no-repeat bg-center " style={{ top: `${height}px` }}></div>
      <nav
        className={` sm:sticky fixed ${
          navOpen
            ? 'translate-x-0 z-20 transition-all duration-500 backdrop-blur-sm sm:bg-transparent bg-[#030a12d9]'
            : ' sm:translate-x-0 translate-x-[-100%]'
        }   w-full h-screen xl:pr-12 xl:pl-4 px-6 py-8 border-r border-[#757575] `}
        style={{ top: `${height}px` }}
      >
        <button
          onClick={() => setNavOpen(false)}
          className='bg-[#0ae10614] border border-[#0AE106] rounded-lg p-2 sm:hidden text-[#0AE106] sm:text-base w-fit absolute backdrop-blur-3xl text-xl top-3 right-3 '
        >
          <IoMdClose />
        </button>
        {documentations.map((document) => (
          <div key={document.head} className='mb-3'>
            <h2 className='text-lg md:text-xl font-semibold mb-3 '>
              {document.head}
            </h2>
            <ul>
              {document.sections?.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => navigate(section.id)}
                    className={` w-full text-start py-2 lg:px-6 md:px-4 px-2 my-1 overflow-hidden text-sm flex sm:text-base line-clamp-2 ${
                      activeSection === section.id
                        ? ' bg-[#0ae10614] border border-[#0AE106] rounded-lg'
                        : ''
                    }`}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Main Content */}
      <main className='w-full md:px-8 px-4 py-8 mb-20 relative'>
        <button
          onClick={() => setNavOpen(true)}
          className='bg-[#0ae10614] border border-[#0AE106] rounded-lg py-2 px-4 text-sm sm:text-base w-fit fixed right-[10px] sm:hidden backdrop-blur-3xl flex gap-2 items-center -translate-y-3 '
        >
          <FaAngleDoubleLeft />
          Navigation
        </button>
        {documentations.map((document) => (
          <section key={document.head}>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold xs:my-2 md:my-5 text-[#0ae106] '>
              {document.head}
            </h2>
            {document.sections?.map((section) => (
              <article
                id={section.id}
                key={section.id}
                className='flex flex-col gap-3 my-5 xs:px-4 px-2 min-h-[50vh] border-b border-[#757575] sm:pt-5 pt-2 pb-3'
              >
                <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold '>
                  {section.title}
                </h3>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl text-[#979F90] '>
                  {section.text}
                </p>
              </article>
            ))}
          </section>
        ))}
      </main>
    </div>
  )
}
