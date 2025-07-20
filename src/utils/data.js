import { FiGithub, FiLinkedin, FiTwitter, } from "react-icons/fi";
import { Code2, Server, Settings, MonitorSmartphone, MapPin, Mail, Phone } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import PROFILE_PIC from "../assets/images/profile_pic.jpg";
import { hover } from "framer-motion";

import Project1 from "/DashBoard.png"
import Project2 from "../assets/images/project2.png"


export const PROFILE = {
  name: "Ashwin Haragi",
  role: "Full Stack Developer",
  location: "India",
  profilePic: PROFILE_PIC,
  shortIntro: "I build responsive full-stack web applications with clean UI and smooth UX.",
};

// Skills Section
export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: MonitorSmartphone,
    description: "Crafting beautiful, responsive user interfaces",
    skills: [
      { name: "React", level: 95, color: "bg-blue-500" },
      { name: "TypeScript", level: 90, color: "bg-blue-600" },
      { name: "Next.js", level: 88, color: "bg-gray-800" },
      { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
      { name: "Framer Motion", level: 85, color: "bg-pink-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building scalable and secure server-side applications",
    skills: [
      { name: "Node.js", level: 88, color: "bg-green-600" },
      { name: "Express.js", level: 85, color: "bg-gray-700" },
      { name: "MongoDB", level: 80, color: "bg-green-500" },
      { name: "Firebase", level: 75, color: "bg-yellow-400" },
    ],
  },
  {
    title: "DevOps",
    icon: Settings,
    description: "Automating deployments and maintaining infrastructure",
    skills: [
      { name: "Docker", level: 70, color: "bg-blue-700" },
      { name: "GitHub Actions", level: 68, color: "bg-gray-600" },
      { name: "Netlify", level: 75, color: "bg-teal-500" },
    ],
  },
  {
    title: "Tools & Others",
    icon: Code2,
    description: "Supporting tools for productivity and design",
    skills: [
      { name: "Figma", level: 80, color: "bg-pink-400" },
      { name: "VS Code", level: 95, color: "bg-indigo-500" },
      { name: "Postman", level: 90, color: "bg-orange-400" },
    ],
  },
];

// Tech Stack Logos
export const TECH_STACK = [
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Vite",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
];

// Statistics Section
export const STATS = [
  { number: "3+", label: "Projects completed" },
  // { number: "3+", label: "Years experience" },
  { number: "10+", label: "Technologies used" },
  // { number: "100%", label: "Client satisfaction" },
];

// Projects (Optional)
export const PROJECTS = [
  {
    id:1,
    title: "Expense-Tracker aka StashUp",
    description: "Expense Tracker is a simple web app to record daily transactions and monitor your income, expenses, and balance in real-time.",
    image:Project1,
    tags: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/Ashwin-RH/Expense-Tracker",
    liveUrl: "https://stashup.vercel.app/",
    featured: true,
    category:"Full Stack"
  },
  {
    id:2,
    title: "Calculator",
    description: "A modern React-based calculator with a clean Tailwind CSS UI. Supports basic arithmetic and unit conversions like currency, weight, area, speed, and temperature.",
    image:Project2,
    tags: ["React", "Context API", "Tailwind CSS"],
    githubUrl: "https://github.com/Ashwin-RH/Calculator",
    liveUrl: "https://eval-calci.vercel.app/",
    featured:false,
    category:"web app"
  },
   {
    id:3,
    title: "Blog App",
    description: "Track your monthly expenses with charts, categories, and dark mode.",
    
    tags: ["React", "Context API", "Tailwind CSS"],
    githubUrl: "https://github.com/your-username/expense-tracker",
    liveUrl: "https://expense-tracker.vercel.app",
    featured:false,
    category:"web app"
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/Ashwin-RH",
    color: "hover:text-orange-400",
    bgcolor: "hover:bg-orange-500/10"
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://linkedin.com/in/ashwin-rh-aa263b217",
    color: "hover:text-blue-400",
    bgcolor: "hover:bg-blue-500/10"
  },
  {
    name: "X / Twitter ",
    icon: FaXTwitter,
    url: "https://x.com/Ashwinharagi",
    color: "hover:text-sky-500",
    bgcolor: "hover:bg-sky-500/10"
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:ashwinharagi@gmail.com",
    color: "hover:text-green-400",
    bgcolor: "hover:bg-green-500/10"
  },
];

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore"
  },
  {
    icon: Mail,
    label: "Email",
    value: "ashwinharagi@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8310776782"
  },
];
