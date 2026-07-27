import HeroSection from "./components/HeroSection"
import IntroSection from "./components/IntroSection"
import ServicesSection from "./components/ServicesSection"
import ReferencesSection from "./components/ReferencesSection"
import StatsSection from "./components/StatsSection"
import RealisationsSection from "./components/RealisationsSection"
import WhyChooseUsSection from "./components/WhyChooseUsSection"
import PartnersSection from "./components/PartnersSection"
import { realisations } from "./data/site-data"

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <ReferencesSection />
      <StatsSection />
      <RealisationsSection items={realisations} />
      <WhyChooseUsSection />
      <PartnersSection />
    </>
  )
}
