import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='flex min-h-[60vh] items-center justify-center bg-slate-950 px-4 py-16 text-slate-200'>
      <div className='w-full max-w-xl text-center'>
        <h1 className='text-2xl font-semibold text-white sm:text-3xl'>
          Page not found
        </h1>

        <p className='mt-2 text-sm text-slate-300'>
          The page you’re looking for doesn’t exist or was moved.
        </p>
        <p className='mt-1 text-sm text-slate-400'>
          Please check back later — this page may be updated soon.
        </p>

        <div className='mt-6 flex flex-wrap items-center justify-center gap-3'>
          <Link
            href='/'
            className='inline-flex items-center rounded-lg bg-cyan-500 px-4 py-2.5 text-sm font-medium text-slate-900 hover:bg-cyan-400'
          >
            Return to Home
          </Link>

          <Link
            href='/contact'
            className='inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white hover:bg-white/10'
          >
            Contact Support
          </Link>
        </div>

        <div className='mx-auto mt-10 max-w-md rounded-xl border border-white/10 bg-white/[0.04] p-4'>
          <div className='aspect-video w-full rounded-lg border border-white/10 bg-slate-900/60 text-center text-[10px] text-slate-400 grid place-items-center'>
            I
            <Image
              src='/404.png'
              alt='error_image'
              width={300}
              height={200}
              className='h-full w-full object-cover'
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
