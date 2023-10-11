import pp from "./assets/Ekran görüntüsü 2023-08-09 172052.png";
import js from "./assets/languages_icon/javascript.svg";
import reactIcon from "./assets/languages_icon/reactjs.svg";
import html5 from "./assets/languages_icon/html5.svg";
import css3 from "./assets/languages_icon/css3.svg";
import java from "./assets/languages_icon/java.svg";
import sb from "./assets/languages_icon/spring.svg";
import mysql from "./assets/databases_and_tools/mysql.svg";
import sqlite from "./assets/databases_and_tools/sqlite.svg";
import cypress from "./assets/databases_and_tools/brand-cypress.svg";
import redux from "./assets/databases_and_tools/redux.svg";
import figma from "./assets/databases_and_tools/figma.svg";
import git from "./assets/databases_and_tools/git.svg";

export const data = {
  header: {
    name: "Sertaç YILDIRIR",
    lang: "TÜRKÇE",
    darkMode: "DARK MODE",
    lightMode: "LIGHT MODE",
  },
  banner: {
    textContent: [
      "I am a Fullstack Developer ",
      "...your best solution for the web design and development",
    ],
    pp: pp,
    buttons: {
      gitHub: {
        name: "GitHub",
        icon: <i class="fa-brands fa-github"></i>,
        path: "https://github.com/ysertac",
      },
      in: {
        name: "LinkedIn",
        icon: <i class="fa-brands fa-linkedin-in"></i>,
        path: "https://linkedin.com/in/sertacyildirir",
      },
    },
  },
  skills: {
    header: "Skills",
    frontend: [
      {
        name: "JavaScript",
        icon: js,
      },
      {
        name: "React",
        icon: reactIcon,
      },
      {
        name: "HTML",
        icon: html5,
      },
      {
        name: "CSS",
        icon: css3,
      },
    ],
    backend: [
      {
        name: "Java",
        icon: java,
      },
      {
        name: "Spring Boot",
        icon: sb,
      },
      {
        name: "MySQL",
        icon: mysql,
      },
      {
        name: "SQLite",
        icon: sqlite,
      },
    ],
    tools: [
      {
        name: "Cypress",
        icon: cypress,
      },
      {
        name: "Redux",
        icon: redux,
      },
      {
        name: "Figma",
        icon: figma,
      },
      {
        name: "Git",
        icon: git,
      },
    ],
  },
  profile: {
    header: "Profile",
    subHeaders: ["Basic Information", "About Me"],
    dateOfBirth: { def: "Doğum Tarihi", value: "04.02.1996" },
    city: { def: "İkamet Şehri", value: "Hatay" },
    education: {
      def: "Eğitim Durumu",
      value: "Çukurova University, Electrical & Electronics Engineer",
    },
    choice: { def: "Tercih Ettiği Rol", value: "Full Stack Developer" },
  },
};
