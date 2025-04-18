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
    islkocher,
    viu,
    tesla,
    shopify,
    carrent,
    trainingApp,
    jobit,
    tripguide,
    threejs,
    netflix,
    linkedin,
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
        title: "IT Specialist",
        company_name: "ISL-Kocher GMBH Siegen Germany",
        icon: islkocher,
        iconBg: "#383E56",
        date: "November 2023 - Present",
        points: [
            "Setting up quarterly goals for the team that matches company goals, ensuring the team stay on track and not easily distracted.",
            "Tracking the progress of projects, and adjusting project plans when needed to help the team perform well and complete projects successfully.",
            "Rapid UI/UX prototyping using Kendo UI components and sometimes AI solutions to visualize product design before development.",
            "Gathering feedbacks from the team, and refining the UI based on the feedbacks, thereby minimizing code rewrites.",
            "Explaining project software architecture and open source library used to other team members.",
            "Deployed all applications such as API, Frontend, SQL Database, to Azure cloud and ensured they are all able to communicate with each other securely",
            "Created a Dev-Ops pipeline for both dev and prod environment using Azure devops, ensuring ease of deployment from local to dev and prod environment.",
            "Made recommendations for the best practices of technical implementation and coding.",
        ],
    },
    {
        title: "Junior Software Developer",
        company_name: "Wolff & Mueller GMbh , Stuttgart, Germany ",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "January 2022 - October 2023",
        points: [
            "Improved the UI/UX of the Desite BIM product used internally within the company by leveraging Desite API(similar to any other kind of API).",
            "Along with the product owner, helped the development team operate smoothly during sprints.",
            "Worked within sprints and planned the scope of work each week with the team.",
            "Help developed and oversee HTML, CSS, JS, React, Bootstrap, Typescript code, and/or any other relevant language as required by the project.",
            "Made recommendations for the best practices of technical implementation and coding.",
            "Provide guidance for the Dev team and help new developers overcome blockers.",
            "Implemented an algorithm that tracks the usage of all applications by workers, resulting in improved issue prioritization as we had a better overview of what applications are very popular with our users.",
        ],
    },
    {
        title: "Operations Associate",
        company_name: "VIU Eyewear Munich, Germany",
        icon: viu,
        iconBg: "#383E56",
        date: "January 2021 - Dec 2021",
        points: [
            "Conducted quality checks on eyewear products to ensure high standards before shipment.",
            "Picked, packed, and labeled eyewear products, ensuring timely and accurate order fulfillment.",
            "Assisted in daily logistics and warehouse operations, including inventory management, order processing, and stock control.",
            "Supported the returns and exchange process, verifying product condition and processing replacements or refunds.",
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
    {
      title: "Warehouse Associate",
      company_name: "Amazon, Munich Germany",
      icon: shopify,
      iconBg: "#E6DEDD",
      date: "Jan 2020 - Nov 2020",
      points: [
          "Sorted, scanned, and packed parcels with high speed and precision, ensuring proper labeling for shipment.",
          "Worked flexible night shifts, ensuring smooth operations during off-peak hours and maintaining efficiency in 24/7 logistics processes.",
          "Assisted in problem-solving issues related to lost or misplaced packages to ensure successful deliveries."
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
        name: "VFR Wiesbaden Trainings App",
        description:
            "I play professional amateur football at VFR Wiesbaden and since our Football Coach does not have an application to manage Trainings, I built an Application for the Team.",
        tags: [
            {
                name: "next js",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "vercel",
                color: "pink-text-gradient",
            },
            {
                name: "github",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
        ],
        image: trainingApp,
        source_code_link: "https://github.com/Adeniyi-Bella/VFR-Wiesbaden-Training-App",
    },
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
        source_code_link:
            "https://github.com/Adeniyi-Bella/spring-api-with-security",
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
        source_code_link:
            "https://github.com/Adeniyi-Bella/Rest-API-with-Typescript",
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
