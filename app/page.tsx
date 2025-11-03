// app/page.tsx

import TechnologyEcosystem from '@/components/Ecosystem';
import HealthOutbreakManager from '@/components/HealthSection';
import Hero from '@/components/Hero';
import Management from '@/components/Management';
import Products from '@/components/Products';
import Roadmap from '@/components/Roadmap';
import HeroSection from '@/components/HeroSection';

import Services from '@/components/Services';
import Solutions from '@/components/Solutions';

export default function HomePage() {
  return (
    <>
      <Hero /> 
      <Services
        heading='Our Key Services'
        subheading='We provide a secure and efficient key management solution, ensuring convenient access and peace of mind for individuals and businesses.'
        items={[
          {
            iconFile: 'serIcon1.svg',
            title: 'ICBM',
            description:
              'SBTS developed the intelligent capacity building model to bridge the digital skills gap across emerging economies.',
            href: '#',
          },
          {
            iconFile: 'serIcon2.svg',
            title: 'End‑to‑End Enterprise Solutions',
            description:
              'Full spectrum of enterprise technology services—from software development to ERP implementation.',
            href: '#',
          },
          {
            iconFile: 'serIcon3.svg',
            title: 'Global Technology and Security Operations',
            description:
              'Security Operations Center (SOC) for real‑time monitoring, threat detection, and cyber defense.',
            href: '#',
          },
          {
            iconFile: 'serIcon4.svg',
            title: 'Human‑Centered Digital Transformation',
            description:
              'People‑driven tech strategies that emphasize outcomes, not just tools.',
            href: '#',
          },
        ]}
      />
      <Solutions />
      <Products />
      <Roadmap />
      <TechnologyEcosystem />
      <HealthOutbreakManager />
      <Management />
    </>
  );
}
