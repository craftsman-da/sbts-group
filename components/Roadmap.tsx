import Image from 'next/image';

export default function Roadmap() {
  const row1 = ['/roadmap-1.png', '/roadmap-2.png'];
  const row2 = ['/roadmap-3.png', '/roadmap-4.png', '/roadmap-5.png'];

  const Card = ({ src }: { src: string }) => (
    <div className='relative overflow-hidden rounded-2xl '>
      <div className='relative h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] xl:h-[380px]'>
        <Image
          src={src}
          alt=''
          fill
          className='object-contain p-4 sm:p-6'
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
          priority={false}
        />
      </div>
    </div>
  );

  return (
    <section className='bg-black py-14 sm:py-16 md:py-20'>
      <div className='mx-auto max-w-7xl px-4'>
        <h2 className='text-center text-3xl font-bold text-white md:text-4xl'>
          Our Roadmap
        </h2>
        <p className='mx-auto mt-3 max-w-3xl text-center text-sm text-gray-300/80 md:text-base'>
          Quick Expression Of Our Service, Tools And Team.
        </p>

        <div className='mt-10 grid gap-6 lg:grid-cols-2'>
          {row1.map((src) => (
            <Card key={src} src={src} />
          ))}
        </div>

        <div className='mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {row2.map((src) => (
            <Card key={src} src={src} />
          ))}
        </div>
      </div>
    </section>
  );
}
