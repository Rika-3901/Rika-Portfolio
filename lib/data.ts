import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import lokamarketImg from "@/public/lokamarket.jpg";
import historeImg from "@/public/histore.png";
import aniboxImg from "@/public/anibox.png";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Informatics Engineering Student",
    location: "Universitas Indraprasta PGRI",
    description:
      "Currently studying Informatics Engineering with a strong focus on web development and UI/UX design through both academic and real-world projects.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 – present",
  },
  {
    title: "Research & Development Division – Informatics Engineering Student Association",
    location: "Informatics Engineering Student Association",
    description:
      "Active in the Research and Development division. Contributed to organizing programs such as IT Talks, and Klik Fest Web Dev 2025, a seminar, bootcamp, and expo.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 – present",
  },
  {
    title: "PKM Smart Village – Kampus Merdeka Program",
    location: "Desa Ciherang, Kec. Pacet, Kab. Cianjur",
    description:
      "Developed an information system for Ciherang Village using Smart Mobility to promote tourism, with a virtual tour website.",
    icon: React.createElement(FaReact),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "LokaMarket E-Commerce",
    description: "A full-stack e-commerce website for local businesses.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: lokamarketImg,
    liveDemoUrl: "https://loka-market-2dfh.vercel.app/",
    codeUrl: "https://github.com/Rika-3901/LokaMarket",
  },
  {
    title: "Hi-Store",
    description: "Front-end of a web application dedicated to gaming products.",
    tags: ["CSS", "HTML", "JavaScript", "Figma"],
    imageUrl: historeImg,
    liveDemoUrl: "https://hi-store-web.vercel.app/",
    codeUrl: "https://github.com/Rika-3901/Hi-Store-web",
  },
  {
    title: "AniBox",
    description: "UI/UX design for an anime streaming application.",
    tags: ["Figma"],
    imageUrl: aniboxImg,
    liveDemoUrl: "https://www.figma.com/proto/CNB18TN8VylQCSjC1hGFFS/Untitled?node-id=0-1",
    codeUrl: "https://www.figma.com/design/CNB18TN8VylQCSjC1hGFFS/Untitled?node-id=0-1&t=tLERWNeOfFi26D8L-1n",
  },
] as const;

export const skillsData = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
  "Node.js", "Git", "Tailwind", "MongoDB", "PostgreSQL", "Figma", "Framer Motion", "Github",
] as const;
