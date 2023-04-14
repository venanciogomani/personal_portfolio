import {
    mobile,
    backend,
    creator,
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
    aiBadAssery,
    jobit,
    tripguide,
    threejs,
    mrisoftware,
    xquizit,
    orcadeco,
    syw
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
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "3D Artist",
      icon: creator,
    },
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
      title: "Sr. Software Engineer",
      company_name: "MRI Software",
      icon: mrisoftware,
      iconBg: "#E6DEDD",
      date: "July 2021 - Present",
      points: [
        "Function as Front-end resource to convert designs to code, and build highly responsive web components.",
        "Design, modify and implement next generation real estate management products.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Sr. Backend Developer",
      company_name: "SYW.io",
      icon: syw,
      iconBg: "#E6DEDD",
      date: "Mar 2021 - June 2021",
      points: [
        "Functioned as Front-end resource as and when necessary to modify modules to ensure fault faulttolerance, scalability and covering edge-cases.",
        "Implemented robust RESTful strategies to handle and process Big Data using both open source and paid web service.",
        "Worked on the conversion of a company-managed media intelligence from monolithic to microservice-based application.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Orca Deco",
      icon: orcadeco,
      iconBg: "#E6DEDD",
      date: "Nov 2018 - Feb 2021",
      points: [
        "Led design, development, and release of web-based 3D virtual showroom application.",
        "Led the designed, developed and deployed of 2 region-separated eCommerce applications for Zambian and Ghanaian territories.",
        "Worked with Zambian and Ghanaian banks to develop custom payment Gateway tailored to company online eCommerce applications.",
        "Worked with Zambian and Ghanaian courier services to develop custom API linking company online eCommerce application to the checkout microservice.",
      ],
    },
    {
      title: "Sr. Software Developer",
      company_name: "Xq Media",
      icon: xquizit,
      iconBg: "#E6DEDD",
      date: "Jan 2015 - Oct 2018",
      points: [
        "Software Developer III (Aug 2018 - Oct 2018): Led design, development and deployment of company managed ERPs and CMSs.",
        "Software Developer II (Mar 2016 - Aug 2018): Designed and supported high-traffic large-scale websites for NGOs, recruitment agencies, and retail stores in Zambia",
        "Software Developer I (Jan 2015 - Mar 2016): Updated and documented legacy code base.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Whatever Ven sets his mind to, he accomplish no matter what. Working with him was an honor.",
      name: "Marvin Mulyokela",
      designation: "3D Architect",
      company: "Baus",
      image: "./src/assets/marve.jpg",
    },
    {
      testimonial:
        "A knowledgeable and creative legend who knows how to get things done. Ven is your top man.",
      name: "Chris Siwale",
      designation: "Control Systems Engineer",
      company: "First Quantum Mine",
      image: "./src/assets/chris.jpg",
    },
    {
      testimonial:
        "The man is an absolute beast on the keyboard! Give him a notepad and a compiler and he'll change the world.",
      name: "Timothy Mwansa",
      designation: "Computer & Network Engineer",
      company: "Deerhurst",
      image: "./src/assets/tim.jpg",
    },
  ];
  
  const projects = [
    {
      name: "AI-Based 3D Customizer",
      description:
        "Web-based platform that allows users to customize a 3D T shirt by uploading your own logo, asking the AI agent to generate a custom logo, or picking a color in real-time.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "openai",
          color: "pink-text-gradient",
        },
      ],
      image: aiBadAssery,
      source_code_link: "https://github.com/venanciogomani/3d_ai_bad_assery_project",
      sandbox_playground_link: "https://venanciogomani.net/projects/3dAiBadAssery",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };