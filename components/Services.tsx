// components/services.tsx
import Image from 'next/image';
import Link from 'next/link';

type Service = {
  iconFile: string; // e.g., "globe.svg"
  title: string;
  description: string;
  href?: string;
};

type ServicesProps = {
  heading?: string;
  subheading?: string;
  items: Service[];
};

export default function Services({
  heading = 'Our Key Services',
  subheading,
  items,
}: ServicesProps) {
  return (
    <section className='relative overflow-hidden py-12 text-white sm:py-16 md:py-20'>
      <div className='absolute inset-0 bg-gradient-to-b from-[#070709] via-[#0A0D12] to-[#071017]' />

      <div className='relative z-10 mx-auto max-w-6xl px-4'>
        <div className='text-center'>
          <h2 className='text-2xl font-semibold sm:text-3xl'>{heading}</h2>
          {subheading && (
            <p className='mx-auto mt-2 max-w-3xl text-xs text-slate-300 sm:text-sm'>
              {subheading}
            </p>
          )}
        </div>

        <div className='mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 md:gap-6 lg:grid-cols-4'>
          {items.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ iconFile, title, description, href }: Service) {
  return (
    <div
      data-aos='zoom-in'
      className='group  relative rounded-lg border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:bg-white/[0.07] sm:p-6'
    >
      <CornerGlow position='tl' />
      <CornerGlow position='br' />

      <div className='mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10'>
        <div className='relative h-5 w-5'>
          <Image
            src={`/${iconFile}`}
            alt=''
            fill
            className='object-contain'
            sizes='20px'
            priority={false}
          />
        </div>
      </div>

      <h3 className='text-base font-semibold leading-6 sm:text-lg'>{title}</h3>
      <p className='mt-2 text-xs leading-5 text-slate-300 sm:text-sm sm:leading-6'>
        {description}
      </p>

      {href && (
        <Link
          href={href}
          className='mt-4 inline-flex items-center gap-2 text-xs font-medium text-sky-300 hover:text-sky-200 sm:text-sm'
        >
          See Explained
          <span aria-hidden>→</span>
        </Link>
      )}
    </div>
  );
}

function CornerGlow({ position }: { position: 'tl' | 'br' }) {
  const isTL = position === 'tl';
  const pos = isTL ? 'left-3 top-3' : 'right-3 bottom-3 rotate-180';

  return (
    <div
      className={`pointer-events-none absolute ${pos} h-8 w-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
    >
      <div className='h-[3px] w-8 rounded-full bg-gradient-to-r from-cyan-400/70 to-transparent blur-[0.5px]' />

      <div className='mt-[3px] h-8 w-[3px] rounded-full bg-gradient-to-b from-cyan-400/70 to-transparent blur-[0.5px]' />

      <div className='absolute inset-0 -z-10 rounded-full bg-cyan-400/10 blur-md' />
    </div>
  );
}
