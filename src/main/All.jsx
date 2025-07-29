import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutIDP from "../pages/about/AboutLS";
import SkillsIDP from "../pages/skills/SkillsLS";
import ProjectsIDP from "../pages/projects/ProjectsLS";
import AchievementsIDP from "../pages/achievements/AchievementsLS";
import ResumeIDP from "../pages/resume/ResumeLS";
import ContactIDP from "../pages/contact/ContactLS";
import NotfoundIDP from "./error/Notfound";
import HomeIDP from "../pages/Home/Home";
import LayoutWithNavbarIDP from "../components/navbarFL/LayoutWithNavbar";

export default function Main() {
  return (
    <Routes>
      <Route element={<LayoutWithNavbarIDP />}>
        <Route path="/" element={<HomeIDP />} />
        <Route path="/about" element={<AboutIDP />} />
        <Route path="/skills" element={<SkillsIDP />} />
        <Route path="/projects" element={<ProjectsIDP />} />
        <Route path="/achievements" element={<AchievementsIDP />} />
        <Route path="/resume" element={<ResumeIDP />} />
        <Route path="/contact" element={<ContactIDP />} />
      </Route>

      <Route path="*" element={<NotfoundIDP />} />
    </Routes>
  );
}
