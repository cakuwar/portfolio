// Shared by the Featured Projects section and the project showcase carousel.
// Leave github/live empty to hide the button; add a URL to show it.
// Screenshots live in public/images/projects; the first one is the cover image.
export type Screenshot = { src: string; caption: string };

export type Project = {
  id: string;
  title: string;
  meta: string;
  description: string;
  tags: string[];
  category: string;
  image: string;
  screenshots: Screenshot[];
  github: string;
  live: string;
};

export const projects: Project[] = [
  {
    id: 'rentsafe-my',
    title: 'RentSafe MY: Explainable Rental Scam Detection',
    meta: 'Final Year Project · 2026',
    description: 'Rates the scam risk of a Malaysian rental chat in English, Malay or Manglish, pasted as text or uploaded as WhatsApp screenshots. A fine-tuned XLM-RoBERTa classifier and 26 bilingual red-flag rules read the chat, a web search looks for public complaints about the agent, and the rent is compared with 14,106 Kuala Lumpur and Selangor listings. The three signals add up to a deterministic 0–100 score, which an LLM explains in Malay and English. My first classifier scored 99% on validation but only 44% on chats written in new wording, because it had learned shortcuts such as message length. Retraining it on minimal scam/legitimate pairs raised that to 97%. In a blind test on 15 unseen chats it caught all 10 scams and gave 2 false alarms on the 5 role-played legitimate chats.',
    tags: ['Python', 'PyTorch', 'HuggingFace', 'XLM-RoBERTa', 'Tesseract OCR', 'FastAPI', 'Node.js', 'React', 'PostgreSQL', 'Redis'],
    category: 'ai',
    image: '🏠',
    screenshots: [],
    github: '',
    live: ''
  },
  {
    id: 'commerce-pulse',
    title: 'Commerce Pulse: E-Commerce Intelligence Dashboard',
    meta: 'Data Visualization course project · May 2026',
    description: 'Cleaned and joined 7 tables from the Olist Brazilian e-commerce dataset with pandas, keeping 96,127 delivered orders and engineering features such as delivery days and delay against the promised date. Built an interactive D3.js dashboard with KPI cards, cross-filtering charts, state-to-city drill-downs, a day-by-hour purchase heatmap, brushable parallel coordinates and auto-generated insights, with Kids, Analyst and Easy view modes for different audiences.',
    tags: ['Python', 'pandas', 'D3.js', 'JavaScript', 'Data Visualization'],
    category: 'data',
    image: '📈',
    screenshots: [
      { src: '/images/projects/commerce-pulse/overview.png', caption: 'Overview: KPI cards, monthly revenue and orders trend, and payment mix' },
      { src: '/images/projects/commerce-pulse/state-drilldown.png', caption: 'Cross-filtering by state with a drill-down into its top cities' },
      { src: '/images/projects/commerce-pulse/advanced-analytics.png', caption: 'Day-by-hour purchase heatmap and brushable parallel coordinates' },
      { src: '/images/projects/commerce-pulse/insights.png', caption: 'Insights and recommendations computed live from the filtered data' },
      { src: '/images/projects/commerce-pulse/kids-mode.png', caption: 'Kids mode: a simplified, colourful view for young users' },
    ],
    github: 'https://github.com/cakuwar/olist-dashboard',
    live: 'https://cakuwar.github.io/olist-dashboard/'
  },
  {
    id: 'agentic-ai-chatbot',
    title: 'Agentic AI Chatbot & Knowledge Management',
    meta: 'Petronas Digital · 2025',
    description: 'Collection-aware retrieval for Petronas\' internal AI chatbot across a pgvector store and a Neo4j knowledge graph. Includes FastAPI endpoints for collections, files, ingestion and chat, a Streamlit management UI, a RAG agent in the LangGraph workflow and Langfuse tracing.',
    tags: ['LangGraph', 'FastAPI', 'pgvector', 'Neo4j', 'Azure OpenAI', 'Langfuse'],
    category: 'ai',
    image: '🤖',
    screenshots: [],
    github: '',
    live: ''
  },
  {
    id: 'carbonlit',
    title: 'CarbonLit: Mission Zero',
    meta: 'Co-founder & CTO · 2025 - 2026',
    description: 'Cross-platform carbon-tracking app for Android, iOS, web and desktop. Features an emissions calculator built on Malaysian grid, appliance and vehicle data, an AI sustainability advisor with multi-model fallback through OpenRouter, and a live leaderboard on Supabase Realtime.',
    tags: ['Flutter', 'Dart', 'Supabase', 'OpenRouter'],
    category: 'apps',
    image: '🌱',
    screenshots: [
      { src: '/images/projects/carbonlit/cover.png', caption: 'Home, results and transport screens' },
      { src: '/images/projects/carbonlit/home.png', caption: 'Home: quick access to the carbon calculator, leaderboard and dashboard' },
      { src: '/images/projects/carbonlit/results.png', caption: 'Results: daily footprint by category, a breakdown chart and reduction suggestions' },
      { src: '/images/projects/carbonlit/calculator.png', caption: 'Carbon calculator covering transport, gadgets and accommodation' },
      { src: '/images/projects/carbonlit/transport.png', caption: 'Transport calculator with a live map and vehicle, fuel and engine-size options' },
      { src: '/images/projects/carbonlit/gadgets.png', caption: 'Gadget calculator: device presets with wattage ranges and saved devices' },
      { src: '/images/projects/carbonlit/appliances.png', caption: 'Accommodation calculator: appliance use converted to kg CO₂e with Malaysia’s grid factor' },
      { src: '/images/projects/carbonlit/leaderboard.png', caption: 'Live leaderboard powered by Supabase Realtime' },
    ],
    github: 'https://github.com/cakuwar/carbonlit',
    live: ''
  },
  {
    id: 'music-festival-db',
    title: 'Music Festival Database System',
    meta: 'Academic project · 2024',
    description: 'Designed and built a normalised MySQL database to organise festival information, and fixed anomalies in the schema to keep the data consistent.',
    tags: ['MySQL', 'phpMyAdmin', 'Database Design'],
    category: 'data',
    image: '🎵',
    screenshots: [],
    github: '',
    live: ''
  },
  {
    id: 'uscore',
    title: 'University Grading System (Uscore)',
    meta: 'Academic project',
    description: 'Developed a comprehensive grading system with secure login, dynamic CRUD operations, and automated calculation. Generates accurate performance reports and handles student data management.',
    tags: ['C++', 'Database', 'System Design'],
    category: 'apps',
    image: '📊',
    screenshots: [],
    github: '',
    live: ''
  },
];

export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI & ML' },
  { id: 'data', label: 'Data' },
  { id: 'apps', label: 'Apps' },
];
