import Link from 'next/link'

export default function Button({
  children,
  fill,
  full,
  white,
  small,
  className,
}) {
  return (
    <Link
      href=''
      className={`capitalize border border-[#0AE106] transition-all duration-700 ease-in rounded-lg flex items-center justify-center gap-2 text-center text-nowrap 
    ${
      small
        ? ' px-3 sm:px-[18px] md:px-6 py-1 sm:py-1.5  md:py-2 text-sm'
        : ' px-5 sm:px-[30px] md:px-10 py-1.5 sm:py-2  md:py-3 '
    } 
    ${
      fill
        ? `bg-[#0AE106] text-[#030A12] hover:bg-transparent ${
            white ? 'hover:text-white' : 'hover:text-[#0AE106]'
          }`
        : `${
            white ? 'text-white' : 'text-[#0AE106]'
          } hover:bg-[#0AE106] hover:text-[#030A12]`
    } 
    ${full ? 'w-full' : 'w-fit'} 
    ${className}`}
    >
      {children}
    </Link>
  )
}
