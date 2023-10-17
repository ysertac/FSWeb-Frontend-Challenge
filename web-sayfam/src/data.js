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
import profileimg from "./assets/profileimg.jpg";
import pizza from "./assets/pizza.png";
import ecommerce from "./assets/ecommerce.png";

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
    content: [
      { def: "Doğum Tarihi", value: "04.02.1996" },
      { def: "İkamet Şehri", value: "Hatay" },
      {
        def: `Eğitim Durumu`,
        value: "Çukurova University, Electrical & Electronics Engineer",
      },
      { def: "Tercih Ettiği Rol", value: "Full Stack Developer" },
    ],
    img: profileimg,
    aboutParagraphs: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
      "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
    ],
  },
  projects: {
    header: "Projects",
    projects: [
      {
        header: "E-commerce Market Place",
        links: [
          {
            name: "View Site",
            path: "https://ysmarketplace.vercel.app/",
          },
          {
            name: "gitHub",
            path: "https://github.com/ysertac/ecommerce.git",
          },
        ],
        sum: `Built a platform that allowed small business owners to see and set pricing in various categories. Wrote code that allowed for making a list of items to sell which would
        show to all users`,
        used: ["HTML", "CSS", "JavaScript", "React", "Java", "Spring"],
        img: ecommerce,
      },
      {
        header: "Teknolojik Yemekler",
        links: [
          {
            name: "View Site",
            path: "https://techfood.vercel.app/",
          },
          {
            name: "gitHub",
            path: "https://github.com/ysertac/fsweb-s7-challenge-pizza.git",
          },
        ],
        sum: "Functional and ready to use order form. Developed to get basic principles of React and packages.",
        used: ["HTML", "CSS", "JavaScript", "React"],
        img: pizza,
      },
    ],
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
