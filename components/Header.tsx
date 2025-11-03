'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LanguageSelector from "./LanguageSelector";


export default function Header() {
  const [open, setOpen] = useState(false);

  const nav = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/our_services' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'About us', href: '/about' },
    { label: 'Contact us', href: '/contact' },
  ];

  return (
    <header className='sticky top-0 z-50 w-full bg-gradient-to-r from-[#0b121c] via-[#0b121c]/90 to-[#070b11]'>
      <div className='mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:h-16'>
        {/* Logo */}
        <Link href='/' className='flex items-center gap-2'>
          <Image
            src='/logo.png'
            alt='SBTS Group'
            width={140}
            height={28}
            priority
            className='h-7 w-auto md:h-8'
          />
          <span className='sr-only'>SBTS Group</span>
        </Link>

        <nav className='hidden items-center gap-6 md:flex'>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='text-sm text-slate-200 hover:text-white'
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className='hidden items-center gap-3 md:flex'>
          <Link
            href='/login'
            className='text-sm text-slate-300 hover:text-white'
          >
            Login
          </Link>
          <Link
            href='/signup'
            className='rounded-xl bg-[#2B87FF] px-4 py-2 text-sm text-white hover:bg-[#3B91FF]'
          >
            Sign up
          </Link>

          <Image
        src='/elan.svg'
        width={20}
        height={20}
        alt='Language selector'
        />
        <LanguageSelector />
        
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label='Toggle menu'
          className='inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-white/10 md:hidden'
        >
          <svg
            className='h-6 w-6'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
          >
            {open ? (
              <path
                strokeWidth='2'
                strokeLinecap='round'
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeWidth='2'
                strokeLinecap='round'
                d='M3 6h18M3 12h18M3 18h18'
              />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden ${
          open ? 'block' : 'hidden'
        } border-t border-white/10 bg-[#0b121c]`}
      >
        <div className='mx-auto max-w-7xl px-4 py-3'>
          <div className='flex flex-col gap-2'>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='rounded-md px-2 py-2 text-slate-200 hover:bg-white/10'
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className='mt-1 flex items-center gap-3'>
              <Link
                href='/login'
                className='rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-white/10'
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
              <Link
                href='/signup'
                className='rounded-2xl bg-[#2B87FF] px-4 py-2 text-sm text-white hover:bg-[#3B91FF]'
                onClick={() => setOpen(false)}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
