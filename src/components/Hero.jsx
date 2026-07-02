import { ArrowRight, Download } from "lucide-react";
import Section from "./Section";

export default function Hero() {
  return (
    <Section>
    <section className="min-h-screen flex items-center bg-slate-950 text-white px-8 pt-24">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>
          <p className="text-blue-400 font-semibold mb-4">
            Hello, I'm
          </p>

          {/* Available for Work Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm text-blue-300">
              Available for Work
            </span>
          </div>

          <h1 className="text-6xl font-extrabold leading-tight">
            Resbay Fandiyya
            <br />
            Gautama
          </h1>

          <h2 className="text-2xl mt-6 text-slate-300">
            Frontend Developer
          </h2>

          <p className="mt-8 text-slate-400 text-lg leading-8 max-w-xl">
            Passionate Frontend Developer specializing in React.js, Express.js, and modern UI development.
            <br /><br />
            I enjoy creating responsive, fast, and user-friendly web applications with clean and scalable code.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mt-8 text-lg">
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 font-medium">
              ⚛ React
            </span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 font-medium">
              🚀 Express
            </span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 font-medium">
              🐬 MySQL
            </span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 font-medium">
              🎨 Tailwind
            </span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 font-medium">
              🐙 Git
            </span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 font-medium">
              💛 JavaScript
            </span>
          </div>

          <div className="mt-10 flex gap-5">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition inline-flex items-center gap-3"
            >
              View Projects
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/CV Resbay Fandiyya Gautama.pdf"
              className="border border-slate-600 hover:border-blue-500 px-8 py-4 rounded-xl font-semibold transition inline-flex items-center gap-3"
              download
            >
              Download CV
              <Download className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right - Improved Photo Appearance */}
        <div className="flex justify-center items-center lg:items-start">
          <div className="
            relative
            group
            rounded-full
            bg-gradient-to-br from-blue-500 via-cyan-300 to-purple-500
            p-2
            shadow-2xl
            transition-all
            hover:scale-105
            hover:shadow-[0_10px_40px_rgba(80,100,255,0.35)]
            w-[200px] md:w-[280px] lg:w-[370px] xl:w-[420px]
            h-[200px] md:h-[280px] lg:h-[370px] xl:h-[420px]
            flex items-center justify-center
          ">
            <img
              src="/resbay.png"
              alt="Developer"
              className="
                rounded-full
                object-cover
                border-4 border-white
                w-[180px] md:w-[250px] lg:w-[350px] xl:w-[400px]
                h-[180px] md:h-[250px] lg:h-[350px] xl:h-[400px]
                shadow-lg
                transition-all
                group-hover:shadow-[0_8px_40px_rgba(80,100,255,0.15)]
              "
              style={{
                minWidth: "180px",
                minHeight: "180px",
                background: "white"
              }}
            />
            {/* Decorative Shine Effect */}
            <span
              className="absolute top-4 left-8 w-28 h-10 bg-white opacity-20 rounded-full blur-2xl rotate-[-20deg] pointer-events-none"
            />
            {/* Decorative Circle Overlay */}
            <span
              className="absolute inset-0 rounded-full ring-2 ring-blue-400/40 ring-offset-4 ring-offset-white pointer-events-none"
              style={{
                zIndex: 2,
              }}
            />
          </div>
        </div>
        
      </div>
    </section>
    </Section>
  );
}


