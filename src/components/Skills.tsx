'use client';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming & Data',
      skills: ['Python', 'SQL', 'C++', 'Dart', 'Java', 'pandas', 'Data Pipelines', 'Web Scraping']
    },
    {
      title: 'Machine Learning & NLP',
      skills: ['HuggingFace Transformers', 'PyTorch', 'Fine-tuning Transformers (XLM-RoBERTa)', 'Text Classification', 'Model Evaluation & Calibration', 'OCR (Tesseract)']
    },
    {
      title: 'GenAI & LLM',
      skills: ['RAG', 'LangChain', 'LangGraph', 'Agent Workflows', 'Azure OpenAI', 'OpenRouter', 'Vector & Graph Retrieval', 'Langfuse']
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'pgvector', 'Neo4j (Cypher)', 'MySQL', 'Redis', 'Supabase', 'Embeddings']
    },
    {
      title: 'Frameworks & Tools',
      skills: ['FastAPI', 'REST APIs', 'Node.js & Express', 'Streamlit', 'Flutter', 'React', 'D3.js', 'Git & GitHub', 'PyMuPDF', 'Canva', 'Microsoft Excel']
    },
    {
      title: 'Spoken Languages',
      skills: ['Malay', 'English', 'Arabic (Intermediate)', 'Mandarin (Basic)']
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Skills & Expertise</h2>
          <p className="text-neutral-600">Technologies and tools I&apos;ve worked with</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-neutral-100 rounded-lg p-8">
              <h3 className="text-xl font-bold text-black mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-neutral-200 text-neutral-700 px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white transition"
                  >
                    {skill}
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
