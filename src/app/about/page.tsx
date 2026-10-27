import { portfolioData } from '@/data/portfolio';

export default function About() {
  return (
    <main className="min-h-screen bg-neutral-100 text-black">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-8 text-black">About Me</h1>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Who Am I?</h2>
            <p className="text-neutral-700 mb-4 text-lg leading-relaxed">
              I&apos;m a final-year Computer Science student at Universiti Teknologi PETRONAS (CGPA 3.55, graduating December 2026), looking for a data scientist or applied AI role in Malaysia.
            </p>
            <p className="text-neutral-700 mb-4 text-lg leading-relaxed">
              I spent an eight-month internship at Petronas Digital working on an internal AI chatbot, building the data ingestion pipelines and retrieval layer on PostgreSQL and Neo4j.
            </p>
            <p className="text-neutral-700 text-lg leading-relaxed">
              For my final year project I built RentSafe MY, which rates Malaysian rental chats for scam risk and explains the result in Malay and English.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Experience</h2>
            <div className="space-y-6">
              {portfolioData.experience.map((exp, index) => (
                <div key={index} className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-black mb-2">
                    {exp.position}
                  </h3>
                  <p className="text-neutral-600 mb-2">{exp.company}</p>
                  <p className="text-neutral-500 text-sm mb-2">{exp.duration}</p>
                  <p className="text-neutral-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-black">Education</h2>
          <div className="space-y-4">
            {portfolioData.education.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-2">{edu.degree}</h3>
                <p className="text-black mb-2">{edu.school}</p>
                <p className="text-neutral-700">{edu.details}</p>
                <p className="text-neutral-500 text-sm">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-neutral-200 to-neutral-300 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Let&apos;s Collaborate</h2>
          <p className="mb-6">
            I&apos;m always interested in hearing about new projects and opportunities.
          </p>
          <a
            href={`mailto:${portfolioData.email}`}
            className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-neutral-900 transition"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </main>
  );
}
