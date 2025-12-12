"use client";

import { createContext, useContext, ReactNode } from "react";
import myimage from "@/assets/image/vatsalPhoto.png";

interface Experience {
  company: string;
  duration: string;
  location?: string;
  workMode?: string;
  role: string;
  achievement: string;
  skills?: string[];
  logoImage?: string;
}

interface Personal {
  photo: string;
}

interface ContentfulData {
  experiences: Experience[];
  personal: Personal;
}

interface ContentfulContextType {
  content: ContentfulData;
}

const ContentfulContext = createContext<ContentfulContextType | undefined>(
  undefined
);

// Mock data - replace with actual Contentful data fetching
const mockData: ContentfulData = {
  experiences: [
    {
      role: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      duration: "2023 - Present",
      location: "Remote",
      workMode: "Full-time",
      achievement:
        "Leading the frontend team in building scalable web applications using Next.js and React. Led a team of 5 developers, improved app performance by 40%, and implemented modern design systems.",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      role: "Frontend Developer",
      company: "Digital Agency",
      duration: "2021 - 2023",
      location: "New York, NY",
      workMode: "Full-time",
      achievement:
        "Developed responsive websites and landing pages for various clients using modern web technologies. Delivered 20+ client projects, reduced load time by 50%, and achieved 95% client satisfaction.",
      skills: ["React", "JavaScript", "CSS3", "SASS"],
    },
    {
      role: "Junior Web Developer",
      company: "StartUp Hub",
      duration: "2020 - 2021",
      location: "San Francisco, CA",
      workMode: "Full-time",
      achievement:
        "Assisted in the development of the company's main product and maintained legacy code. Fixed 100+ bugs, improved code quality, and learned modern frameworks.",
      skills: ["JavaScript", "HTML5", "CSS3", "Git"],
    },
  ],
  personal: {
    photo: typeof myimage === "string" ? myimage : myimage.src || "/vatsalPhoto.png",
  },
};

export function ContentfulProvider({ children }: { children: ReactNode }) {
  return (
    <ContentfulContext.Provider value={{ content: mockData }}>
      {children}
    </ContentfulContext.Provider>
  );
}

export function useContentfulData() {
  const context = useContext(ContentfulContext);
  if (context === undefined) {
    throw new Error(
      "useContentfulData must be used within a ContentfulProvider"
    );
  }
  return context;
}
