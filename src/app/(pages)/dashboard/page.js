//components
import { HeroSecondary } from '../../components/ui/Hero';
import Button from '@/app/components/ui/Button';
import { SmallCardSection } from '@/app/components/ui/CardSection';
//data
export const CardsArray=[
  {
   id:'78218',
   title:'AI code Generation',
   text:'Displays total holdings, project contributions, and staking balances at a glance.',
  },
  {
   id:'72837',
   title:'AI code Generation',
   text:'Shows the current value of your accumulated rewards in ENFI, USDC, and ETH.',
  },
  {
   id:'31445',
   title:'AI code Generation',
   text:'Real-time insights and performance tracking for projects in development and ongoing projects.',
  },
  {
   id:'46774',
   title:'AI code Generation',
   text:'Browse and fund upcoming renewable energy projects directly from the dashboard.',
  },
  {
   id:'08678',
   title:'AI code Generation',
   text:'Generate smart contracts from natural language descriptions. Our AI understands your requirements and produces secure, optimized code.',
  },
  {
   id:'39802',
   title:'AI code Generation',
   text:'Get alerts on funding milestones, new project launches, and other important updates regarding EnerFi.',
  },
 ]
export default function Dashboard() {
  return (
    <main className=''>
      <HeroSecondary heading={["Where Blockchain ","Meets ","Clean Energy"]} text={'Our dashboard is the control center of the EnerFi platform, providing a complete overview of your portfolio, showing the total value of your rewards, current holdings, and active project contributions. Monitor ongoing project statistics, track your portfolio growth, and stay updated on new funding opportunities.'} place={'EnerFi Dashboard'}   />
      <SmallCardSection array={CardsArray} text={'The Dashboard offers a central view of your portfolio and projects'} heading={["Powerful Features for Modern ","Development"]}/>
      <div className='flex flex-col lg:flex-row gap-5 justify-between items-center'>
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center px-5">Interested to see our Platform when it launches? <span className="text-[#0AE106] ">Join Our Waitlist Now!</span></h1>
        <Button fill >
          join waitlist
        </Button>
      </div>
    </main>
  )
}
