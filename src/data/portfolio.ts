export const portfolioData = {
  name: "Nik Muhammad Afiq Aiman bin Mohd Ariff",
  title: "Data Scientist & Applied AI",
  description: "Final-year Computer Science student at UTP building RAG systems, LLM agents, NLP models and data pipelines",
  email: "afiq04aiman10@gmail.com",
  phone: "+60 11-5645 0439",
  location: "Kota Bharu, Kelantan, Malaysia",

  socials: {
    github: "https://github.com/cakuwar",
    linkedin: "https://linkedin.com/in/afiq-aiman-420165281",
  },

  skills: {
    programming: ["Python", "SQL", "C++", "Dart", "Java", "Data Pipelines", "Web Scraping"],
    machineLearning: ["HuggingFace Transformers", "PyTorch", "Text Classification", "Fine-tuning (XLM-RoBERTa)", "Model Evaluation & Calibration", "OCR (Tesseract)"],
    genAI: ["RAG", "LangChain", "LangGraph", "Azure OpenAI", "OpenRouter", "Langfuse"],
    databases: ["PostgreSQL", "pgvector", "Neo4j (Cypher)", "MySQL", "Supabase"],
    tools: ["FastAPI", "REST APIs", "Streamlit", "Git & GitHub", "PyMuPDF", "Canva", "Microsoft Excel"],
  },

  // Leave githubLink/liveLink empty to hide the button; add a URL to show it
  projects: [
    {
      id: 1,
      title: "RentSafe MY: Explainable Rental Scam Detection",
      description: "Rates the scam risk of Malaysian rental chats by combining a fine-tuned XLM-RoBERTa classifier and bilingual red-flag rules with a public complaint search and a rent comparison, then explains the score in Malay and English",
      technologies: ["Python", "PyTorch", "XLM-RoBERTa", "Tesseract OCR", "FastAPI", "Node.js", "React", "PostgreSQL"],
      githubLink: "",
      liveLink: "",
      featured: true,
    },
    {
      id: 2,
      title: "Commerce Pulse: E-Commerce Intelligence Dashboard",
      description: "Interactive D3.js dashboard over 96,127 delivered Olist orders with KPI cards, cross-filtering charts, drill-downs, a purchase heatmap and parallel coordinates",
      technologies: ["Python", "pandas", "D3.js"],
      githubLink: "",
      liveLink: "",
      featured: true,
    },
    {
      id: 3,
      title: "Agentic AI Chatbot & Knowledge Management",
      description: "Collection-aware retrieval across pgvector and Neo4j for Petronas' internal AI chatbot, with FastAPI endpoints, a Streamlit UI and a RAG agent in LangGraph",
      technologies: ["LangGraph", "FastAPI", "pgvector", "Neo4j", "Azure OpenAI", "Langfuse"],
      githubLink: "",
      liveLink: "",
      featured: true,
    },
    {
      id: 4,
      title: "CarbonLit: Mission Zero",
      description: "Cross-platform carbon-tracking app with a Malaysian emissions calculator, an AI sustainability advisor and a live leaderboard",
      technologies: ["Flutter", "Dart", "Supabase", "OpenRouter"],
      githubLink: "",
      liveLink: "",
      featured: false,
    },
    {
      id: 5,
      title: "Music Festival Database System",
      description: "Normalised MySQL database to organise festival information, with schema anomalies fixed to keep the data consistent",
      technologies: ["MySQL", "Database Design"],
      githubLink: "",
      liveLink: "",
      featured: false,
    },
  ],

  experience: [
    {
      company: "Petronas Digital Sdn Bhd · AI Innovation Team",
      position: "Data Science Intern",
      duration: "May 2025 - Dec 2025",
      description: "Added collection-aware retrieval across pgvector and Neo4j to Petronas' internal AI chatbot, wrote the FastAPI endpoints and Streamlit UI, and set up the document ingestion flow with Azure OpenAI embeddings and Langfuse tracing",
    },
    {
      company: "CarbonLit (Mission Zero), UTP",
      position: "Co-founder & CTO",
      duration: "2025 - 2026",
      description: "Led the technical work and QA in a founding team of four, building a Flutter carbon-tracking app on Supabase with a multi-model AI sustainability advisor",
    },
  ],

  education: [
    {
      school: "Universiti Teknologi PETRONAS (UTP)",
      degree: "B.Sc. (Hons) Computer Science",
      details: "CGPA 3.55 · Dean's List (Semesters 1, 3 & 6)",
      year: "Expected Dec 2026",
    },
    {
      school: "Kolej MARA Kuala Nerang (KMKN)",
      degree: "Foundation in Engineering & Technology",
      details: "CGPA 3.96 · Dean's List every semester · MUET Band 3.5",
      year: "Aug 2022 - Jun 2023",
    },
    {
      school: "Maahad Sains Tok Guru (MSTG)",
      degree: "Secondary Education (SPM & SMU)",
      details: "SPM: 11A 1B · Sijil Menengah Ugama: 11 Mumtaz",
      year: "Jan 2017 - Mar 2022",
    },
  ],
};
