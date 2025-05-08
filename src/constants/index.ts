export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Aditya Kumar",
    relationship: "College Project Partner",
    img: "assets/review1.jpeg",
    review:
      "Anurag was instrumental in our college project. His React.js skills were crucial for building the front-end, and he always found creative solutions to tricky coding problems. He's a great team player!",
  },
  {
    id: 2,
    name: "Abhishek Yadav",
    relationship: "Mentored me in JavaScript",
    img: "assets/review2.jpeg",
    review:
      "Anurag helped me a lot when I was learning JavaScript. He explained complex concepts clearly and patiently. His guidance made a huge difference in my understanding of web development.",
  },
  {
    id: 3,
    name: "Rohit Kumar",
    relationship: "Collaborated on personal website",
    img: "assets/review3.jpeg",
    review:
      "Anurag designed and built my personal website, and I'm extremely happy with it. It looks professional, is easy to navigate, and he incorporated all the features I wanted. He's very skilled in web development.",
  },
  {
    id: 4,
    name: "Ankit Kumar",
    relationship: "Asked for technical advice",
    img: "assets/review4.jpeg",
    review:
      "Whenever I run into a coding issue, Anurag is the first person I ask. He has a knack for quickly identifying the problem and suggesting effective solutions. He's a valuable resource for any developer.",
  },
];

export const myProjects = [
  {
    title: "SpaceBinge- OTT Platform",
    desc: "SpaceBinge is an OTT platform where you can stream your favorite TV shows, movies, and original content. Discover new titles, binge-watch your favorites, and enjoy endless entertainment at your fingertips.",
    subdesc:
      "Built as a unique OTT app with React.js, Tailwind CSS, SpaceBinge is designed for optimal performance and scalability.",
    href: "https://space-binge.vercel.app/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/spacebingelogo.png.jpg",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/javascript.png",
      },
      {
        id: 4,
        name: "Three.js",
        path: "/assets/threejs.png",
      },
    ],
  },
  {
    title: "Developer Portfolio - Real-Time 3D Application",
    desc: "A showcase of my skills and experience as a developer, built using React.js and Three.js. This interactive portfolio features a 3D environment where you can explore my projects, learn about my experience, and get in touch with me. I designed and developed this portfolio to demonstrate my proficiency in front-end development, 3D visualization, and user experience design.",
    subdesc:
      "An interactive portfolio built with React.js and Three.js, showcasing my projects, experience, and skills as a developer. Explore my work in a immersive 3D environment",
    href: "https://anurag-portfolio-nine.vercel.app/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/javascript.png",
      },
      {
        id: 4,
        name: "Three.js",
        path: "/assets/threejs.png",
      },
    ],
  },
  {
    title: "Weatherly - Weather Forecast App",
    desc: "Stay ahead of the weather with Weatherly, a user-friendly weather forecast app that provides accurate and up-to-date weather information. With a clean and intuitive interface, Weatherly allows you to easily check current weather conditions, forecasts, and alerts for your location and other cities around the world.",
    subdesc:
      "Get accurate weather forecasts and alerts with Weatherly, a simple and intuitive weather app that helps you plan your day and stay ahead of the weather.",
    href: "https://weatherly-livid.vercel.app/",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/javascript.png",
      },
      {
        id: 4,
        name: "Three.js",
        path: "/assets/threejs.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "QSpiders",
    pos: "Web Development Intern",
    duration: "November 2024 - April 2025",
    // title: "Proficient in leveraging HTML and CSS to craft semantically structured and visually appealing interfaces, ensuring cross-browser compatibility and adherence to modern design standards.Skilled in JavaScript for adding dynamic functionality and interactivity, enhancing user experience through efficient event handling and DOM manipulation.Adept at utilizing React.js to build reusable, component-based UI architectures, optimizing performance with state management and virtual DOM techniques.Acquired foundational knowledge of Node.js, enabling the development of lightweight backend solutions and API integrations to support frontend functionality."
    title:
      " Built full-stack projects using React.js and Node.js/Express.js, creating RESTful APIs for dynamic datahandling in multiple projects. Developed MongoDB schemas with Mongoose, optimizing query performance for scalable project data models. Implemented JWT authentication, bcrypt and error middleware, securing API endpoints for user interactions in multiple projects. Designed responsive UIs with React hooks and Tailwind CSS, reducing rendering time for project frontends.",
    icon: "/assets/qspider.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "Autotool Simulations Pvt. Ltd.",
    pos: "Technical Support Intern",
    duration: "April 2021 - July 2021",
    title:
      "Provided technical assistance and support to clients and internal teams, resolving hardware and software issues via phone, email, and in-person. Gained hands-on experience with troubleshooting, problem-solving, and customer service, ensuring timely and effective resolutions to technical queries.",
    icon: "/assets/atglogo.png",
    animation: "clapping",
  },
];
