import { address, p } from "framer-motion/client";
import projects1 from "../assets/WhatsApp Image 2025-05-09 at 11.39.30_fc9c5baa.jpg";
import projects2 from "../assets/WhatsApp Image 2025-05-09 at 11.40.31_6553a09f.jpg";
import projects3 from "../assets/WhatsApp Image 2025-05-09 at 11.40.52_ee5f94a4.jpg";
import projects4 from "../assets/WhatsApp Image 2025-05-09 at 11.41.27_893be4f6.jpg";
import projects5 from "../assets/WhatsApp Image 2025-05-09 at 11.41.47_69bd5843.jpg";
import projects6 from "../assets/WhatsApp Image 2025-05-09 at 11.49.27_676e972c.jpg";

import person1 from "../assets/person1.webp";
import person2 from "../assets/person2.webp";
import person3 from "../assets/person3.webp";
import person4 from "../assets/person4.webp";
import person5 from "../assets/person5.webp";
import person6 from "../assets/person6.webp";

import { RiTwitterXFill, RiGithubFill, RiLinkedinFill } from "react-icons/ri";

export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I’m Hrugwed Zagade, a recent B.Tech Computer Science graduate specializing in MERN Stack development, Java, and Generative AI.",
  description:
    "I focus on building scalable, efficient, and user-friendly applications that solve real-world problems, backed by practical experience in cloud and networking.",
  resumeLinkText: "Download Resume",
  resumeLink: "/Hrugwed (4).pdf", // Remember to update this with your publicly hosted resume link!
};


export const PROJECTS = [
  {
    name: "Simon Says",
    description: "Small Simon says game",
    image: projects1,
    link: "https://github.com/Hrugwed/Simon-Says",
  },
  {
    name: "Askme",
    description: "An AI powered question answering system using gemini api ",
    image: projects2,
    link: "https://github.com/Hrugwed/Askme",
  },
  {
    name: "Rentkar",
    description: "A Marketplace for renting items",
    image: projects6,
    link: "https://github.com/Hrugwed/Rentkar",
  },
  {
    name: "Portfolio",
    description: "My personal portfolio website",
    image: projects3,
    link: "https://github.com/Hrugwed/Hrugwed_Portfolio",
  }
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a final-year BTech student with a strong passion for software development, specializing in Java, web development, and the MERN stack. I enjoy building scalable and efficient applications that solve real-world problems while ensuring high performance and a seamless user experience.",
    "I have worked on multiple projects, ranging from simple interactive applications to complex web platforms. My expertise includes React, Node.js, Express, MongoDB, and Tailwind CSS, allowing me to create responsive and scalable interfaces. I believe in writing clean, maintainable code and continuously improving my skills to stay updated with the latest technologies.",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "Feb 2024 — Apr 2024",
    title: "Frontend Developer Intern at HAB Biomass",
    location: "Pune, Maharashtra",
    description: [
      "Developed the frontend for the entire company website using React.js and Tailwind CSS.",
      "Worked on both frontend and backend integration, ensuring a seamless user experience.",
      "Collaborated with a team to create an e-commerce platform for selling recycled materials.",
      "Helped farmers by providing an easy-to-use digital marketplace for sustainable products.",
    ],
  },
  {
    yearRange: "May 2025 — July 2025",
    title: "Frontend Developer Intern at Octafalcon",
    location: "Pune, Maharashtra",
    description: [
      "Mapped and digitized parking coordinates for Gera Builders.",
      "Enhanced the user feedback interface through frontend improvements, boosting user engagement and data collection.",
      "Assisted in the deployment of frontend applications to live servers, gaining practical experience in production environments.",
      "Conducted performance and responsive testing to ensure optimal functionality and cross-device compatibility.",
      "Prepared comprehensive UI documentation to facilitate future updates and ensure scalability of the application.",
    ],
  },
  // {
  //   yearRange: "2023 — Now",
  //   title: "Freelance Web Developer",
  //   location: "Remote",
  //   description: [
  //     "Designed and developed full-stack MERN applications for clients and personal projects.",
  //     "Implemented user authentication, database management, and API integration using Node.js and MongoDB.",
  //     "Built responsive, scalable, and accessible web applications optimized for performance.",
  //     "Continuously learning and applying the latest web technologies to improve project efficiency.",
  //   ],
  // },
  // {
  //   yearRange: "2021 — 2023",
  //   title: "Frontend Developer (Personal & Open Source Projects)",
  //   location: "Remote",
  //   description: [
  //     "Built and contributed to multiple open-source projects focused on web applications.",
  //     "Worked extensively with React.js, Next.js, and Tailwind CSS to develop high-quality UI components.",
  //     "Optimized performance and improved accessibility for various web applications.",
  //     "Explored different backend technologies to enhance full-stack development skills.",
  //   ],
  // },
];


export const TESTIMONIALS = [
  {
    name: "Anish Ghanwat",
    title: "Professional Food Critic, MIT Alandi",
    feedback:
      "Hrugwed once told me ‘code runs faster if you optimize it’… bro, I don’t even run. But to be fair, if he put as much effort into debugging as I do into my food orders, we’d all be billionaires by now.",
    image: person1, // Replace with actual image if available
  },
  {
    name: "Sankalp Khilari",
    title: "Head of Roast Department, MIT Alandi",
    feedback:
      "Hrugwed is the best developer I know... at making typos. His debugging skills are just him arguing with the console. I’d compliment him, but I’ve got a reputation to maintain.",
    image: person2, // Replace with actual image if available
  },
];


export const CONTACT_CONTENT = {
  headline: "Hrugwed Zagade",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "hruwgedzagade123@gmail.com",
  phone: "+91 88983 82868", 
  address: "Pune, Maharashtra, India",
  socialLinks: [
    {
      platform: "Twitter",
      url: "https://x.com/HrugwedZ53495",
      ariaLabel: "Follow me on Twitter",
      icon: RiTwitterXFill, // Pass the component, not JSX
    },
    {
      platform: "GitHub",
      url: "https://github.com/Hrugwed",
      ariaLabel: "View my GitHub profile",
      icon: RiGithubFill, // Pass the component, not JSX
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/hrugwed-zagade-7b3098315/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: RiLinkedinFill, // Pass the component, not JSX
    },
  ],
  footerText: `© ${new Date().getFullYear()} Hrugwed Zagade. All rights reserved.`,
};
