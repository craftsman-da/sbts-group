// components/Hero.tsx
import Image from 'next/image';
import Link from 'next/link';
import AnimatedWaves from './AnimatedWaves';

export default function Hero() {
  const partners = [
    'brave.svg',
    'CIRCLE.svg',
    'discord.svg',
    'google.svg',
    'jump_.svg',
    'lolapalza.svg',
    'magic-eden.svg',
  ];

  return (
    <section className='relative isolate overflow-hidden bg-gradient-to-b from-[#071017] via-[#0A0D12] to-[#070709] text-white'>
      {/* Animated Background */}
      <div className='absolute inset-0 -z-10'>
        <AnimatedWaves />

        {/* Subtle blue glow at top */}
        <div className='absolute inset-0 bg-[radial-gradient(60%_45%_at_50%_0%,rgba(56,132,255,0.15)_0%,transparent_60%)]' />

        {/* Smooth bottom blend to match next section */}
        <div className='absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#070709] to-transparent' />
      </div>

      {/* 
        🎯 HEIGHT ADJUSTMENT - Change these values for large screens:
        - py-16: small screens (64px top & bottom)
        - sm:py-20: small+ screens (80px)
        - md:py-24: medium screens (96px)
        - lg:py-32: large screens (128px) ← ADJUST THIS
        - xl:py-40: extra large (160px) ← OR ADD THIS
        
        Example: lg:py-40 xl:py-48 for much taller hero on large screens
      */}
      <div className='mx-auto max-w-6xl px-4 py-16 sm:py-20 md:py-24 lg:py-32'>
        <h1 className='bg-gradient-to-r from-[#076ead] to-[#cbe5f5] bg-clip-text text-center text-[34px] font-extrabold leading-[1.1] text-transparent sm:text-5xl md:text-6xl'>
          SBTS GROUP
        </h1>

        <p className='mx-auto mt-4 max-w-3xl text-center text-sm leading-6 text-slate-300 sm:text-base sm:leading-7'>
          Driving digital transformation and workforce empowerment across Africa
          and beyond, through innovative technology, strategic partnerships, and
          capacity‑building initiatives that shape the future of work.
        </p>

        <div className='mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:gap-4'>
          <Link
            href='#'
            className='inline-flex h-10 items-center justify-center rounded-full bg-[#2B87FF] px-5 text-sm font-medium text-white transition-colors hover:bg-[#3B91FF]'
          >
            Get started
          </Link>
          <Link
            href='#'
            className='inline-flex h-10 items-center justify-center rounded-full border border-white/30 bg-transparent px-5 text-sm font-medium text-white transition-colors hover:bg-white/10'
          >
            ICBM
          </Link>
          <Link
            href='#'
            className='inline-flex h-10 items-center justify-center rounded-full border border-white/30 bg-transparent px-5 text-sm font-medium text-white transition-colors hover:bg-white/10'
          >
            SOC SERVICE
          </Link>
        </div>

        <div className='mt-10 sm:mt-12'>
          <p className='text-center text-[10px] font-medium tracking-widest text-sky-300/80 sm:text-xs'>
            POWERING TOOLS AND INTEGRATIONS FROM COMPANIES ALL AROUND THE WORLD
          </p>
          <div className='mx-auto mt-4 max-w-5xl'>
            <div className='flex items-center justify-center gap-4 overflow-x-auto whitespace-nowrap md:gap-6 md:overflow-visible [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'>
              {partners.map((file, i) => (
                <div
                  key={i}
                  className='relative h-6 w-16 opacity-90 md:h-6 md:w-20'
                >
                  <Image
                    src={`/${file}`}
                    alt=''
                    fill
                    className='object-contain'
                    sizes='80px'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
