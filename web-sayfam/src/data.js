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
import profileimg from "./assets/profileimg.jpg";

export const data = {
  header: {
    lang: "TÜRKÇE",
    darkMode: "DARK MODE",
    lightMode: "LIGHT MODE",
  },
  banner: {
    textContent: [
      "I am a Fullstack Developer ",
      "...your best solution for the web design and development",
    ],
    buttons: [
      {
        name: "GitHub",
        icon: <i class="fa-brands fa-github"></i>,
        path: "https://github.com/ysertac",
      },
      {
        name: "LinkedIn",
        icon: <i class="fa-brands fa-linkedin-in"></i>,
        path: "https://linkedin.com/in/sertacyildirir",
      },
    ],
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
    content: [
      { def: "Date of Birth", value: "04.02.1996" },
      { def: "City", value: "Hatay" },
      {
        def: `Ecudation`,
        value: "Çukurova University, Electrical & Electronics Engineer",
      },
      { def: "Preference", value: "Full Stack Developer" },
    ],
    img: profileimg,
    aboutParagraphs: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
      "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
    ],
  },
  projects: {
    header: "Projects",
  },
  footer: {
    header: "Send me a message!",
    text: "Got a question or proposal, or just want to say hello? Go ahead.",
    email: "ysertac96@gmail.com",
    icons: [
      {
        path: "https://facebook.com/ysertacc",
        icon: <i class="fa-brands fa-facebook fa-2x"></i>,
      },
      {
        path: "https://instagram.com/ysertacc",
        icon: <i class="fa-brands fa-instagram fa-2x"></i>,
      },
      {
        path: "https://linkedin.com/in/sertacyildirir",
        icon: <i class="fa-brands fa-linkedin fa-2x"></i>,
      },
      {
        path: "https://github.com/ysertac",
        icon: <i class="fa-brands fa-github fa-2x"></i>,
      },
    ],
  },
};

export const dataTR = {
  header: {
    lang: "ENGLISH",
    darkMode: "GECE MODU",
    lightMode: "GÜNDÜZ MODU",
  },
  banner: {
    textContent: [
      "Bir Fullstack geliştirici olarak",
      "web tasarım ve geliştirmede en iyi çözüm ortağınız olmanın gururuyla...",
    ],
    buttons: [
      {
        name: "GitHub",
        icon: <i class="fa-brands fa-github"></i>,
        path: "https://github.com/ysertac",
      },
      {
        name: "LinkedIn",
        icon: <i class="fa-brands fa-linkedin-in"></i>,
        path: "https://linkedin.com/in/sertacyildirir",
      },
    ],
  },
  skills: {
    header: "Teknik Beceriler",
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
    header: "Özet",
    subHeaders: ["Temel Bilgiler", "Hakkımda"],
    content: [
      { def: "Doğum Tarihi", value: "04.02.1996" },
      { def: "İkamet Şehri", value: "Hatay" },
      {
        def: `Eğitim Durumu`,
        value: "Çukurova Üniversitesi, Elektrik-Elektronik Mühendisliği",
      },
      { def: "Tercih Ettiği Rol", value: "Full Stack Geliştirici" },
    ],
    img: profileimg,
    aboutParagraphs: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
      "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
    ],
  },
  projects: {
    header: "Projeler",
  },
  footer: {
    header: "Bana ulaşın!",
    text: "Bir sorunuz veya bir öneriniz mi var? Ya da sedece merhaba mı demek istiyorsunuz?",
    email: "ysertac96@gmail.com",
    icons: [
      {
        path: "https://facebook.com/ysertacc",
        icon: <i class="fa-brands fa-facebook fa-2x"></i>,
      },
      {
        path: "https://instagram.com/ysertacc",
        icon: <i class="fa-brands fa-instagram fa-2x"></i>,
      },
      {
        path: "https://linkedin.com/in/sertacyildirir",
        icon: <i class="fa-brands fa-linkedin fa-2x"></i>,
      },
      {
        path: "https://github.com/ysertac",
        icon: <i class="fa-brands fa-github fa-2x"></i>,
      },
    ],
  },
};
