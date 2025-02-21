import projects1 from "../assets/projects1.webp";
import projects2 from "../assets/projects2.webp";
import projects3 from "../assets/projects3.webp";
import projects4 from "../assets/projects4.webp";
import projects5 from "../assets/projects5.webp";
import projects6 from "../assets/projects6.webp";

import person1 from "../assets/person1.webp";
import person2 from "../assets/person2.webp";
import person3 from "../assets/person3.webp";
import person4 from "../assets/person4.webp";
import person5 from "../assets/person5.webp";
import person6 from "../assets/person6.webp";

export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I’m Hrugwed Zagade, a final-year BTech student with expertise in Java, web development, and the MERN stack.",
  description:
    "I specialize in building scalable, efficient, and user-friendly applications that solve real-world problems.",
  resumeLinkText: "Download Resume",
  resumeLink: "/resume.pdf",
};


export const PROJECTS = [
  {
    name: "Simon Says",
    description: "Small Simon says game",
    image: projects1,
    link: "https://github.com/your-github/streamerzz",
  },
  {
    name: "Random Number Guesser Game",
    description: "Guess the number",
    image: projects2,
    link: "https://github.com/your-github/nutritrack",
  },
  {
    name: "Spotify Clone",
    description: "tried making Spotify clone",
    image: projects3,
    link: "https://github.com/your-github/hairrevive",
  },
  {
    name: "Face-generation",
    description:
      "Generates faces using given dataset",
    image: projects4,
    link: "https://github.com/your-github/devdeck",
  },
  {
    name: "CloudCare",
    description: "Major project",
    image: projects5,
    link: "https://github.com/your-github/fitconnect",
  },
  // {
  //   name: "WellNest",
  //   description: "A wellness app for mental and physical health improvement",
  //   image: projects6,
  //   link: "https://github.com/your-github/wellnest",
  // },
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
    location: "Remote",
    description: [
      "Developed the frontend for the entire company website using React.js and Tailwind CSS.",
      "Worked on both frontend and backend integration, ensuring a seamless user experience.",
      "Collaborated with a team to create an e-commerce platform for selling recycled materials.",
      "Helped farmers by providing an easy-to-use digital marketplace for sustainable products.",
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
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "hrugwed.zagade@mitaoe.ac.in",
  socialLinks: [
    {
      platform: "Twitter",
      url: "https://twitter.com/yourprofile",
      ariaLabel: "Follow me on Twitter",
      icon: "RiTwitterXFill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/Hrugwed",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Jason Root. All rights reserved.`,
};
