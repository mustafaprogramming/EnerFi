//components

import { SmallCardSection } from "@/app/components/ui/CardSection";
import { HeroSecondary } from "@/app/components/ui/Hero";
import ViewEarnings from "@/app/components/ui/ViewEarnings";
const CardsArray=[
  {
    id:'78217',
    title:'AI code Generation',
    text:'View the full value of all accumulated rewards and staking returns.',
   },
   {
    id:'72807',
    title:'AI code Generation',
    text:'Easily access and withdraw unclaimed rewards from staking and funded projects.',
   },
   {
    id:'35445',
    title:'AI code Generation',
    text:'See how much you’ve earned from specific project contributions and staking pools.',
   },
]
export default function MyEarnings() {
 return (
   <main>
    <HeroSecondary heading={["Where Blockchain ","Meets ","Clean Energy"]} text={'The My Earnings page gives you a detailed view of your total rewards, staking returns, and project contributions. Track the value of your earnings over time, see how much you’ve generated from funded projects, and view claimable rewards ready for withdrawal. This page helps you stay informed and maximize the returns from your involvement in EnerFi.'} place={'My Earnings'}  />
    <SmallCardSection array={CardsArray} text={'My Earnings breaks down your returns, helping you track performance and manage rewards.'} heading={["Powerful Features for Modern ","Development"]} className={' my-20 md:my-40 '}/>
    <ViewEarnings />
   </main>
 )
}