import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  aws,
  coding,
 // backend1,
  frontend,
  java1,
  python,
  iiitdharwad,
  srichaitanya,
  kkrschool,
  protasker,
  clusterskills,
  portfolio,
  nextjs1,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: coding,
  },
  {
    title: "Front-end Developer",
    icon: frontend,
  },
 // {
 //   title: "Backend Developer",
 //   icon: backend1,
 // },
  {
    title: "AWS Cloud Developer",
    icon: aws,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Java",
    icon: java1,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Nextjs",
    icon: nextjs1,
  },
];

const educations = [
  {
    title: "B.Tech",
    name1: "Electronics & Communication Engineering",
    name: "Indian Institute of Information Technology, Dharwad",
    icon: iiitdharwad,
    iconBg: "#bbbcbf",  
    date: "December 2020 - May 2024",
    points: [
      "Microprocessors and Micro Controllers, Embedded Systems & Cellular Communication.",
      "Data Structures, Design and Analysis of Algorithms & Computer Architecture.",
      "Machine Learning, Deep Learning, Basics of NLP, & Data Analytics for HealthCare. ",
    ],
  },
  {
    title: "Class XII",
    name: "Board of Intermediate Education, Andhra Pradesh",
    icon: srichaitanya,
    iconBg: "#383E56",
    date: "March 2019",
    points: [
      "Course Works: Physics, Chemistry, Maths.",
      "Studied at Sri Chaitanya Junior Kalasala, Vijayawada.",
    ],
  },
  {
    title: "Class X",
    name: "Board of Secondary Education, Andhra Pradesh",
    icon: kkrschool,
    iconBg: "#383E56",
    date: "March 2017",
    points: ["Studied at Dr. KKR's Gowtham School, Guntur."],
  },
];

const experiences = [
  {
    title: "Class X",
    name: "Board of Secondary Education, Andhra Pradesh",
    icon: kkrschool,
    iconBg: "#383E56",
    date: "March 2017",
    points: ["Studied at Dr. KKR's Gowtham School, Guntur."],
  },
];

const testimonials = [
 // {
 //   testimonial:
//      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//    name: "Sara Lee",
 //   designation: "CFO",
 //   company: "Acme Co",
 //   image: "https://randomuser.me/api/portraits/women/4.jpg",
 // },
 // {
  //  testimonial:
 //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
 //   name: "Chris Brown",
 //   designation: "COO",
 //   company: "DEF Corp",
 //   image: "https://randomuser.me/api/portraits/men/5.jpg",
 // },
 // {
 //   testimonial:
 //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
 //   name: "Lisa Wang",
 //   designation: "CTO",
 //   company: "456 Enterprises",
 //   image: "https://randomuser.me/api/portraits/women/6.jpg",
//  },
];

const projects = [
  {
    name: "My Portfolio",
    description:
      "Engineered a dynamic portfolio website offering immersive 3D graphics, seamless user interactions, responsive design, email integration, and optimized performance across all devices.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/rahulch1907/rahul_portfolio.git",
  },
  {
    name: "ProTasker",
    description:
      "Comprehensive full-stack solution and Trello clone featuring workspaces, boards, lists, cards, audit logs, and member role management for organized and collaborative task management.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: protasker,
    source_code_link: "https://github.com/rahulch1907/trello-clone-project.git",
  },
  {
    name: "Cluster Skills",
    description:
      "A modern Learning Management System (LMS) offering seamless course navigation, progress tracking, chapter management, and dynamic user experiences for enhanced learning journeys.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: clusterskills,
    source_code_link: "https://github.com/rahulch1907/lms-tutorial.git",
  },
];

export { services, technologies, experiences, educations, testimonials, projects };     //
