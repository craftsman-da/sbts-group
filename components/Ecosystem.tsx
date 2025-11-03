// components/technology-ecosystem.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function TechnologyEcosystem() {
  return (
    <section className='bg-white py-16 sm:py-20 md:py-24'>
      <div
        data-aos='zoom-in-down'
        className='mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 lg:gap-16'
      >
        <div className='relative mx-auto w-full max-w-xl'>
          <div className='relative aspect-square'>
            <Image
              src='/tools.svg'
              alt='SBTS tools and technology ecosystem'
              fill
              className='object-contain'
              sizes='(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 560px'
              priority
            />
          </div>
        </div>

        <div>
          <h2 className='text-[32px] font-extrabold leading-tight text-[#050038] sm:text-4xl md:text-5xl'>
            SBTS Group
            <br />
            Technology’s tools and
            <br />
            technology ecosystem
          </h2>

          <p className='mt-5 max-w-xl text-[15px] leading-7 text-slate-600'>
            Showcasing how we leverage proprietary platforms and
            enterprise‑grade solutions to deliver digital transformation,
            cybersecurity, and workforce development initiatives.
          </p>

          <Link
            href='#'
            className='mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-[#3964FF] hover:text-[#254BFF]'
          >
            Get Started with SBTS
            <ArrowRight className='h-4 w-4' />
          </Link>
        </div>
      </div>
    </section>
  );
}
