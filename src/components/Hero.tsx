'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Hero() {
  // Shows the AA initials if public/images/profile.png is missing
  const [photoMissing, setPhotoMissing] = useState(false);

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-neutral-100 flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="relative w-32 h-32 mx-auto mb-8 bg-neutral-300 rounded-full overflow-hidden flex items-center justify-center">
            {photoMissing ? (
              <span className="text-black text-4xl font-bold">AA</span>
            ) : (
              <Image
                src="/images/profile.png"
                alt="Afiq Aiman"
                fill
                sizes="192px"
                // The photo is full-length, so zoom in on the head and shoulders
                className="object-cover object-[50%_28%] scale-150 origin-[50%_45%]"
                onError={() => setPhotoMissing(true)}
              />
            )}
          </div>
        </div>

        <p className="text-black text-lg mb-4">Hi, I am</p>
        <h1 className="text-6xl md:text-7xl font-bold text-black mb-6">
          AFIQ AIMAN
        </h1>

        <p className="text-2xl text-neutral-700 mb-4">DATA SCIENTIST | APPLIED AI</p>
        <p className="text-neutral-600 max-w-2xl mx-auto text-lg mb-8">
          Final-year Computer Science student at Universiti Teknologi PETRONAS. I spent eight months at Petronas Digital building the data ingestion pipelines and retrieval layer for an internal AI chatbot, and for my final year project I built RentSafe MY, which rates Malaysian rental chats for scam risk and explains why.
        </p>

        <div className="flex gap-4 justify-center flex-wrap mb-12">
          <a href="#projects" className="px-8 py-3 bg-black hover:bg-neutral-800 text-white rounded-lg transition">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3 border border-black text-black hover:bg-black/10 rounded-lg transition">
            Get in Touch
          </a>
        </div>

        <div className="flex gap-4 justify-center">
          <a href="https://linkedin.com/in/afiq-aiman-420165281" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-black transition text-2xl">
            LinkedIn
          </a>
          <a href="https://github.com/cakuwar" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-black transition text-2xl">
            GitHub
          </a>
          <a href="mailto:afiq04aiman10@gmail.com" className="text-neutral-600 hover:text-black transition text-2xl">
            Email
          </a>
        </div>

        <p className="text-neutral-500 text-sm mt-12">Open to data scientist and applied AI roles in Malaysia · Graduating December 2026</p>
      </div>
    </section>
  );
}
