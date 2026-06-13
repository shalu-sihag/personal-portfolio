import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
></motion.div>

import projects from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-20 px-10"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-xl border border-gray-700 hover:scale-105 duration-300"
          >
            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-slate-400 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-indigo-500 px-3 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                className="px-4 py-2 bg-white text-black rounded"
              >
                GitHub
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  className="px-4 py-2 bg-blue-500 rounded"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;