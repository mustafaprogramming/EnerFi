'use client'
import { useEffect, useRef, useState } from 'react'
//components
import Title from './Title'
//data
import { FAQsArray } from '@/app/data';

export function Question({ question, ans }) {
  const [opened, setOpened] = useState(false);
  const [height, setHeight] = useState(0);
  const answerRef = useRef(null);

  // Calculate and update the height of the answer when the content changes
  useEffect(() => {
    if (answerRef.current) {
      const calculatedHeight = Math.ceil(answerRef.current.getBoundingClientRect().height+40);
      setHeight(calculatedHeight);
    }
  }, [ans,opened]);

  return (
    <article className={`bg-[#0B0E12] border border-[#333333] rounded-lg overflow-hidden `}>
      {/* Question Header */}
      <div className="grid grid-cols-[1fr_45px] md:grid-cols-[1fr_65px] pl-3 sm:pl-6 ">
        <p className="p-2 pl-0 text-sm md:text-base text-[#FFFFFF] font-semibold w-fit">{question}</p>
        <button
          onClick={() => setOpened((prev) => !prev)}
          className={`flex justify-center items-center rounded-xl md:rounded-2xl border border-[#0ae106] bg-[#0ae106] hover:bg-transparent w-[45px] h-[45px] md:w-[65px] md:h-[65px] hover:text-[#0ae106] transition-all duration-500 group ${
            opened ? "bg-transparent shadow-[1px_1px_15px_#0ae1068b]" : ""
          }`}
        >
          {/* Horizontal Bar */}
          <span className="transition-all duration-500 w-[12px] md:w-[18px] h-[1px] block group-hover:bg-[#0AE106] bg-[#030A12]"></span>
          {/* Vertical Bar */}
          <span
            className={`absolute ${
              opened ? "bg-[#0AE106]" : "rotate-90"
            } transition-all duration-500 w-[12px] md:w-[18px] h-[1px] block group-hover:bg-[#0AE106] bg-[#030A12]`}
          ></span>
        </button>
      </div>

      {/* Answer Section */}
      <div
        className="transition-all"
        style={{ height: opened ? `${height}px` : "0px" ,transitionDuration: `${500+(height*2)}ms`}}
      >
        <p
          ref={answerRef}
          className="pl-3 sm:pl-6 pr-6 md:w-[90%] font-thin text-sm md:text-base"
        >
          Ans. {ans}
        </p>
      </div>
    </article>
  );
}



export default function FAQ() {
  return (
    <section className='mx-auto max-w-[800px] px-2 xs:px-5'>
      {/* Section Title */}
      <Title
        text='We address common queries, demystify intricacies, and provide insights to guide you through our services.'
        br={false}
        heading={['Frequently Asked ', 'Questions']}
      />

      {/* FAQ Questions */}
      <div className='flex flex-col gap-3 my-5 md:my-10'>
        {FAQsArray.map((FAQ) => (
          <Question key={FAQ.id} {...FAQ} />
        ))}
      </div>
    </section>
  )
}
