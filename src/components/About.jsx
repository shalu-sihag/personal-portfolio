import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
></motion.div>

const About = () => {
  return (
    <section id="about" className="p-10">
      <h2 className="text-3xl font-bold mb-5">About Me</h2>

      <p className="text-lg leading-8">
        I am a B.Tech CSE student passionate about frontend development and scalable web applications. 
        My current expertise includes React, JavaScript, Python, and MySQL. 
        I have built multiple projects ranging from AI-powered productivity tools to API-based utilities
         and animation projects. My goal is to become a full stack developer and build impactful SaaS products.
      </p>
    </section>
  );
};

export default About;