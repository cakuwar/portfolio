'use client';

export default function Achievements() {
  const achievements = [
    {
      title: 'Innovation, Invention & Entrepreneurship Carnival (IIEC) 2023',
      role: 'Programmer',
      award: 'Gold Award',
      period: 'April 2023',
      description: 'Won a Gold Award with an 8-member team at national level in the Idea & Product category, which got us selected for MyInstinct 2023. I was the programmer and also made the slides and videos for our presentation.',
      logo: '🥇'
    },
    {
      title: 'MyInstinct 2023 (My Innovation & Technocreation Competition)',
      role: 'Editor',
      award: 'Gold Award',
      period: 'August 2023',
      description: 'Our 4-member team built the Automatic Flying Gas Detector (AFGAD) and won a Gold Award. I handled the posters and presentation videos.',
      logo: '🏆'
    },
    {
      title: 'IIEE 2024 (Invention, Innovation & Entrepreneurship)',
      role: 'Marketing Partner',
      award: 'Best Innovative Business Idea',
      period: 'March 2024 - December 2024',
      description: 'Won Best Category (Innovative Business Idea) at KPTM Kuantan. Promoted and sold our team\'s product "Crunchy Yums" and designed the posters and marketing materials.',
      logo: '🎯'
    },
    {
      title: 'UTP Falcon Club',
      role: 'Protocol & Media Department',
      award: '',
      period: 'January 2024 - Present',
      description: 'Make the videos, posters, banners and Instagram templates for club tournaments to boost participation and keep members updated on club activities.',
      logo: '🦅'
    },
    {
      title: 'STEM Education & Community Outreach, SM Imtiaz Kemaman',
      role: 'Media & Marketing',
      award: '',
      period: 'December 2024',
      description: 'Videographer and editor for a 3-day STEM outreach programme. Produced the posters, Instagram posts and video montages, and helped with technical support during presentations.',
      logo: '🔬'
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Achievements & Involvement</h2>
          <p className="text-neutral-600">Competitions, awards and campus involvement</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <div key={index} className="bg-neutral-100 rounded-lg p-6 border border-neutral-200">
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0 grayscale">{item.logo}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-black mb-1">{item.title}</h3>
                  <p className="text-black text-sm mb-3">{item.role}</p>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-600 mb-3">
                    {item.award && (
                      <span className="text-xs bg-black/10 text-black px-3 py-1 rounded-full">
                        {item.award}
                      </span>
                    )}
                    <span className="grayscale">📅 {item.period}</span>
                  </div>

                  <p className="text-neutral-700 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
