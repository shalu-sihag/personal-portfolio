import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-10">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side Content */}
        <div>
          <p className="text-blue-400 text-lg mb-2">Hello, I'm</p>

          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            Shalu Sihag
          </h1>

          <h2 className="text-2xl md:text-3xl text-slate-300 mb-6">
            Frontend Developer → Future Full Stack Developer
          </h2>

          <p className="text-slate-400 leading-8 text-lg mb-8">
            I build responsive, scalable, and modern web applications using
            React, JavaScript, Python, and MySQL. Currently expanding into
            backend development with MERN and FastAPI.
          </p>

          <div className="flex gap-5">
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition"
            >
              View Work
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Shalu Sihag"
            className="w-80 h-80 object-cover rounded-full border-4 border-blue-500 shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;