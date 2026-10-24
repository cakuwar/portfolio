'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Achievements', 'Certifications', 'Contact'];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-black">
          { "{" } AFIQ AIMAN {"}" }
        </Link>

        <button
          className="lg:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className={`${isOpen ? 'block' : 'hidden'} lg:block absolute lg:static top-16 left-0 right-0 bg-white lg:bg-transparent p-4 lg:p-0`}>
          <div className="flex flex-col lg:flex-row gap-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-neutral-700 hover:text-black transition text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
