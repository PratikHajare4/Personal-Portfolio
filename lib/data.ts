import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import braindumpImg from "@/public/Braindump.png"
import shopifyImg from "@/public/shopify.png"
import jobentryImg from "@/public/jobentry.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BSC : Shivaji Scinece Nagpur",
    location: "Nagpur, Maharashtra",
    description:
      "During my graduation I grasp the knowledge of Maths, Physics and electronics. Mathematics really helped he to sharp my problem-solving skill.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "MCA : Dr D Y Patil Institute of Management & Research",
    location: "Pune, Maharashtra",
    description:
      "My keen interest in technology led me to pursue Post graduation. That's why I am pursuing MCA from DYPIMR. During my studies I learned some of the technologies like Java, Python, HTML, CSS, JavaScript, React Js, Node Js. ",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "IT and Ui/Ux Intern at CFX.",
    location: "Pune, Maharashtra",
    description:
      "I'm now a full-stack developer Intern working at CFX. During this internship, I have gained hands-on experience in UI/UX and created designs for the same resulting in a better user experience. I also worked on the creation of frontend for our company website using HTML, CSS, JavaScript React Js. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "BrainDump",
    description:
      "This is a Note making android app, User can write, update and delete notes. Users can set reminders, give it a tag name, set priority and make deadlines  it is available in light, dark, and dynamic color theme. Implemented search functionality for searching by names and tag.",
    tags: ["Kotlin", "XML", "firebase", "Android studio", "Room persistence library"],
    imageUrl: braindumpImg,
  },
  {
    title: "Shopify",
    description:
      "The project involved developing and optimizing an e-commerce platform named Shopify. This encompassed designing an appealing and user-friendly online store, managing product listings with engaging content, ensuring secure payment processes, and implementing efficient order fulfillment procedures.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    imageUrl: shopifyImg,
  },
  {
    title: "JobEntry",
    description:
      "JobEntry portal service for job seekers and employers.Interactive job vacancy form for candidates Detailed job vacancy information. Vacancy posting for registered employers. Search functionality for employers and job seekers.",
    tags: ["HTML", "CSS", "SQL", "JavaScript", "PHP"],
    imageUrl: jobentryImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "GitHUB",
  "Tailwind",
  "MongoDB",
  "Express",
  "Python",
  "Java",
  "kotlin",
  "SQL",
  "PHP",
  "Android Development",
  "Framer Motion",
] as const;