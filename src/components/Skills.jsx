import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
} from "react-icons/fa";

import {
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";

const skills = [
  {
    name: "React.js",
    level: 95,
    icon: <FaReact className="text-cyan-400 text-3xl" />,
  },
  {
    name: "Express.js",
    level: 90,
    icon: <SiExpress className="text-white text-3xl" />,
  },
  {
    name: "JavaScript",
    level: 92,
    icon: <SiJavascript className="text-yellow-400 text-3xl" />,
  },
  {
    name: "Tailwind CSS",
    level: 93,
    icon: <SiTailwindcss className="text-sky-400 text-3xl" />,
  },
  {
    name: "MySQL",
    level: 88,
    icon: <SiMysql className="text-blue-400 text-3xl" />,
  },
  {
    name: "Git",
    level: 85,
    icon: <FaGitAlt className="text-orange-500 text-3xl" />,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-blue-400 font-semibold">
          Skills
        </p>

        <h2 className="text-5xl font-bold mt-2">
          Technologies I Use
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {skills.map((skill) => (

            <div
              key={skill.name}
              className="
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              p-6
              hover:border-blue-500
              transition-all
              duration-300
              "
            >

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-4">

                  {skill.icon}

                  <h3 className="text-xl font-semibold">
                    {skill.name}
                  </h3>

                </div>

                <span className="text-blue-400 font-bold">
                  {skill.level}%
                </span>

              </div>

              <div className="mt-5 bg-slate-800 rounded-full h-3">

                <div
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 h-3 rounded-full"
                  style={{
                    width: `${skill.level}%`,
                  }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}