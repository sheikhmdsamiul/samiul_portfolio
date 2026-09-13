export interface Skill {
  name: string;
  usedIn?: string[];
}

export interface SkillCluster {
  id: string;
  index: string;
  title: string;
  note: string;
  skills: Skill[];
}

export const skillClusters: SkillCluster[] = [
  {
    id: "aiml",
    index: "01",
    title: "AI/ML & NLP",
    note: "Deep learning, transformers, retrieval and language systems.",
    skills: [
      { name: "Python", usedIn: ["lesotho-rbf", "question-pair", "edu-assistant", "t5-summarization", "toxic-classifier"] },
      { name: "TensorFlow", usedIn: ["question-pair", "toxic-classifier"] },
      { name: "PyTorch", usedIn: ["t5-summarization"] },
      { name: "PyTorch Lightning", usedIn: ["t5-summarization"] },
      { name: "Hugging Face", usedIn: ["edu-assistant", "t5-summarization"] },
      { name: "Scikit-learn", usedIn: ["toxic-classifier"] },
      { name: "NLTK", usedIn: ["toxic-classifier"] },
      { name: "GloVe", usedIn: ["question-pair"] },
      { name: "RAG", usedIn: ["edu-assistant"] },
      { name: "LangChain", usedIn: ["edu-assistant"] },
    ],
  },
  {
    id: "backend",
    index: "02",
    title: "Backend",
    note: "APIs, services, task queues and reporting pipelines.",
    skills: [
      { name: "Django", usedIn: ["lesotho-rbf"] },
      { name: "FastAPI" },
      { name: "RESTful APIs" },
      { name: "Celery", usedIn: ["lesotho-rbf"] },
      { name: "Streamlit", usedIn: ["edu-assistant"] },
      { name: "Puppeteer", usedIn: ["lesotho-rbf"] },
    ],
  },
  {
    id: "programming",
    index: "03",
    title: "Programming",
    note: "Languages I write day to day.",
    skills: [
      { name: "Python", usedIn: ["lesotho-rbf", "question-pair", "edu-assistant", "t5-summarization", "toxic-classifier"] },
      { name: "Java" },
      { name: "C / C++" },
      { name: "SQL" },
    ],
  },
  {
    id: "data",
    index: "04",
    title: "Data",
    note: "Analysis, visualization, and exports.",
    skills: [
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Matplotlib" },
      { name: "Seaborn" },
      { name: "openpyxl", usedIn: ["lesotho-rbf"] },
    ],
  },
  {
    id: "databases",
    index: "05",
    title: "Databases",
    note: "Relational storage and queries.",
    skills: [
      { name: "PostgreSQL", usedIn: ["lesotho-rbf"] },
      { name: "MySQL" },
    ],
  },
  {
    id: "infra",
    index: "06",
    title: "Infrastructure",
    note: "Containerization and delivery.",
    skills: [
      { name: "Docker", usedIn: ["lesotho-rbf"] },
      { name: "GitHub" },
    ],
  },
  {
    id: "core",
    index: "07",
    title: "Core CS",
    note: "The fundamentals underneath.",
    skills: [{ name: "Data Structures & Algorithms" }, { name: "OOP" }, { name: "System Architecture" }],
  },
];