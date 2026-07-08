import { AmbientBackground } from './components/AmbientBackground';
import { HeroSection } from './sections/HeroSection';
import { BenefitsSection } from './sections/BenefitsSection';
import { ProblemsSection } from './sections/ProblemsSection';
import { PortfolioSection } from './sections/PortfolioSection';
import { ProcessSection } from './sections/ProcessSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { FAQSection } from './sections/FAQSection';
import { FinalCtaSection } from './sections/FinalCtaSection';
import { FooterSection } from './sections/FooterSection';

export default function App() {
  return (
    <main id="top" className="relative overflow-hidden">
      <AmbientBackground />
      <HeroSection />
      <BenefitsSection />
      <ProblemsSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCtaSection />
      <FooterSection />
    </main>
  );
}
