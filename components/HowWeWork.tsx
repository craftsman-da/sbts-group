import Image from 'next/image';

export default function HowWeWork() {
  return (
    <section className='bg-gradient-to-b from-[#071017] via-[#0A0D12] to-[#070709] py-12 text-white sm:py-16 md:py-20'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='text-center'>
          <h2 className='text-2xl font-semibold sm:text-3xl md:text-4xl'>
            How we work
          </h2>
          <p className='mx-auto mt-2 max-w-2xl text-xs text-slate-300 sm:text-sm'>
            Quick Expression Of Our Service, Tools And Team.
          </p>
        </div>
      </div>

      <div className='mt-8 w-fit sm:mt-12'>
        <Image
          src='/Works.png'
          alt='How we work'
          width={1920}
          height={800}
          className='h-auto w-full object-contain'
        />
      </div>
    </section>
  );
}
