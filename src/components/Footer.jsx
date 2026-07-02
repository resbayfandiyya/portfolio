import {
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";
import { useState } from "react";

const socialLinks = [
  {
    href: "https://github.com/resbayfandiyya",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "mailto:resbayfandiyyagautama@gmail.com",
    label: "Email",
    icon: FaEnvelope,
  },
  {
    href: "https://wa.me/6282286345305",
    label: "WhatsApp",
    icon: FaWhatsapp,
  },
];

function SocialIcon({ href, label, Icon }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="
        w-12
        h-12
        rounded-full
        bg-slate-800
        flex
        items-center
        justify-center
        hover:bg-blue-600
        hover:scale-110
        hover:-translate-y-1
        transition-all
        duration-300
        group
      "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon
        size={26}
        className={`
          ${hovered ? "text-white animate-bounce" : "text-blue-400"}
          transition-all
          duration-300
          group-hover:animate-bounce
        `}
      />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold text-blue-500">
              Resbay Fandiyya Gautama
            </h2>
            <p className="mt-4 text-slate-400 leading-8">
              Frontend Developer passionate about
              building modern, responsive and
              high-performance web applications.
            </p>
          </div>
          {/* Center */}
          <div>
            <h3 className="font-semibold text-white mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-slate-400 hover:text-blue-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-blue-400 transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-blue-400 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-blue-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Right */}
          <div>
            <h3 className="font-semibold text-white mb-5">
              Connect
            </h3>
            <div className="flex gap-4">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <SocialIcon key={label} href={href} label={label} Icon={Icon} />
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            © 2026 Resbay Fandiyya Gautama. All rights reserved.
          </p>
          <a
            href="#"
            className="mt-5 md:mt-0 flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
          >
            Back to Top
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}


