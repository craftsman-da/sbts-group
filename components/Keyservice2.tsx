// components/key-services.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function KeyServices() {
  return (
    <section className='relative overflow-hidden py-12 text-white sm:py-16 md:py-20'>
      {/* Gradient background */}
      <div className='absolute inset-0 bg-gradient-to-br from-[#0A1220] via-[#0D1629] to-[#101B2E]' />

      {/* Decorative background elements */}
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute left-0 top-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl' />
        <div className='absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl' />
      </div>

      <div className='relative z-10 mx-auto max-w-7xl px-4'>
        <div className='grid gap-8 lg:grid-cols-2 lg:gap-12'>
          {/* Left column - heading and description */}
          <div data-aos='fade-right' className='flex flex-col justify-center'>
            <h2 className='text-3xl font-bold sm:text-4xl md:text-5xl'>
              Key Services
            </h2>
            <p className='mt-4 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7'>
              SBTS Is A Pioneer In Digital Learning And Workforce Development,
              Offering Scalable E-Learning Platforms Such As TrainingSol. They
              Design And Implement Online Training, LMS Systems, And Blended
              Learning Programs To Enhance Digital Literacy And Technical
              Expertise In Public And Private Sectors.
            </p>
            <Link
              href='/services'
              className='mt-6 inline-flex w-fit items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-cyan-300'
            >
              Explore Services
            </Link>
          </div>

          {/* Right column - service cards */}
          <div data-aos='fade-left' className='space-y-4'>
            <ServiceCard
              data-aos='flip-up'
              iconFile='serIcon1.svg'
              title='Software Development & Integration'
              description='SBTS Group Delivers End-To-End Software Engineering And Enterprise-Grade Solutions Tailored To Client Needs.'
            />
            <ServiceCard
              iconFile='serIcon4.svg'
              title='ICT Consulting & Digital Transformation'
              description='The Company Provides Expert Information And Communication Technology (ICT) Consulting Services To Governments And Private Organizations.'
            />
            <ServiceCard
              iconFile='serIcon3.svg'
              title='Cybersecurity & Managed Security Services'
              description='With A State-Of-The-Art Security Operations Center (SOC), SBTS Provides 24/7 Cybersecurity Monitoring, Threat Detection, And Incident Response.'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  iconFile,
  title,
  description,
}: {
  iconFile: string;
  title: string;
  description: string;
}) {
  return (
    <div className='group relative rounded-lg border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:bg-white/[0.07] sm:p-6'>
      {/* Corner glow decorations */}
      <CornerGlow position='tl' />
      <CornerGlow position='br' />

      <div className='flex items-start gap-4'>
        {/* Icon */}
        <div className='flex-shrink-0'>
          <div className='flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20'>
            <Image
              src={`/${iconFile}`}
              alt=''
              width={24}
              height={24}
              className='object-contain'
            />
          </div>
        </div>

        {/* Content */}
        <div data-aos='flip-up' className='flex-1'>
          <h3 className='text-base font-semibold leading-6 sm:text-lg'>
            {title}
          </h3>
          <p className='mt-2 text-xs leading-5 text-slate-300 sm:text-sm sm:leading-6'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function CornerGlow({ position }: { position: 'tl' | 'br' }) {
  const isTL = position === 'tl';
  const pos = isTL ? 'left-0 top-0' : 'right-0 bottom-0';

  return (
    <div
      className={`pointer-events-none absolute ${pos} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
    >
      {isTL ? (
        <div className='h-16 w-16'>
          <div className='absolute left-0 top-0 h-px w-12 bg-linear-to-r from-cyan-400 to-transparent' />
          <div className='absolute left-0 top-0 h-12 w-px bg-linear-to-b from-cyan-400 to-transparent' />
          <div className='absolute left-0 top-0 h-8 w-8 rounded-full bg-cyan-400/30 blur-xl' />
        </div>
      ) : (
        <div className='h-16 w-16'>
          <div className='absolute bottom-0 right-0 h-px w-12 bg-linear-to-l from-cyan-400 to-transparent' />
          <div className='absolute bottom-0 right-0 h-12 w-px bg-linear-to-t from-cyan-400 to-transparent' />
          <div className='absolute bottom-0 right-0 h-8 w-8 rounded-full bg-cyan-400/30 blur-xl' />
        </div>
      )}
    </div>
  );
}
