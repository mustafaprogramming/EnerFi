export default function Title({
  heading,
  text,
  br = true,
  className,
  small = false,
}) {
  return (
    <div className={`${className} text-center flex flex-col items-center`}>
      {/* Heading */}
      <h1
        className={`${
          small
            ? 'text-xl md:text-2xl lg:text-3xl xl:text-4xl'
            : 'text-3xl md:text-4xl lg:text-5xl xl:text-6xl'
        } px-5 font-bold sm:text-nowrap`}
      >
        {heading[0] || ''}
        {br && <br className='hidden sm:block' />}
        <span className='text-[#0AE106]'>{heading[1] || ''}</span>
      </h1>

      {/* Optional Text */}
      {text && (
        <p
          className={`${
            small
              ? 'max-w-[700px]'
              : 'xs:max-w-[400px] max-w-[240px] sm:max-w-[80%]'
          } text-sm sm:text-base md:text-lg text-[#979F90] font-light mt-2`}
        >
          {text}
        </p>
      )}
    </div>
  )
}
