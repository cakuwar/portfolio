'use client';

export default function Education() {
  const education = [
    {
      degree: 'B.Sc. (Hons) Computer Science',
      school: 'Universiti Teknologi PETRONAS (UTP)',
      period: 'September 2023 - December 2026 (Expected)',
      location: 'Perak, Malaysia',
      description: 'CGPA 3.55. Dean\'s List Award recipient for Semesters 1, 3 and 6.',
      coursework: ['Artificial Intelligence', 'Object-Oriented Programming', 'Data Visualization', 'Big Data Analytics'],
      logo: '🎓'
    },
    {
      degree: 'Foundation in Engineering & Technology',
      school: 'Kolej MARA Kuala Nerang (KMKN)',
      period: 'August 2022 - June 2023',
      location: 'Kedah, Malaysia',
      description: 'CGPA 3.96. Dean\'s List every semester. MUET Band 3.5.',
      coursework: [],
      logo: '🎓'
    },
    {
      degree: 'Secondary Education (SPM & SMU)',
      school: 'Maahad Sains Tok Guru (MSTG)',
      period: 'January 2017 - March 2022',
      location: 'Kelantan, Malaysia',
      description: 'SPM: 11A 1B. Sijil Menengah Ugama: 11 Mumtaz.',
      coursework: [],
      logo: '🏫'
    },
  ];

  return (
    <section id="education" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Education</h2>
          <p className="text-neutral-600">Academic background and continuous learning</p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-lg p-8">
              <div className="flex items-start gap-6">
                <div className="text-4xl flex-shrink-0 grayscale">{edu.logo}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-2">{edu.degree}</h3>
                  <p className="text-black font-semibold mb-2">{edu.school}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-neutral-600 mb-4">
                    <span className="grayscale">📅 {edu.period}</span>
                    <span className="grayscale">🌍 {edu.location}</span>
                  </div>

                  <p className="text-neutral-700">{edu.description}</p>

                  {edu.coursework.length > 0 && (
                    <div className="border-t border-neutral-200 pt-4 mt-4">
                      <p className="text-sm text-neutral-600">
                        <strong>Relevant Coursework:</strong>
                      </p>
                      <ul className="text-neutral-600 text-sm mt-2 space-y-1">
                        {edu.coursework.map((course) => (
                          <li key={course}>▹ {course}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
