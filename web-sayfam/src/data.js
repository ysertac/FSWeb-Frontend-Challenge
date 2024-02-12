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
import ts from "./assets/databases_and_tools/typescript.svg";
import sass from "./assets/databases_and_tools/sass.svg";
import angular from "./assets/languages_icon/angular.svg";
import postgresql from "./assets/databases_and_tools/postgresql.svg";
import babel from "./assets/databases_and_tools/babeljs.svg";
import postman from "./assets/databases_and_tools/postman.svg";
import photoshop from "./assets/databases_and_tools/photoshop.svg";
import node from "./assets/languages_icon/nodejs.svg";

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
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "React",
        icon: reactIcon,
        link: "https://react.dev/",
      },
      {
        name: "HTML",
        icon: html5,
        link: "https://www.w3schools.com/html/",
      },
      {
        name: "CSS",
        icon: css3,
        link: "https://www.w3schools.com/css/",
      },
    ],
    mid: [
      {
        name: "TypeScript",
        icon: ts,
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "Angular",
        icon: angular,
        link: "https://angular.io/",
      },
      {
        name: "Sass",
        icon: sass,
        link: "https://sass-lang.com/",
      },
      {
        name: "PostgreSQL",
        icon: postgresql,
        link: "https://www.postgresql.org/",
      },
    ],
    backend: [
      {
        name: "Java",
        icon: java,
        link: "https://www.java.com/tr/",
      },
      {
        name: "Spring Boot",
        icon: sb,
        link: "https://spring.io/",
      },
      {
        name: "MySQL",
        icon: mysql,
        link: "https://www.mysql.com/",
      },
      {
        name: "SQLite",
        icon: sqlite,
        link: "https://www.sqlite.org/index.html",
      },
    ],
    tools: [
      {
        name: "Cypress",
        icon: cypress,
        link: "https://www.cypress.io/",
      },
      {
        name: "Redux",
        icon: redux,
        link: "https://redux.js.org/",
      },
      {
        name: "Figma",
        icon: figma,
        link: "https://www.figma.com/",
      },
      {
        name: "Git",
        icon: git,
        link: "https://git-scm.com/",
      },
    ],
    tools2: [
      {
        name: "Node.js",
        icon: node,
        link: "https://nodejs.org/en",
      },
      {
        name: "Postman",
        icon: postman,
        link: "https://www.postman.com/",
      },
      {
        name: "Photoshop",
        icon: photoshop,
        link: "https://www.adobe.com/products/photoshop.html?promoid=RBS7NL7F&mv=other",
      },
      {
        name: "Babel",
        icon: babel,
        link: "https://babeljs.io/",
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
      `Hello. I am a software developer who is working on software projects actively. My greatest ideal is improving myself always. In this way I am open to all opportunity to provide this to me.`,
      `I want to work with people who are following the new technologies and compatible with teamwork. So I evaluate job opportunities that fit for me.`,
    ],
  },
  projects: {
    header: "Projects",
  },
  footer: {
    header: "Send me a message!",
    text: "Got a question or proposal, or just want to say hello? Go ahead.",
    email: "ysertac96@gmail.com",
    mobile: "+90 535 741 45 11",
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
    header: (
      <>
        <p>Teknik</p>
        <p>Beceriler</p>
      </>
    ),
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
      `Merhaba. Yazılım projelerinde aktif olarak çalışan bir yazılım geliştiriciyim. En büyük idealim sürekli kendimi geliştirmek. Bu doğrultuda karşıma çıkacak tüm fırsatlara açığım.`,
      `Yeni teknolojileri takip eden ve ekip çalışmasına önem veren kişilerle çalışmak isterim. Bunları sağlayabilecek iş fırsatlarını değerlendiriyorum.`,
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
