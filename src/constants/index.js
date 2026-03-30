
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Platform Engineer",
    icon: web,
    Link: "https://github.com/HarshavardhanRobba"
  },
  {
    title: "Full Stack Developer",
    icon: backend,
    Link: "https://github.com/HarshavardhanRobba"
  },
  {
    title: "Data Engineer",
    icon: creator,
    Link: "https://github.com/HarshavardhanRobba"
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Conversational AI + ML Platform Engineer Intern",
    company_name: "Club InQuizitive",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jul 2023 - Dec 2023",
    points: [
      "After we passed 1,000+ users, I took ownership of our versioned REST APIs and shipped Dockerized Node services.",
      "When p95 latency spiked, I dug into Postgres query plans, fixed the worst queries/indexes, and got the API back to a stable state.",
      "To keep telemetry safe, I redacted PII from logs and tightened access with least-privilege.",
      "I wrote Python scripts to score conversational outputs with simple metrics/heuristics, tracked quality across releases.",
    ],
  },
  {
    title: "Data Engineer Intern",
    company_name: "JavaTpoint",
    icon: tekisky,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Feb 2022",
    points: [
      "For each new client dataset, I built Python/SQL ETL to ingest and clean the data into Postgres so analysts and modelers could use it.",
      "When our ETL started failing and slowing down, I cleaned up the Python transforms, added idempotent retries + unit tests.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Harsha proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Harsha does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Harsha optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Elara: Real-Time AI",
    description:
      "Built a real-time voice agent using OpenAI Realtime + Stream Video SDK that turns live STT into meeting summaries. Orchestrated Inngest workflows with retries/idempotency and logged JSONL KPIs for eval and monitoring.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/Harshavardhan-Robba",
  },
  {
    name: "Websito: Code-gen SaaS",
    description:
      "Built an agentic code-gen SaaS and orchestrated long-running Gemini 2.0 jobs with Inngest. Validated generations in E2B with tests + live previews and tracked usage for credits/billing.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "gemini",
        color: "green-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/Harshavardhan-Robba",
  },
  {
    name: "Brand Guardian AI",
    description:
      "Built an auditable LangGraph workflow and integrated Azure Video Indexer to capture compliance evidence. Implemented grounded RAG with Azure AI Search for traceable answers.",
    tags: [
      {
        name: "langgraph",
        color: "blue-text-gradient",
      },
      {
        name: "azure",
        color: "white-text-gradient",
      },
      {
        name: "rag",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Harshavardhan-Robba",
  },
];

export { services, technologies, experiences, testimonials, projects };
