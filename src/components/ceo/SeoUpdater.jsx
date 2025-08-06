import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import setSEO from "../utils/setSEO";

export default function SEOUpdater() {
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case "/about":
        setSEO({
          title: "About Me – Izzatillo Davlatov",
          description: "Learn more about Izzatillo Davlatov, a frontend developer from Uzbekistan.",
          url: "https://izzatillo.uz/about",
          image: "https://izzatillo.uz/for_meta.jpg",
        });
        break;

      case "/skills":
        setSEO({
          title: "Skills – Izzatillo Davlatov",
          description: "Explore my web development skills: React, JavaScript, UI/UX, and modern frontend technologies.",
          url: "https://izzatillo.uz/skills",
          image: "https://izzatillo.uz/for_meta.jpg",
        });
        break;

      case "/projects":
        setSEO({
          title: "Projects – Izzatillo Davlatov",
          description: "Check out my frontend projects built with React, JS, and modern web technologies.",
          url: "https://izzatillo.uz/projects",
          image: "https://izzatillo.uz/for_meta.jpg",
        });
        break;

      case "/achievements":
        setSEO({
          title: "Achievements – Izzatillo Davlatov",
          description: "Awards, certifications, and notable achievements in web development and cybersecurity.",
          url: "https://izzatillo.uz/achievements",
          image: "https://izzatillo.uz/for_meta.jpg",
        });
        break;

      case "/contact":
        setSEO({
          title: "Contact – Izzatillo Davlatov",
          description: "Get in touch with Izzatillo Davlatov – Frontend Developer from Uzbekistan.",
          url: "https://izzatillo.uz/contact",
          image: "https://izzatillo.uz/for_meta.jpg",
        });
        break;

      case "/resume":
        setSEO({
          title: "Resume – Izzatillo Davlatov",
          description: "Download or view my resume – showcasing my experience, education, and web development expertise.",
          url: "https://izzatillo.uz/resume",
          image: "https://izzatillo.uz/for_meta.jpg",
        });
        break;

      default:
        setSEO({
          title: "Izzatillo – Frontend Developer Portfolio",
          description: "Frontend developer from Uzbekistan – Explore my portfolio, skills, achievements, and projects.",
          url: "https://izzatillo.uz/",
          image: "https://izzatillo.uz/for_meta.jpg",
        });
    }
  }, [pathname]);

  return null;
}
