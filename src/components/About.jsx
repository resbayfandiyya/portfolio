import {
  Code2,
  Database,
  Server,
  Globe,
} from "lucide-react";

import Section from "./Section";

export default function About() {
  const skills = [
    "React.js",
    "Express.js",
    "Tailwind CSS",
    "MySQL",
    "REST API",
    "Git",
    "JavaScript",
    "Responsive Design",
    "React Native",
    "Ant Design",
    "PHP Laravel",
  ];

  return (
    <Section>
    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* Left */}

        <div>

          <p className="text-blue-400 font-semibold">
            About Me
          </p>

          <h2 className="text-5xl font-bold mt-3 bg-gradient-to-r from-white via-blue-300 to-blue-500 text-transparent bg-clip-text">
            Frontend Developer
            <br />
            from Indonesia 🇮🇩
          </h2>

          <p className="mt-8 text-slate-400 leading-8 text-lg">
            I am an Information Systems graduate who enjoys
            building modern web applications using React.js,
            Express.js, Tailwind CSS and MySQL.

            I focus on writing clean code, creating responsive
            interfaces, and continuously improving my skills
            through real-world projects.
          </p>

          <div className="flex flex-wrap gap-3 mt-10">

            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 hover:border-blue-500 transition"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>

        {/* Right */}

        <div className="grid grid-cols-2 gap-6">

          <div className="bg-slate-800 rounded-2xl p-8 transition hover:-translate-y-2 hover:border hover:border-blue-500 hover:shadow-xl">
            <Code2
              className="text-blue-400 mb-6"
              size={40}
            />

            <h3 className="text-4xl font-bold">
              12+
            </h3>

            <p className="text-slate-400 mt-2">
              Projects Completed
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8">
            <Database
              className="text-green-400 mb-6"
              size={40}
            />

            <h3 className="text-4xl font-bold">
              4+
            </h3>

            <p className="text-slate-400 mt-2">
              Years Learning
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8">
            <Server
              className="text-purple-400 mb-6"
              size={40}
            />

            <h3 className="text-4xl font-bold">
              11+
            </h3>

            <p className="text-slate-400 mt-2">
              Technologies
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8">
            <Globe
              className="text-orange-400 mb-6"
              size={40}
            />

            <h3 className="text-4xl font-bold">
              100%
            </h3>

            <p className="text-slate-400 mt-2">
              Responsive Design
            </p>
          </div>

        </div>

      </div>
    </section>
    </Section>
  );
}