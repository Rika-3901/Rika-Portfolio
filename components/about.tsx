"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
          I’m an <span className="font-medium">Informatics Engineering student</span> with a strong passion for technology,
          especially in web development and UI/UX design. I love creating websites that are not only functional
          but also <span className="italic">clean</span>, <span className="italic">visually pleasing</span>, and
          easy to use. My interest in UI/UX helps me pay attention to the little details that make a big difference
          in user experience.
        </p>

        <p>
          Outside of tech, I enjoy <span className="font-medium">drawing</span> as a creative outlet, and it has
          naturally supported my interest in design. Recently, I’ve also found a love for
          <span className="font-medium"> chess,</span> a game that sharpens my focus and strategic thinking,
          which I find valuable in both coding and design.
        </p>
    </motion.section>
  );
}
