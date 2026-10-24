'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" className="text-2xl font-bold text-black mb-4 block">
              { "{" } AFIQ AIMAN { "}" }
            </Link>
            <p className="text-neutral-600">Data Scientist | Applied AI</p>
            <p className="text-neutral-500 text-sm mt-2">Final-year Computer Science student at Universiti Teknologi PETRONAS</p>
          </div>

          <div>
            <h3 className="font-bold text-black mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm text-neutral-600">
              <a href="#about" className="hover:text-black transition block">
                About
              </a>
              <a href="#experience" className="hover:text-black transition block">
                Experience
              </a>
              <a href="#projects" className="hover:text-black transition block">
                Projects
              </a>
              <a href="#achievements" className="hover:text-black transition block">
                Achievements
              </a>
              <a href="#contact" className="hover:text-black transition block">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-black mb-4">Connect</h3>
            <div className="space-y-2 text-sm text-neutral-600">
              <a
                href="https://github.com/cakuwar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition block"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/afiq-aiman-420165281"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition block"
              >
                LinkedIn
              </a>
              <a
                href="mailto:afiq04aiman10@gmail.com"
                className="hover:text-black transition block"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-8 text-center text-sm text-neutral-500">
          <p>
            © {new Date().getFullYear()} Afiq Aiman. All rights reserved.
          </p>
          <p className="mt-2">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
