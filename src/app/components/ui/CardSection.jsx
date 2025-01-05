//components
import Title from '@/app/components/ui/Title'
import Card, { SmallCard } from '@/app/components/ui/Card'

export default function CardSection({ array }) {
  return (
    <section className='px-4 lg:px-10 mt-5 sm:mt-8 lg:mt-14'>
      {/* Section Heading */}
      <Title br={false} heading={['3 different',' Revenue streams']} />
      
      {/* Card Container */}
      <div className='flex flex-wrap gap-5 my-10 justify-center px-4 lg:px-8 xl:px-20 xxl:px-0'>
        {array.map((item) => (
          <Card key={item.id} card={item} />
        ))}
      </div>
    </section>
  )
}

export function SmallCardSection({
  array,
  text,
  heading,
  nextLine = true,
  className,
}) {
  return (
    <section className={className}>
      {/* Title Section */}
      <Title text={text} heading={heading} br={nextLine} />

      {/* Cards Section */}
      <div
        className={`grid md:grid-cols-3 xs:grid-cols-2 px-10 my-8 sm:my-16 gap-4 ${className}`}
      >
        {array.map((card) => (
          <SmallCard key={card.id} title={card.title} text={card.text} />
        ))}
      </div>
    </section>
  )
}
