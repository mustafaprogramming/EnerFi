import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-[90%] mx-auto grid gap-10 grid-cols-1 md:grid-cols-[65%_35%] bg-[#0B0E12] border border-[#333333] rounded-3xl p-10 sm:my-20 mb-10">
    {/* Left Section: Text Content */}
    <div className="flex flex-col gap-5 items-center md:items-start ">
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-nowrap max-w-[300px] md:max-w-fit">
        About <span className="text-[#0AE106]">Us</span>
      </h1>
      <p className="text-sm sm:text-base lg:text-xl font-light text-[#979F90] text-center md:text-start">
        Welcome to EnerFi, where we leverage Web3 technology to tokenize solar farms, wind turbines, and hydroelectric plants, allowing you to be a fractional owner of energy-producing assets. EnerFi bridges sustainability and profitability, offering accessible investment opportunities while funding renewable energy infrastructure. EnerFi isn't just about investing; it's about making renewable energy accessible to everyone, breaking barriers once reserved for large corporations.
      </p>
    </div>
  
    {/* Right Section: Image */}
    <aside className="w-full lg:max-w-[300px] md:max-w-[250px] max-w-[200px] mx-auto flex items-center">
      <Image
        src="/bigLogo.png"
        alt="EnerFi Logo"
        width={330}
        height={330}
        quality={100}
        className="rounded-lg bg-cover bg-center w-full select-none"
      />
    </aside>
  </section>
  
  )
}
