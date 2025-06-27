// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
// import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
// import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
// import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
// import gsapLogo from './assets/tech_logo/gsap.png';
// import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
// import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
// import cLogo from './assets/tech_logo/c.png';
// import cppLogo from './assets/tech_logo/cpp.png';
// import javaLogo from './assets/tech_logo/java.png';
// import pythonLogo from './assets/tech_logo/python.png';
// import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';


// Experience Section Logo's
import webverseLogo from './assets/company_logo/octanetsolutions_logo.jpeg';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/Vikram_University_logo.jpg';
import bsaLogo from './assets/education_logo/images.jpeg';
import vpsLogo from './assets/education_logo/MPBSE-Recruitment.jpg';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/Screenshot 2025-06-20 103643.png';
import csprepLogo from './assets/work_logo/Screenshot 2025-06-20 105049.png';
import movierecLogo from './assets/work_logo/Screenshot 2025-06-20 104902.png';
import taskremLogo from './assets/work_logo/Screenshot 2025-06-20 170841.png';
import npmLogo from './assets/work_logo/Screenshot 2025-06-20 111540.png';
import webverLogo from './assets/work_logo/Screenshot 2025-06-26 205721.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },

  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
  
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Octanet Services Pvt Ltd , Bhubaneshwar",
      date: "April 2024 - September 2024",
      desc: "Creating dynamic user interfaces using React.js and effectively managing state with hooks, I have experience in building responsive and interactive web applications. I am skilled in setting up servers and APIs using Express.js and Node.js, enabling seamless backend functionality. Additionally, I have implemented CRUD (Create, Read, Update, Delete) operations to efficiently handle data management tasks. My expertise extends to working with MongoDB, a NoSQL database, for storing and retrieving data, ensuring flexibility and scalability in application development.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Express JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
      ],
    },

  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "Vikram University, Ujjain",
      date: "July 2022 - May 2025",
      grade: "7.87 CGPA",
desc: "I have completed my Bachelor's degree (BCA) in Computer Applications from Vikram University, Ujjain. During my time at Vikram University, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Vikram University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "bachelor of computer application - BCA",
    },
 
    {
      id: 2,
      img: vpsLogo,
      school: "Dr bhimrao ambedkar excellence school , Harda (M.P)",
      date: "july 2021 - April 2022",
      grade: "70%",
      desc: "I completed my class 12 education from dr bhimrao ambedkar excellence school , Harda (M.P) , under the MP board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "MP(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: bsaLogo,
      school: "Maa sharda vidhya peeth higher secondary school , Harda (M.P)",
      date: "july 2019 - May 202",
      grade: "87%",
      desc: "I completed my class 10 education from Maa sharda vidhya peeth higher secondary school , Harda (M.P), under the MP board, where I studied Science with Computer.",
      degree: "MP(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Reportify-Student Report Card Genrator",
      description:
        "Sign-Up Requests: Users sign up and requests are sent to the Super Admin for approval. Email Notifications: Approved users receive login credentials, and rejected users are notified via email. Student Data Management: Add, edit, and delete personal details, attendance records, and achievements. Report Card Generation: Generate student report cards in PDF format. Report Card Sharing: Download the PDF or email it to the student’s father.",
      image: githubdetLogo,
      tags: ["React JS", "Node JS", "Express JS", "Mongodb", "Tailwind CSS" , "HTML" , "CSS" , "JavaScript"],
      github: "https://github.com/Ravim28/Reportify---Student-Report-Card-Genrator",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "NewsMeg-News App",
      description:
        "I have created a news app using React and styled it with Bootstrap. The app utilizes a real-time news API to provide updated news. Users can browse news categorized into topics such as Sports, Business, Entertainment, Technology, and Health ",
      image: csprepLogo,
      tags: ["React JS", "API", "BootStrap" , "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Ravim28/News-App",
      webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "MegEase-Chating App",
      description:
        "MsgEase is a modern chat application that offers multiple attractive theme options to enhance user experience. It allows users to easily send photos while chatting, making conversations more expressive and engaging.",
      image: movierecLogo,
      tags: ["React JS", "Node JS", "Express JS", "Mongodb", "Tailwind CSS" , "HTML" , "CSS" , "JavaScript"],
      github: "https://github.com/Ravim28/MsgEase-Chating-app",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "Buildcon - A Responsive Website",
      description:
        "Buildoncon is a responsive business website built with HTML, CSS, JavaScript, and Bootstrap. It showcases clean design, smooth navigation, and compatibility across all devices, making it ideal for showcasing construction or corporate services.",
      image: npmLogo,
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/Ravim28/BUILDCON---A-Responsive-Website",
      webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
    {
      id: 4,
      title: "Coffee-Cafe - A Responsive Website",
      description:
        "A fully responsive and visually appealing Coffee Cafe website built using React.js and Tailwind CSS. It includes interactive components, modern UI, and seamless experience across all screen sizes.",
      image: taskremLogo,
      tags: ["JavaScript", "React JS","Tailwind CSS", "HTML", "CSS"],
      github: "https://github.com/Ravim28/CoderCoffe",
      webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
    {
      id: 5,
      title: "Devbook - A mini blog App ",
      description:
        " Built a dynamic blog application with JWT authentication and role based access control (Admin & Author). Authors can create, edit, and manage their own posts, while Admins can manage all posts and users. Integrated Markdown editor, post scheduling, and realtime filtering by tags and categories.",
      image: webverLogo,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      github: "https://github.com/Ravim28/TransERG-LLP---Devbook",
      webapp: "https://webversedigital.com/",
    },

  ];  