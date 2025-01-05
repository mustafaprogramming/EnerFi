
//components
import { SmallCardSection } from "@/app/components/ui/CardSection";
import FAQ from "@/app/components/ui/FAQ";
import { HeroSecondary } from "@/app/components/ui/Hero";

//data
const cards=[
  {
    id:'78217',
    title:'Live Funding Projects',
    text:'Browse renewable energy projects currently open for investment. See real-time data on funding progress, projected kWh output per day/week, and estimated returns based on your investment.',
   },
   {
    id:'72807',
    title:'Funding Projects Overview',
    text:'View detailed statistics and performance metrics for already funded projects. Track energy production, milestones, and ongoing impact through transparent reporting.',
   },
   {
    id:'35445',
    title:'Investment Calculator',
    text:'For projects still in funding, use the interactive calculator to estimate potential returns based on different investment amounts. See how your contribution could translate into kWh production and earnings over time.',
   },
]
export default function Projects() {
 return (
  <main>
  <HeroSecondary heading={["Explore and Fund All ","of Our ","Projects"]} text={'The Projects page is the gateway to discovering, funding, and tracking renewable energy projects with EnerFi. Whether you\'re investing in new projects or reviewing funded ones, this page provides key insights and projections to guide your decisions.'} place={'Projects'}  />
  <SmallCardSection array={cards} heading={['Functions']} />
  <FAQ />
</main>
 )
}