import Hero from '@/components/sections/Hero'
import SituationsGrid from '@/components/sections/SituationsGrid'
import ServicesCards from '@/components/sections/ServicesCards'
import WhyUs from '@/components/sections/WhyUs'
import MethodesSummary from '@/components/sections/MethodesSummary'
import ZoneIntervention from '@/components/sections/ZoneIntervention'
import SituationsLinks from './SituationsLinks'
import WhySansDestruction from './WhySansDestruction'
import CTABanner from '@/components/sections/CTABanner'
import JsonLd from '@/components/seo/JsonLd'

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <SituationsGrid />
      <ServicesCards />
      <WhyUs />
      <MethodesSummary />
      <ZoneIntervention />
      <SituationsLinks />
      <WhySansDestruction />
      <CTABanner />
    </>
  )
}
