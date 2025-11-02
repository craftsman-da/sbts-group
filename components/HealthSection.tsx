import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react';

export default function HealthOutbreakManager() {
  return (
    <section className='bg-gradient-to-br from-[#005A8D] to-[#003D5C] py-16 sm:py-20 md:py-24'>
      <div className='mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 lg:gap-16'>
        {/* Left: Content */}
        <div className='text-white'>
          <h2 className='text-3xl font-bold leading-tight sm:text-4xl md:text-5xl'>
            Health Outbreak Manager
          </h2>

          <p className='mt-5 max-w-xl text-[15px] leading-7 text-white/90'>
            From the experienced team that pioneered pandemic solutions software
            since 2020, with proven deployment in hospitals and hardware
            solutions. Our Health Outbreak ERP is specifically built for
            managing disease outbreaks. Health Outbreak Manager (HOM) is a full
            ITIL (Identify, Track, Trace, and Contain) solution that works as a
            primary tool to support and aid users in an outbreak and also helps
            organizations keep track of their teams. It is designed to go from
            finish, managing with ease and privacy and vaccine passes as a
            single suite of software. SIS with experience and can us now for a
            free consultation call 212-2025.
          </p>

          <Link
            href='#'
            className='mt-7 inline-flex items-center gap-2 rounded-full border-2 border-white/80 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10'
          >
            <Play className='h-4 w-4 fill-white' />
            Watch Video
          </Link>
        </div>

        <div className='relative mx-auto w-full max-w-xl md:order-last'>
          <div className='relative  aspect-[4/3]'></div>
          <Image
            src='/healthy.png'
            alt='Health Outbreak Manager'
            fill
            className='rounded-2xl object-contain'
            sizes='(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 560px'
          />
        </div>
      </div>
    </section>
  );
}
