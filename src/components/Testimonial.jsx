// import React from "react";
// import { motion } from "framer-motion";
// import { TESTIMONIALS } from "../constants";

// const Testimonial = () => {
//   const childVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, delay: i * 0.5 },
//     }),
//   };

//   return (
//     <section className="px-6 py-10 min-h-screen" id="testimonials">
//       <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
//         What People Are Saying
//       </h1>
//       <div className="h-1 w-20 bg-white mb-8"></div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {TESTIMONIALS.map((testimonial, index) => (
//           <motion.div
//             key={index}
//             className="relative rounded-lg p-6 h-full backdrop-blur-3xl bg-stone-500/10"
//             custom={index}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={childVariants}
//           >
//             <div className="flex items-center mb-4">
//               <img
//                 src={testimonial.image}
//                 alt={testimonial.name}
//                 className="w-12 h-12 rounded-full mr-4"
//                 loading="lazy"
//               />
//               <div>
//                 <h2 className="text-lg font-semibold">{testimonial.name}</h2>
//                 <p className="text-sm font-light">{testimonial.title}</p>
//               </div>
//             </div>
//             <p className="leading-relaxed">{testimonial.feedback}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonial;

import React from "react";
import { motion } from "framer-motion";

// New constant for education data
const EDUCATION_DATA = [
  {
    level: "University",
    institution: "MIT Academy of Engineering",
    details: "7.2 CGPA",
  },
  {
    level: "Junior College",
    institution:
      "Rajiv Gandhi Academy of E-Learning school & Science Junior college",
    details: "12th HSC Marks: 72.67%",
  },
  {
    level: "School",
    institution: "Dastur Hormazdiar Co-Ed School",
    details: "10th SSC Marks: 82.80%",
  },
];

const Testimonial = () => {
  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.5 },
    }),
  };

  return (
    <section className="px-6 py-10" id="education">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        My Education
      </h1>
      <div className="h-1 w-20 bg-white mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {EDUCATION_DATA.map((item, index) => (
          <motion.div
            key={index}
            className="relative rounded-lg p-6 h-full backdrop-blur-3xl bg-stone-500/10"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={childVariants}
          >
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">{item.level}</h2>
              <p className="text-sm font-light text-gray-400">
                {item.institution}
              </p>
            </div>
            <p className="leading-relaxed mt-4">{item.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
