// components/solutions.tsx
import Image from 'next/image';

export default function Solutions() {
  const solutionItems = [
    {
      id: 1,
      title: 'Managed Security Services',
      image: '/managed-security.png',
      description:
        'a 24/7 Security Operations Center (SOC), incident monitoring and remediation for hybrid cloud environments.',
    },
    {
      id: 2,
      title: 'ICBM',
      image: '/icbm.png',
      description:
        'partnership with Digital Bridge Institute (DBI) to train thousands of Nigerians in skills like cybersecurity, AI, software engineering and data analytics.',
    },
    {
      id: 3,
      title: 'Health Outbreak Manager',
      image: '/health-manager.png',
      description:
        '(HOM) ERP solution for managing disease-outbreak identification, tracking, tracing and containment in institutional and public-health contexts.',
    },
    {
      id: 4,
      title: 'E-learning',
      image: '/e-learning.png',
      description:
        'TrainingSol enabling remote, mobile or classroom-based training, self-paced learning and institutional capacity building.',
    },
  ];

  return (
    <section className='bg-white py-16 md:py-20'>
      <div data-aos='fade-up' className='container mx-auto px-4 max-w-7xl'>
        <h2 className='text-center text-3xl font-bold md:text-4xl lg:text-5xl'>
          Our Solutions
        </h2>
        <p className='mx-auto mt-4 max-w-3xl text-center text-gray-700'>
          The Solutions We Provide Series Of Solutions That Promulgate A
          Productive Service For Every Organizations.
        </p>

        <div className='mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {solutionItems.map((solution) => (
            <div key={solution.id} className='flex flex-col'>
              {/* Image container with fixed aspect ratio */}
              <div className='relative mb-4 h-48 w-full overflow-hidden rounded-lg'>
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
                />
              </div>

              {/* Content */}
              <h3 className='text-xl font-semibold'>{solution.title}</h3>
              <p className='mt-2 text-gray-600'>{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
