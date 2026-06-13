const Skills = () => {
  const skillGroups = {
    Frontend: ["HTML", "CSS", "JavaScript", "React"],
    Backend: ["Python"],
    Database: ["MySQL"],
    Tools: ["Git", "GitHub"]
  };

  return (
    <section id="skills" className="py-20 px-10 bg-slate-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skillGroups).map(([category, skills], index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              {category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-slate-700 rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;