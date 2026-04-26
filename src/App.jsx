import { HeroSection } from './components/hero/HeroSection'
import {
  ContactSection,
  DiscoverSection,
  FooterSection,
  InspireSection,
} from './components/sections'

function App() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <HeroSection />
      <InspireSection />
      <DiscoverSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}

export default App
