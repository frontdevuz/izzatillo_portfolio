import React from "react";
import AboutID from "../pages/about/About";
import SkillsID from "../pages/skills/Skills";
import ProjectsID from "../pages/projects/Projects";
import AchievementsID from "../pages/achievements/Achievements";
import ResumeID from "../pages/resume/Resume";
import ContactID from "../pages/contact/Contact";
import { Routes, Route } from "react-router-dom";
import NavbarID from "../components/navbarFL/Navbar";
export default function Main() {
  return (
    <>
      <NavbarID />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
