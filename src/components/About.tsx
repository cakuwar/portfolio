'use client';

export default function About() {
  const skills = [
    { title: 'Retrieval & RAG', description: 'Collection-aware retrieval over pgvector stores and Neo4j knowledge graphs' },
    { title: 'Agentic AI Workflows', description: 'Agent workflows with LangChain and LangGraph, traced with Langfuse for latency and token cost' },
    { title: 'NLP & Machine Learning', description: 'Fine-tuning transformers with HuggingFace and PyTorch, testing them beyond validation accuracy, and OCR' },
    { title: 'Data Engineering', description: 'Web scrapers and ingestion pipelines: chunking, embedding and loading into PostgreSQL' },
    { title: 'Backend Development', description: 'FastAPI endpoints, REST APIs and Streamlit interfaces connected to backend services' },
    { title: 'Data Visualization', description: 'Interactive D3.js dashboards with cross-filtering, drill-downs and heatmaps' },
  ];

  return (
    <section id="about" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
          <p className="text-neutral-600">Who I am and what I work on</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-black mb-6">Background</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              I am a final-year Computer Science student at Universiti Teknologi PETRONAS (UTP), graduating in December 2026 with a CGPA of 3.55 and Dean&apos;s List awards in Semesters 1, 3 and 6. I am looking for a data scientist or applied AI role in Malaysia.
            </p>
            <p className="text-neutral-700 leading-relaxed mb-4">
              During my eight-month internship with the AI Innovation Team at Petronas Digital, I worked on the company&apos;s internal AI chatbot: adding collection-aware retrieval across pgvector and Neo4j, writing the FastAPI endpoints and setting up the document ingestion flow.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              For my final year project I built RentSafe MY, a web platform that rates the scam risk of Malaysian rental chats. It combines a fine-tuned XLM-RoBERTa classifier with a public complaint search and a rent comparison, and explains the score in plain Malay and English. I also co-founded CarbonLit, a carbon-tracking app, as CTO.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8">
            <h3 className="text-2xl font-bold text-black mb-6">Key Focus Areas</h3>
            <div className="space-y-4">
              <div>
                <p className="text-black font-semibold">GenAI & LLMs</p>
                <p className="text-neutral-600 text-sm">RAG, agent workflows with LangChain and LangGraph, LLM APIs (Azure OpenAI, OpenRouter)</p>
              </div>
              <div>
                <p className="text-black font-semibold">Machine Learning & NLP</p>
                <p className="text-neutral-600 text-sm">Fine-tuning transformers, text classification, robustness testing with minimal pairs, and OCR</p>
              </div>
              <div>
                <p className="text-black font-semibold">Data Systems</p>
                <p className="text-neutral-600 text-sm">Data pipelines, web scraping, PostgreSQL, pgvector and Neo4j</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-black mb-8">My Expertise</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white rounded-lg p-8 hover:bg-neutral-250 transition">
                <div className="w-12 h-12 bg-black rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-black text-2xl grayscale">⚡</span>
                </div>
                <h4 className="text-xl font-bold text-black mb-2">{skill.title}</h4>
                <p className="text-neutral-600 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
