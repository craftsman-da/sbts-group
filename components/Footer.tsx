// components/footer.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const socialIcons = [
    { label: 'TwitterX', href: '#', file: 'TwitterX.svg' },
    { label: 'LinkedIn', href: '#', file: 'LinkedIn.svg' },
    { label: 'Facebook', href: '#', file: 'Facebook.svg' },
    { label: 'Instagram', href: '#', file: 'Instagram.svg' },
  ];

  return (
    <footer className='bg-[#0B0F14] text-slate-200'>
      <section className='border-b border-white/10'>
        <div className='mx-auto max-w-6xl px-4 py-10 sm:py-12 md:py-14'>
          <h3 className='text-center text-xl font-semibold sm:text-2xl'>
            Stay Updated With Us
          </h3>
          <p className='mt-2 text-center text-xs text-slate-400 sm:text-sm'>
            Stay updated with us and get instant updates on any new product.
          </p>

          <form
            action='#'
            className='mx-auto mt-5 flex max-w-2xl items-center gap-2 rounded-full bg-white/5 p-1.5 ring-1 ring-white/10 backdrop-blur sm:mt-6'
          >
            <input
              type='email'
              name='email'
              aria-label='Email address'
              placeholder='Enter email address to subscribe to our newsletter'
              className='flex-1 rounded-full bg-transparent px-4 py-2 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none'
              required
            />
            <button
    className="bg-[#00E0FF] text-black font-medium px-4 py-2 rounded-full mr-4 hover:bg-[#00cfe0] transition-all"
  >
    Subscribe
  </button>
          </form>
        </div>
      </section>

      <section className='mx-auto max-w-6xl px-4 py-10 sm:py-12'>
        <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-4'>
          <div>
            <div className='flex items-center gap-2'>
              <Image
                src='/logo.png'
                alt='SBTS Group'
                width={140}
                height={28}
                className='h-8 w-auto'
                priority
              />
            </div>
            <p className='mt-2 text-xs text-slate-400'>
              Technology Made Simple
            </p>
            <div className='mt-4 flex items-center gap-3'>
              {socialIcons.map((s, i) =>
                s.file ? (
                  <Link
                    key={i}
                    href={s.href}
                    aria-label={s.label}
                    className='inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/10'
                  >
                    <span className='relative block h-4 w-4'>
                      <Image
                        src={`/${s.file}`}
                        alt={s.label}
                        fill
                        sizes='16px'
                        className='object-contain'
                      />
                    </span>
                  </Link>
                ) : null
              )}
            </div>
          </div>

          <div>
            <h4 className='text-sm font-semibold text-slate-100'>POLICY</h4>
            <ul className='mt-3 space-y-2 text-sm text-slate-300'>
              <li>
                <Link href='#' className='hover:text-white'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-white'>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-white'>
                  Contact us
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-white'>
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-sm font-semibold text-slate-100'>ICBM</h4>
            <ul className='mt-3 space-y-2 text-sm text-slate-300'>
              <li>
                <Link href='#' className='hover:text-white'>
                  About us
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-white'>
                  Create an account
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-white'>
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-sm font-semibold text-slate-100'>
              GET CONNECTED
            </h4>
            <ul className='mt-3 space-y-2 text-sm text-slate-300'>
              <li>
                <Link href='#' className='hover:text-white'>
                  About us
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-white'>
                  Contact us
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-white'>
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row'>
          <p>© {new Date().getFullYear()} SBTS Group. All rights reserved.</p>
          <div className='flex items-center gap-2'>
            <Image
              src='/elan.svg'
              width={20}
              height={20}
              alt='Language selector'
            />
            <span>EN</span>
          </div>
        </div>
      </section>
    </footer>
  );
}
