//components

import { HeroSecondary } from "@/app/components/ui/Hero";
import Title from "@/app/components/ui/Title";
import ViewEarnings from "@/app/components/ui/ViewEarnings";

export default function Reports() {
 return (
  <main>
      <HeroSecondary heading={["Where Blockchain ","Meets ","Clean Energy"]} text={'The My Earnings page gives you a detailed view of your total rewards, staking returns, and project contributions. Track the value of your earnings over time, see how much you’ve generated from funded projects, and view claimable rewards ready for withdrawal. This page helps you stay informed and maximize the returns from your involvement in EnerFi.'} place={'Reports'}  />
      <Title text={'Reports gives you an overview of all current and upcoming renewable energy projects with data like KwH total, lifetime earnings and other details that investors would need.'} heading={["Powerful Features for Modern ","Development"]} className={'mb-28 mt-20 md:mt-40'}  />
      <ViewEarnings />
  </main>
 )
}