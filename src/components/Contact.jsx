import {
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  // Data for each contact card
  const contactCards = [
    {
      key: "email",
      href: "mailto:resbayfandiyyagautama@gmail.com",
      icon: <FaEnvelope size={42} className="text-blue-400" />,
      title: "Email",
      desc: "resbayfandiyyagautama@gmail.com",
      cardClass:
        "bg-slate-800 rounded-2xl p-6 flex items-center gap-5 border border-slate-700 hover:border-blue-500 hover:-translate-y-2 hover:shadow-blue-500/20 hover:shadow-2xl transition-all duration-300",
      external: false,
    },
    {
      key: "wa",
      href: "https://wa.me/6282286345305",
      icon: <FaWhatsapp size={42} className="text-green-400" />,
      title: "WhatsApp",
      desc: "+62 822 8634 5305",
      cardClass:
        "bg-slate-800 rounded-2xl p-6 flex items-center gap-5 border border-slate-700 hover:border-green-500 hover:-translate-y-2 hover:shadow-green-500/20 hover:shadow-2xl transition-all duration-300",
      external: true,
    },
    {
      key: "github",
      href: "https://github.com/resbayfandiyya",
      icon: <FaGithub size={42} />,
      title: "GitHub",
      desc: "github.com/resbayfandiyya",
      cardClass:
        "bg-slate-800 rounded-2xl p-6 flex items-center gap-5 border border-slate-700 hover:border-white hover:-translate-y-2 hover:shadow-white/20 hover:shadow-2xl transition-all duration-300",
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-24 px-8"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-400 font-semibold">
          Contact
        </p>

        <h2 className="text-5xl font-bold mt-2">
          Let's Work Together
        </h2>

        <p className="mt-6 text-slate-400 text-lg leading-8 max-w-2xl">
          I'm open to Frontend Developer, Fullstack Developer,
          React Developer, and Web Developer opportunities.
          Feel free to contact me.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {contactCards.map((card, idx) => (
            <motion.a
              key={card.key}
              href={card.href}
              target={card.external ? "_blank" : undefined}
              rel={card.external ? "noopener noreferrer" : undefined}
              className={card.cardClass}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.11 }}
              viewport={{ once: true }}
            >
              {card.icon}
              <div>
                <h3 className="font-semibold">
                  {card.title}
                </h3>
                <p className="text-slate-400">
                  {card.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-5 mt-14">
          <motion.a
            href="mailto:resbayfandiyyagautama@gmail.com"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: contactCards.length * 0.11 }}
            viewport={{ once: true }}
          >
            Send Email
          </motion.a>

          <motion.a
            href="/CV Resbay Fandiyya Gautama.pdf"
            className="border border-slate-600 hover:border-blue-500 px-8 py-4 rounded-xl font-semibold"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: (contactCards.length + 1) * 0.11 }}
            viewport={{ once: true }}
          >
            Download CV
          </motion.a>
        </div>
      </div>
    </section>
  );
}

