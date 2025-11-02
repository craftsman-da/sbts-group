// components/comprehensive-solution.tsx
import Image from 'next/image';

export default function ComprehensiveSolution() {
  const solutions = [
    {
      id: 1,
      title: 'Turnkey SOC',
      image: '/managed-security.png',
      description:
        'Get a comprehensive solution to manage your security with our comprehensive Managed security solutions. Let our SOC do the monitoring while you focus on your core mission.',
    },
    {
      id: 2,
      title: 'Health and visitor Kiosk',
      image: '/health-manager.png',
      description:
        'Get our fully integrated visitor management solution on a turnkey unmanned kiosk to do all your visitor screenings. Select from several versions running the same backend. Get demo or use and quick deployment.',
    },
    {
      id: 3,
      title: 'Advisory Services',
      image: '/e-learning.png',
      description:
        'Let our Team of pandemic and security experts help to coin a solution for your quests from simple visits, live events, PR and compass zero re-opening advisory.',
    },
  ];

  return (
    <section className='bg-black py-16 sm:py-20 md:py-24'>
      <div className='mx-auto max-w-7xl px-4'>
        <h2 className='text-center text-2xl font-bold uppercase leading-tight text-white sm:text-3xl md:text-[28px]'>
          ACCESSING A COMPREHENSIVE SOLUTION FOR MANAGING PANDEMICS
        </h2>
        <p className='mx-auto mt-3 max-w-2xl text-center text-sm text-gray-400'>
          The Solutions We Provide Series Of Solutions That Promulgate A
          Productive Service For Every Organizations.
        </p>

        <div className='mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className='flex pb-10 flex-col overflow-hidden rounded-lg bg-[#19171c]'
            >
              <div className='relative h-48 w-full'>
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className='object-cover'
                  sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                />
              </div>

              <div className='p-5'>
                <h3 className='text-lg font-semibold text-white'>
                  {solution.title}
                </h3>
                <p className='mt-2 text-sm leading-6 text-gray-400'>
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
