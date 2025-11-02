// components/products.tsx
import Link from 'next/link';

export default function Products() {
  const products = [
    {
      id: 'trainingsol',
      title: 'TrainingSol',
      blurb:
        'A mobile and desktop training solution that combines e‑learning modules with a training management system, enabling organizations to deliver self‑paced courses.',
    },
    {
      id: 's1-platform',
      title: 'S1 Platform',
      blurb:
        'A scalable communications infrastructure delivering voice, messaging, cloud numbers, eSIMs and programmable communication APIs.',
    },
    {
      id: 'protection-suite',
      title: 'Protection Suite',
      blurb:
        'Includes modules like Anti‑Fraud, Voice Call Profiling, SMS Profiling, all powered by the S1 Platform to help operators secure voice and messaging traffic and protect revenue.',
    },
    {
      id: 'mssp-via-soc',
      title: 'MSSP via SOC',
      blurb:
        'A fully managed security service offering 24/7 threat monitoring, incident response, patch management, endpoint protection and governance for hybrid multi‑cloud environments.',
    },
    {
      id: 'covid-solutions',
      title: 'COVID Solutions',
      blurb:
        'A suite of solutions including vaccine verification, onsite testing & contact tracing, integrated with kiosks, attendance/time tracking and digital signage for health.',
    },
    {
      id: 'enterprise-comms',
      title: 'Enterprise Communications Solutions',
      blurb:
        'Tailored solutions for enterprises to handle complex global communication needs—connecting voice, SMS, cloud numbers.',
    },
  ];

  return (
    <section className='bg-black px-4 py-16 md:py-20'>
      <div className='mx-auto max-w-7xl'>
        <h2 className='text-center text-3xl font-bold text-white md:text-4xl'>
          Our Products
        </h2>
        <p className='mx-auto mt-3 max-w-3xl text-center text-sm text-gray-300/80 md:text-base'>
          Explore Our Suite Of Innovative Products Designed To Drive Efficiency
          And Growth.
        </p>

        <div className='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {products.map((p) => (
            <Link
              key={p.id}
              href={`/products/${p.id}`}
              className='group relative overflow-hidden rounded-xl bg-[#19171c] p-6 transition-colors'
            >
              <div
                aria-hidden
                className='pointer-events-none absolute bottom-0 left-1/2 z-0 h-28 w-40 -translate-x-1/2 translate-y-1/3 rounded-full bg-cyan-400/0 blur-2xl transition-all duration-500 group-hover:bg-cyan-400/25'
              />
              <div className='relative z-10'>
                <div className='text-[11px] font-semibold tracking-[0.18em] text-[#178BD1]'>
                  TOOL / LIBRARY
                </div>
                <h3 className='mt-3 text-lg font-semibold text-white'>
                  {p.title}
                </h3>
                <p className='mt-3 text-sm leading-6 text-gray-300'>
                  {p.blurb}
                </p>

                <div className='mt-6 inline-flex items-center text-[12px] font-medium text-gray-300 transition-colors group-hover:text-white'>
                  LEARN MORE
                  <svg
                    className='ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M7 17L17 7' />
                    <path d='M7 7h10v10' />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
