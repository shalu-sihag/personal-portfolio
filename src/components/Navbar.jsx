import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-slate-800 text-white sticky top-0 z-50 shadow-lg border-b border-slate-700">
      <h1 className="text-2xl font-bold text-blue-400">
        Shalu Sihag
      </h1>

      <ul className="flex gap-8 font-medium">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              onClick={() => setActive(link.id)}
              className={`transition duration-300 ${
                active === link.id
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-white hover:text-blue-300"
              }`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;