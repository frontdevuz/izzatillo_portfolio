import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarIDP from "../components/navbarFL/Navbar";
import AboutIDP from "../pages/about/AboutLS";
import SkillsIDP from "../pages/skills/SkillsLS";
import ProjectsIDP from "../pages/projects/ProjectsLS";
import AchievementsIDP from "../pages/achievements/AchievementsLS";
import ResumeIDP from "../pages/resume/ResumeLS";
import ContactIDP from "../pages/contact/ContactLS";
import NavbarID from "../components/navbarFL/Navbar";
export default function Main() {
  return (
    <React.Fragment>
      <NavbarID />
      <Routes>
        <Route path="/" element={<AboutIDP />} />
        <Route path="/skills" element={<SkillsIDP />} />
        <Route path="/projects" element={<ProjectsIDP />} />
        <Route path="/achievements" element={<AchievementsIDP />} />
        <Route path="/resume" element={<ResumeIDP />} />
        <Route path="/contact" element={<ContactIDP />} />
      </Routes>
    </React.Fragment>
  );
}
