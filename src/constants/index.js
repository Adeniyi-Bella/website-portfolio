import {
  mobile,
  backend,
  // creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  netflix,
  linkedin
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "DPS Munich Germany",
    icon: starbucks,
    iconBg: "#383E56",
    date: "April 2023 - August 2023",
    points: [
      "I worked with a cross-functional digital product team (UI/UX, PO, AI) in the role of a software engineer to develop a product for the German Red Cross (DRK).",
      "Created a technical roadmap for the product with other team members.",
      "Coded the Design team’s pixel-perfect prototypes to spec.",
      "Working according to the Scrum framework (backlog, prioritisation, planning, daily stand-ups, reviews, retrospectives) .",
      "Prepared and conducted problem interviews.",
      "Iteratively building technical MVP"
    ],
  },
  {
    title: "Junior Developer/ Intermediate Software Developer",
    company_name: "Wolff & Mueller GMbh , Stuttgart, Germany ",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - March 2023",
    points: [
      "Started as a junior developer and later transitioned into an intermediate developer.",
      "Allocated development tasks within the team.",
      "Along with the product owner, helped the development team operate smoothly during sprints.",
      "Worked within sprints and planned the scope of work each week with the team.",
      "Participated in the developers hiring process for the team.",
      "Help developed and oversee HTML, CSS, JS, React, Bootstrap, Typescript code, and/or any other relevant language as required by the project.",
      "Made recommendations for the best practices of technical implementation and coding.",
      "Working according to the Scrum framework (backlog, prioritisation, planning, daily stand-ups, reviews, retrospectives).",
      "Provide guidance for the Dev team and help junior developers overcome blockers."
    ],
  },
  {
    title: "Solutions Architect/ Consultant",
    company_name: "CONXAI Technologies Munich, Germany",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2021 - Dec 2021",
    points: [
      "Worked in a consultancy role at a Contech startup with a group of AI engineers.",
      "The main task was to describe/break down construction activities in simple sentences for the AI engineers.",
      "Contributed to the django backend codebase by creating api endpoints as the product expanded.",
      "Participated in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Research Assistant/ Software development",
    company_name: "Technical university Munich, TUM, Germany",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Oct 2020 - Oct 2021",
    points: [
      "Worked with a group of Ph.D. students on 3D scanning of buildings and the application of AI in construction.",
      "The main task was to create Python scripts based on the objectives of each research, e.g., classification of construction elements using machine learning, optimization of scan positions in SCAN to BIM preparation.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Adeniyi is a good team player. I worked with him on a daily basis and I learnt a lot from him on how to apply best practices in software development.",
    name: "Valentin Zwerger",
    designation: "BIM Manager/ Product owner",
    company: "Wolff and Mueller",
    image: "https://media.licdn.com/dms/image/D4D03AQHOYewjhuTN_w/profile-displayphoto-shrink_100_100/0/1675325585128?e=1700092800&v=beta&t=BIrg9tfAcE1ZicPIO-au3NPfQ1_-4GT_8kYlzZvdrf0",
  },
  {
    testimonial:
      "Adeniyi was very important for our team. His ability to solve complex problems with his coding skills really improved the teams productivity",
    name: "Christian Hänsele",
    designation: "Teamleader Digitilization",
    company: "Wolff and Mueller",
    image: "https://media.licdn.com/dms/image/D4E03AQGWiLhqBb0Xfg/profile-displayphoto-shrink_100_100/0/1682160577683?e=1700092800&v=beta&t=ZpVx6fvlINBXqMUQTloKL6iX78WvMoV-jZnPwEmq-pg",
  },
  {
    testimonial:
      "Adeniyi is a very honest and down to earth person. His software skills combined with his background in construction helped us to improve the quality of our AI",
    name: "Dr Krishna Sridhar",
    designation: "CTO",
    company: "CONXAI",
    image: "https://media.licdn.com/dms/image/D4D03AQF6DL7ZsEcl1g/profile-displayphoto-shrink_100_100/0/1640986480654?e=1700092800&v=beta&t=SVjDIxuqFb03kB4kfHiQjXmYbANxAMATAilTHO5QIls",
  },
];

const projects = [
  {
    name: "Geohilfe",
    description:
      "Web-based platform that aims to assist emergency services operators (e.g Red Cross) in locating patients by listening in to live patient calls, extracting keywords from the conversation (places, landmarks, streets), displaying keywords for the operator to select. Operators can choose which keywords are relevant and these are sent to an AI model. Using the selected keywords, a similarity function computes scores on where the patient is most likely located. The scores are sent back to the operator along with their respective grid information. These scores and grids are displayed for the operator to see. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "websocket",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
      {
        name: "mapbox",
        color: "blue-text-gradient",
      },
      {
        name: "twillio",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Adeniyi-Bella/geohilfe-product",
  },
  {
    name: "Securing API in Java using Spring Security Framework",
    description:
      "Server side application that leverages the Spring Security Framework to ensure robust API protection in Java, enhancing secure data transactions, user authentication, and safeguarding endpoints against potential threats.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "springboot",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Adeniyi-Bella/spring-api-with-security",
  },
  {
    name: "Rest API with typescript",
    description:
      "Server side application built with TypeScript, offering a streamlined REST API, containerized with docker, seamlessly deployed and hosted on AWS for scalable and efficient cloud-based data access.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Adeniyi-Bella/Rest-API-with-Typescript",
  },

  {
    name: "Linkedin Clone",
    description:
      "Web platform inspired by LinkedIn, crafted using cutting-edge technologies such as React and Next.js, backed by MongoDB, delivering a modern, responsive, and interactive professional networking experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: linkedin,
    source_code_link: "https://github.com/Adeniyi-Bella/Linkedin-clone",
  },

  {
    name: "Netflix Clone",
    description:
      "Web platform inspired by Netflix, crafted using cutting-edge technologies such as React and Next.js, backed by MongoDB, delivering a modern, responsive, and interactive professional networking experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "react hook form",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/Adeniyi-Bella/Netflix-streaming",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
