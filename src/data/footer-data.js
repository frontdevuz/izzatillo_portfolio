// 📌 LOGO
import MIcon from "../assets/media/photos/izzatillo_logo.png";

export const FooterData = {
  info: {
    logo: MIcon,
    name: "Izzatillo",
    description: "Frontend Developer",
    copyright: "Izzatillo Davlatov Copyright ©️ 2025 . All Rights Reserved. "
  },

  quickLinks: [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "About", path: "/about" },
    { id: 3, text: "Skills", path: "/skills" },
    { id: 4, text: "Projects", path: "/projects" },
    { id: 5, text: "Achievements", path: "/achievements"},
    { id: 6, text: "Contact", path: "/contact" }
  ],

  contact: {
    email: "davlatovizzatillo7@gmail.com",
    phone: "+998 90 144 26 02",
    address: "Andijan, Uzbekistan"
  },

  socials: [
    { id: 1, icon: "fa-brands fa-telegram fa-beat", url: "https://t.me/izzatillod", unique:"telegram", color:"#0088cc" },
    { id: 2, icon: "fa-brands fa-instagram fa-beat", url: "https://www.instagram.com/davlatovizzatillo7/" , unique:"instagram",color:"#E1306C" },
    { id: 3, icon: "fa-brands fa-github fa-beat", url: "https://github.com/frontdevuz" , unique:"github", color:"#181717"},
    { id: 4, icon: "fa-brands fa-facebook fa-beat", url: "https://www.facebook.com/profile.php?id=100068075402404", unique:"facebook", color:"#1877F2" }
  ]
};
