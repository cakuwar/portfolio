'use client';

export default function Certifications() {
  // Certificate PDFs live in public/certificates; leave file or badgeUrl empty to hide that link
  const certifications = [
    {
      title: 'AWS Academy Graduate - Cloud Foundations',
      issuer: 'AWS Academy · July 2026',
      skills: ['AWS Architecture', 'AWS Cloud', 'AWS Core Services', 'AWS Pricing', 'AWS Support'],
      credentialId: '3f6fad18-4123-4e39-a3c3-32c5960580d6',
      file: '/certificates/aws-academy-cloud-foundations.pdf',
      badgeUrl: 'https://www.credly.com/badges/3f6fad18-4123-4e39-a3c3-32c5960580d6',
    },
    {
      title: 'AI Fundamentals for Data Professionals',
      issuer: 'LinkedIn Learning · June 2025',
      skills: ['Artificial Intelligence (AI)', 'Data Science'],
      credentialId: '802b4f5c8acc50e9383bfce8aefe0ab402b62345076f4831943733805972e657',
      file: '/certificates/ai-fundamentals-for-data-professionals.pdf',
      badgeUrl: '',
    },
    {
      title: 'Excel: Using Solver for Decision Analysis',
      issuer: 'LinkedIn Learning · June 2025',
      skills: ['Decision Analysis', 'Excel Solver'],
      credentialId: '383ca5472f09c1c46f5a337551bf309f0989bd69aef1d74f2ade962cec590556',
      file: '/certificates/excel-solver-decision-analysis.pdf',
      badgeUrl: '',
    },
    {
      title: 'Hands-On Introduction: Data Engineering',
      issuer: 'LinkedIn Learning · June 2025',
      skills: ['Data Engineering'],
      credentialId: '1bddb846f6733709ac086a5e50fe60bfb423a3e7b0c4a1a7ab05787344851c7f',
      file: '/certificates/hands-on-introduction-data-engineering.pdf',
      badgeUrl: '',
    },
    {
      title: 'DevOps Foundations: Lean and Agile',
      issuer: 'LinkedIn Learning · May 2025',
      skills: ['Agile Methodologies', 'DevOps', 'Lean Principles'],
      credentialId: 'b25bcfbda9d1ff0a682d0eb655b78fe129fba78d90a70eea874144b389e1a849',
      file: '/certificates/devops-foundations-lean-and-agile.pdf',
      badgeUrl: '',
    },
    {
      title: 'Python Data Analysis',
      issuer: 'LinkedIn Learning · May 2025',
      skills: ['Data Analysis', 'Python (Programming Language)'],
      credentialId: '92f365ccae50d9360386efebd55baeed3f5603c670b50d6bdaa60ce851c5ef3a',
      file: '/certificates/python-data-analysis.pdf',
      badgeUrl: '',
    },
    {
      title: 'Statistics Foundations 2: Probability',
      issuer: 'LinkedIn Learning · May 2025',
      skills: ['Probability', 'Statistics'],
      credentialId: 'ed21ad054f241de09b5bc15e7aa7475f6f6c3ee7966261a466050ded6098bb7b',
      file: '/certificates/statistics-foundations-2-probability.pdf',
      badgeUrl: '',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Professional Certifications</h2>
          <p className="text-neutral-600">Industry-recognized credentials demonstrating expertise</p>
        </div>

        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 transition border border-neutral-200 hover:border-neutral-500"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0 grayscale">📜</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-black mb-1">{cert.title}</h3>
                  <p className="text-black text-sm mb-3">{cert.issuer}</p>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="text-xs bg-neutral-200 text-neutral-700 px-2 py-1 rounded">
                        ▹ {skill}
                      </span>
                    ))}
                  </div>

                  {(cert.file || cert.badgeUrl) && (
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-4">
                      {cert.file && (
                        <a
                          href={cert.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-black underline-offset-4 hover:underline"
                        >
                          View certificate ↗
                        </a>
                      )}
                      {cert.badgeUrl && (
                        <a
                          href={cert.badgeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-black underline-offset-4 hover:underline"
                        >
                          Verify on Credly ↗
                        </a>
                      )}
                      {cert.credentialId && (
                        <span className="font-mono text-xs text-neutral-500" title={cert.credentialId}>
                          Credential ID: {cert.credentialId.slice(0, 8)}…{cert.credentialId.slice(-4)}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://www.linkedin.com/in/afiq-aiman-420165281/details/certifications/" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-neutral-200 hover:bg-neutral-300 text-black rounded-lg transition">
            View All Certifications
          </a>
        </div>
      </div>
    </section>
  );
}
