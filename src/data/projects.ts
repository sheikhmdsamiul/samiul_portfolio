export type ProjectCategory = "Backend" | "AI/ML" | "NLP" | "Full-Stack";

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectFlow {
  problem: string;
  approach: string[];
  architecture?: string;
  result: string;
}

export interface Project {
  id: string;
  index: string;
  title: string;
  tagline: string;
  summary: string;
  category: ProjectCategory[];
  context: string;
  stack: string[];
  metric?: ProjectMetric;
  github?: string;
  flow: ProjectFlow;
  aiPipeline?: boolean;
  visual: "bars" | "network" | "chat" | "text" | "shield";
}

export const projects: Project[] = [
  {
    id: "lesotho-rbf",
    index: "01",
    title: "Renewable Lesotho RBF Platform",
    tagline: "Results-Based Financing platform for renewable-energy vendors.",
    summary:
      "Backend features for a live production platform financing renewable-energy vendors in Lesotho — vendor onboarding, secure auth, notifications, and automated reporting.",
    category: ["Backend", "Full-Stack"],
    context: "Production — industry",
    stack: ["Python", "Django", "PostgreSQL", "Celery", "Docker", "Puppeteer", "openpyxl"],
    metric: { value: "Live", label: "Production platform" },
    github: "https://github.com/sheikhmdsamiul/renewable-lesotho-rbf-platform-1",
    flow: {
      problem:
        "Support renewable-energy vendors in Lesotho through a Results-Based Financing platform — from registration and verification through tender workflows and reporting.",
      approach: [
        "Built the vendor registration & authentication module with OTP verification, role-based access control, and auto-generated vendor IDs.",
        "Designed a Celery-based notification engine surfacing tender updates to vendors.",
        "Built PDF (Puppeteer) and Excel (openpyxl) export pipelines feeding dashboard reporting.",
      ],
      architecture:
        "Django services · PostgreSQL · Celery task queue · Docker for containerized environments and staging deployment.",
      result: "Shipped and maintained in a live production environment supporting real vendors.",
    },
    visual: "bars",
  },
  {
    id: "question-pair",
    index: "02",
    title: "Question-Pair Similarity Classifier",
    tagline: "Siamese BiLSTM detecting semantically similar questions.",
    summary:
      "An NLP system identifying semantically similar question pairs with a Siamese BiLSTM, lexical features, interaction features, and frozen GloVe embeddings.",
    category: ["AI/ML", "NLP"],
    context: "Research",
    stack: ["Python", "TensorFlow", "GloVe", "NLP"],
    metric: { value: "0.9275", label: "AUC" },
    github: "https://github.com/sheikhmdsamiul/Question-Pair-Similarity-Classification",
    aiPipeline: true,
    flow: {
      problem: "Determine whether two questions are semantically similar — a core NLP matching task.",
      approach: [
        "Engineered a Siamese BiLSTM with learned interaction features on top of frozen GloVe embeddings.",
        "Integrated lexical features to complement semantic representations.",
        "Addressed class imbalance with targeted resampling.",
      ],
      architecture:
        "Data → preprocessing & GloVe embedding → Siamese BiLSTM with interaction features → similarity classification → thresholded evaluation.",
      result: "Achieved 0.9275 AUC and 91.6% recall on the evaluation set.",
    },
    visual: "network",
  },
  {
    id: "edu-assistant",
    index: "03",
    title: "AI-Powered Educational Content Assistant",
    tagline: "RAG-based Q&A, content distillation, and auto-graded quizzes.",
    summary:
      "A full-stack AI application with re-ranking RAG for conversational Q&A, TextRank-based key-sentence highlighting, OCR ingestion, and an automated quiz system.",
    category: ["AI/ML", "NLP", "Full-Stack"],
    context: "Personal",
    stack: ["Python", "Hugging Face", "LangChain", "Groq API", "Streamlit", "OCR", "Summa-TextRank"],
    metric: { value: "RAG", label: "with re-ranking" },
    github: "https://github.com/sheikhmdsamiul/Educational-Content-Enhancement-Using-LLMs",
    aiPipeline: true,
    flow: {
      problem:
        "Give learners an assistant that answers contextually from their own material — with digestible summaries and instant learning checks.",
      approach: [
        "RAG pipeline with re-ranking for improved retrieval quality.",
        "Conversational, context-aware Q&A bot.",
        "Key-sentence highlighting via Summa-TextRank for content distillation.",
        "Automated quiz generation and assessment with instant evaluation, plus OCR for scanned material.",
      ],
      architecture:
        "Study material → OCR / parsing → chunk & embed → retrieval + re-ranking → context-aware Q&A → automated quiz evaluation.",
      result: "A working full-stack product: ingestion, retrieval, Q&A, and instant assessment in one flow.",
    },
    visual: "chat",
  },
  {
    id: "t5-summarization",
    index: "04",
    title: "Text Summarization with Fine-tuned T5",
    tagline: "Custom abstractive summarization built on Google's T5.",
    summary:
      "Fine-tuned Google's T5 for abstractive summarization with an end-to-end pipeline using PyTorch Lightning and the Hugging Face ecosystem.",
    category: ["AI/ML", "NLP"],
    context: "Research",
    stack: ["Python", "PyTorch", "Hugging Face", "PyTorch Lightning"],
    github: "https://github.com/sheikhmdsamiul/Fine-tuned-T5-for-Text-Summarization",
    aiPipeline: true,
    flow: {
      problem: "Produce coherent, abstractive summaries of long-form text.",
      approach: [
        "Fine-tuned T5 with the Hugging Face Transformers ecosystem.",
        "Built reproducible data preprocessing, training, and evaluation pipelines with PyTorch Lightning.",
        "Complemented abstractive output with extractive key-sentence distillation.",
      ],
      architecture:
        "Corpus → tokenization & preprocessing → fine-tune T5 (PyTorch Lightning) → abstractive summary → extractive highlighting.",
      result: "A fine-tuned T5 summarizer with clean, reproducible training and evaluation paths.",
    },
    visual: "text",
  },
  {
    id: "toxic-classifier",
    index: "05",
    title: "Offensive Language Classification",
    tagline: "LSTM with attention detecting toxic and offensive text.",
    summary:
      "A deep-learning toxic-language classifier pairing a Logistic Regression baseline with an LSTM + attention primary model, using robust preprocessing and imbalance handling.",
    category: ["AI/ML", "NLP"],
    context: "Academic",
    stack: ["Python", "Scikit-learn", "TensorFlow/Keras", "NLTK"],
    metric: { value: "80%", label: "Accuracy" },
    github: "https://github.com/sheikhmdsamiul/Offensive-Language-Classification",
    aiPipeline: true,
    flow: {
      problem: "Detect offensive and toxic language robustly across noisy, imbalanced text.",
      approach: [
        "Clean preprocessing and tokenization with NLTK.",
        "Logistic Regression as a strong baseline model.",
        "LSTM with attention as the primary classifying architecture.",
        "Handled class imbalance through careful rebalancing.",
      ],
      architecture:
        "Text → NLTK preprocessing → baseline (Logistic Regression) + primary (LSTM + attention) → evaluation with imbalance handling.",
      result: "Reached 80% accuracy on the toxic-language classification task.",
    },
    visual: "shield",
  },
];