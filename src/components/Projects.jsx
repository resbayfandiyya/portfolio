import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiReact, SiExpress, SiMysql, SiTailwindcss, SiJsonwebtokens } from "react-icons/si";
import Section from "./Section";
import { motion } from "framer-motion";

// Mapping for tech icons using react-icons for a more professional look
const techIcons = {
  React: <SiReact className="text-sky-400" size={20} />,
  Express: <SiExpress className="text-gray-300" size={20} />,
  MySQL: <SiMysql className="text-blue-500" size={20} />,
  Tailwind: <SiTailwindcss className="text-cyan-400" size={20} />,
  JWT: <SiJsonwebtokens className="text-yellow-400" size={20} />,
};

const projects = [
  {
    title: "Inventory Management System",
    image: "/Inventory.png",
    description:
      "A full-stack inventory management system built with React, Express.js and MySQL featuring authentication, analytics dashboard, CRUD operations, pagination, search and responsive UI.",
    tech: [
      "React",
      "Express",
      "MySQL",
      "Tailwind",
      "JWT",
    ],
    demo: "https://inventory-dashboard-chi-gray.vercel.app/",
    github: "https://github.com/resbayfandiyya/inventory-dashboard/",
    status: "Production Ready",
  },
];

export default function Projects() {
  return (
    <Section>
      <section
        id="projects"
        className="bg-slate-900 text-white py-16 px-4 sm:px-6 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-blue-400 font-semibold text-lg sm:text-xl">Featured Projects</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">My Recent Work</h2>

          <div className="mt-14 sm:mt-16 space-y-14 sm:space-y-16">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
                  grid 
                  grid-cols-1
                  lg:grid-cols-2
                  gap-10
                  md:gap-14
                  lg:gap-16
                  items-center
                  bg-slate-800/40
                  border border-slate-700
                  rounded-3xl
                  p-4
                  sm:p-8
                  lg:p-10
                  shadow-2xl
                  transition-all
                  duration-300
                "
              >
                {/* Title & Image Section */}
                <div className="relative group flex flex-col mb-8 lg:mb-0">
                  {/* Project Status Badge */}
                  <span
                    className="
                      inline-flex
                      items-center
                      gap-2
                      bg-emerald-500/20
                      text-emerald-400
                      px-4
                      py-1
                      rounded-full
                      text-xs
                      font-semibold
                      tracking-wide
                      mb-3
                      w-max
                    "
                  >
                    <span role="img" aria-label="status">🟢</span>
                    {project.status}
                  </span>
                  <h2
                    className="
                      mb-3
                      text-2xl
                      sm:text-4xl
                      lg:text-6xl
                      font-black
                      leading-tight
                      bg-gradient-to-r
                      from-blue-400
                      to-cyan-400
                      bg-clip-text
                      text-transparent
                      z-10
                      w-full
                      break-words
                    "
                  >
                    {project.title}
                  </h2>
                  <div
                    className="
                      overflow-hidden
                      rounded-2xl
                      border
                      border-slate-700
                      shadow-2xl
                      aspect-[16/9]
                      relative
                      min-h-[180px] sm:min-h-[250px] md:min-h-[300px]
                      bg-slate-700/50
                    "
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        rounded-2xl
                        transition
                        duration-700
                        group-hover:scale-105
                        w-full
                        h-full
                        object-fill
                        min-h-[180px] sm:min-h-[250px] md:min-h-[300px]
                        max-h-[340px]
                      "
                      style={{ aspectRatio: "16/9" }}
                    />
              
                    {/* Overlay for premium look */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-slate-900/70
                        to-transparent
                        opacity-0
                        group-hover:opacity-100
                        transition
                        duration-500
                        pointer-events-none
                      "
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  {/* Description */}
                  <p className="text-slate-300 mt-4 sm:mt-6 leading-7 sm:leading-8 text-base sm:text-lg md:text-xl max-w-2xl">
                    {project.description}
                  </p>

                  {/* Feature List - Responsive */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8 text-slate-200 text-base sm:text-lg max-w-xl mx-auto sm:mx-0">
                    <li className="flex items-center gap-2 mb-1 sm:mb-2">
                      <span role="img" aria-label="check">✅</span> JWT Authentication
                    </li>
                    <li className="flex items-center gap-2 mb-1 sm:mb-2">
                      <span role="img" aria-label="check">✅</span> Dashboard Analytics
                    </li>
                    <li className="flex items-center gap-2 mb-1 sm:mb-2">
                      <span role="img" aria-label="check">✅</span> CRUD Inventory
                    </li>
                    <li className="flex items-center gap-2 mb-1 sm:mb-2">
                      <span role="img" aria-label="check">✅</span> Search & Pagination
                    </li>
                    <li className="flex items-center gap-2 mb-1 sm:mb-2">
                      <span role="img" aria-label="check">✅</span> Responsive Design
                    </li> 
                  </ul>

                  {/* Tech Stack with real logos, responsive paddings & margins */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="
                          flex items-center gap-2
                          bg-slate-800/70
                          border
                          border-slate-700
                          px-3 py-1.5
                          sm:px-4 sm:py-2
                          rounded-full
                          text-slate-200
                          hover:bg-blue-600
                          hover:text-white
                          transition
                          duration-300
                          cursor-default
                          text-sm sm:text-base
                        "
                      >
                        <span>{techIcons[item] || ""}</span>
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Buttons - Responsive flex, spacing, font size */}
                  <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        bg-blue-600
                        hover:bg-blue-700
                        shadow-lg shadow-blue-500/30
                        hover:-translate-y-1
                        transition-all
                        duration-300
                        px-6 sm:px-7
                        py-3 sm:py-4
                        rounded-xl
                        flex
                        items-center
                        gap-2
                        font-semibold
                        text-base sm:text-lg
                        justify-center
                      "
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        border
                        border-slate-600
                        hover:border-blue-500
                        hover:bg-slate-800
                        hover:-translate-y-1
                        shadow-lg shadow-blue-500/30
                        transition-all
                        duration-300
                        px-6 sm:px-7
                        py-3 sm:py-4
                        rounded-xl
                        flex
                        items-center
                        gap-2
                        font-semibold
                        text-base sm:text-lg
                        justify-center
                      "
                    >
                      <FaGithub size={20} />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Section>
  );
}



