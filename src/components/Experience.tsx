'use client';

export default function Experience() {
  const experiences = [
    {
      title: 'Data Science Intern',
      company: 'Petronas Digital Sdn Bhd · AI Innovation Team',
      period: 'May 2025 - December 2025',
      location: 'Kuala Lumpur, Malaysia',
      description: 'Agentic AI chatbot and knowledge management system',
      highlights: [
        'Added collection-aware retrieval to Petronas\' internal AI chatbot, so the agent only answers from the document collections a user has selected, whether they live in the pgvector store or the Neo4j knowledge graph.',
        'Wrote and tested FastAPI endpoints for creating collections, uploading and deleting files, running ingestion, chat and conversation history, and connected them to the team\'s backend services.',
        'Built the Streamlit interface for managing collections and files, and added a dedicated RAG agent into the team\'s LangGraph agent workflow.',
        'Set up the ingestion flow: documents get chunked, embedded with Azure OpenAI and stored in pgvector, or passed through entity extraction into Neo4j. Used Langfuse to trace each query\'s latency and token cost.',
      ],
      tags: ['LangGraph', 'FastAPI', 'pgvector', 'Neo4j', 'Azure OpenAI', 'Streamlit', 'Langfuse'],
      type: 'Internship',
    },
    {
      title: 'Co-founder & CTO',
      company: 'CarbonLit (Mission Zero)',
      period: '2025 - 2026',
      location: 'UTP, Perak, Malaysia',
      description: 'Carbon-tracking app built by a founding team of four',
      highlights: [
        'Built a carbon-tracking app in Flutter that runs on Android, iOS, web and desktop from a single codebase, with a Supabase (PostgreSQL) backend using row-level security and realtime sync.',
        'Added an AI sustainability advisor through the OpenRouter API, with fallback across several models (LLaMA 3.3, Gemini 2.0, Mistral, Qwen) so the feature keeps working if one provider fails.',
        'Wrote the emissions calculator around Malaysian data: Energy Commission grid factors, TNB appliance wattages and vehicle engine sizes. Also built a live leaderboard on Supabase Realtime.',
        'Led the technical work and QA in a founding team of four.',
      ],
      tags: ['Flutter', 'Dart', 'Supabase', 'PostgreSQL', 'OpenRouter'],
      type: 'Startup',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Professional Journey</h2>
          <p className="text-neutral-600">Experience and career progression</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg p-8 hover:bg-neutral-250 transition">
              <div className="flex justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-black">{exp.title}</h3>
                  <p className="text-black font-semibold">{exp.company}</p>
                </div>
                <span className="text-xs bg-black/10 text-black px-3 py-1 rounded-full whitespace-nowrap">
                  {exp.type}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-neutral-600 mb-4">
                <span className="grayscale">📅 {exp.period}</span>
                <span className="grayscale">🌍 {exp.location}</span>
              </div>

              <p className="text-neutral-600 italic mb-4">{exp.description}</p>

              <ul className="text-neutral-700 space-y-2 mb-6">
                {exp.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="text-black">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-neutral-200 pt-4 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-neutral-100 text-black px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
