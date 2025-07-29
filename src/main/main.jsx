import React from "react";
import About from "../pages/about/About";
import Skills from "../pages/skills/Skills";
import Projects from "../pages/projects/Projects";
import Achievements from "../pages/achievements/Achievements";
import Resume from "../pages/resume/Resume";
import Contact from "../pages/contact/Contact";
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
