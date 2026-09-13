export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  location: string;
  current: boolean;
  stack: string[];
  summary: string;
  highlights: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Junior Python Developer",
    company: "Dream71 Bangladesh Ltd.",
    period: "Dec 2025 — Present",
    location: "Dhaka, Bangladesh",
    current: true,
    stack: ["Python", "Django", "FastAPI", "Docker", "PostgreSQL", "MySQL"],
    summary:
      "Building production backend services for mobile and web software at a Dhaka software house, shipped iteratively under agile delivery.",
    highlights: [
      "Develop server-side logic in Python for production web-based software, following agile methodologies and team coding standards.",
      "Dockerize applications and deploy updates to the staging server, configuring and maintaining containerized environments for testing and iterative development.",
      "Collaborate with cross-functional team members to translate project requirements into functional technical solutions, consistently meeting project deadlines.",
    ],
  },
];

export const education = {
  degree: "B.Sc. in Computer Science & Engineering",
  university: "North South University",
  period: "Graduated Dec 2024",
  trail: "Artificial Intelligence Trail",
  summary:
    "Graduated on the Artificial Intelligence Trail, blending a rigorous software engineering core with machine-learning specialization.",
  coursework: [
    "Data Structures & Algorithms",
    "Software Engineering",
    "Database Management Systems",
    "Artificial Intelligence",
    "Machine Learning",
    "Pattern Recognition",
  ],
} as const;

export interface Certification {
  title: string;
  issuer: string;
  period: string;
  credential: string;
  verifyUrl: string;
  summary: string;
  tags: string[];
}

const verify = (id: string) =>
  `https://www.coursera.org/account/accomplishments/verify/${id}`;

export const certifications: Certification[] = [
  {
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI · Coursera",
    period: "Jul 2025",
    credential: "53FB5CB1BI3M",
    verifyUrl: verify("53FB5CB1BI3M"),
    summary: "Neural networks, backpropagation, and best practices for reliable model development.",
    tags: ["Neural Networks", "TensorFlow"],
  },
  {
    title: "Supervised Machine Learning: Regression & Classification",
    issuer: "DeepLearning.AI · Coursera",
    period: "Jul 2025",
    credential: "ETC3330HGZBR",
    verifyUrl: verify("ETC3330HGZBR"),
    summary: "Linear & logistic regression, gradient descent, and vectorization — the foundations of supervised learning.",
    tags: ["Regression", "Classification"],
  },
];