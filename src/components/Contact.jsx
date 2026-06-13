import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-10 bg-slate-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">
        Contact Me
      </h2>

      <div className="flex flex-col items-center gap-6 text-lg">

        <a
          href="mailto:shalusihag29@gmail.com"
          className="flex items-center gap-3"
        >
          <FaEnvelope />
          shalusihag29@gmail.com
        </a>

        <a
          href="https://github.com/shalu-sihag"
          target="_blank"
          className="flex items-center gap-3"
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/shalu-sihag-1b0bb0353/"
          target="_blank"
          className="flex items-center gap-3"
        >
          <FaLinkedin />
          LinkedIn
        </a>

      </div>
    </section>
  );
};

export default Contact;