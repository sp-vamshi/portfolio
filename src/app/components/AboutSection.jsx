"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "Skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "Experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Software Developer | Kodecorp Technology Solutions | 2023 - Present </li>
        <li>MERN Developer (Internship)</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "Education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.Com Computer Applications</li>
        <li>Osmania University, Hyderabad</li>
      </ul>
    ),
  },
];

export default function AboutSection() {
  const [tab, setTab] = useState("Skills");
  const [isPending, startTransition] = useTransition();

  function handleTabChange(id) {
    startTransition(() => {
      setTab(id);
    });
  }

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={"/Images/ProfilePhoto.jpg"} alt="About Photo" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am fullstack web developer with a passion for creating interactive
            web applications. I have experience working awith Javascript, React.js, Next.js,
            Redux, Node.js, Express, PostgresSQL, MongoDB, Material UI, Tailwind and Git.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("Skills")}
              active={tab === "Skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Experience")}
              active={tab === "Experience"}
            >
              Experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Education")}
              active={tab === "Education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-8">{
            TAB_DATA.find((t) => t.id === tab).content
          }</div>
        </div>
      </div>
    </section>
  );
}
