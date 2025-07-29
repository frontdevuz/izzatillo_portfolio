import React from "react";
import AboutID from "../pages/about/About";
import SkillsID from "../pages/skills/Skills";
import ProjectsID from "../pages/projects/Projects";
import AchievementsID from "../pages/achievements/Achievements";
import ResumeID from "../pages/resume/Resume";
import ContactID from "../pages/contact/Contact"
import { Routes, Route } from "react-router-dom";
import NavbarID from "../components/navbarFL/Navbar";
export default function Main() {
  return (
    <React.Fragment>
      <NavbarID />
      <Routes>
        <Route path="/" element={<AboutID />} />
        <Route path="/skills" element={<SkillsID />} />
        <Route path="/projects" element={<ProjectsID />} />
        <Route path="/achievements" element={<AchievementsID />} />
        <Route path="/resume" element={<ResumeID />} />
        <Route path="/contact" element={<ContactID />} />
      </Routes>
    </React.Fragment>
  );
}
