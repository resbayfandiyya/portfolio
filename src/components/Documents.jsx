import { useState } from "react";
import { ExternalLink, Download, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const certificates = [
  {
    title: "JavaScript Certificate",
    image: "/certificates/Javascript.png",
    file: "/certificates/javascript.pdf",
    issuer: "Dicoding",
    year: "2026",
    category: "Programming",
  },
  {
    title: "Database Programming Supervisor",
    image: "/certificates/Database Programming Supervisor.png",
    file: "/certificates/Database Programming Supervisor.pdf",
    issuer: "BNSP",
    year: "2024",
    category: "Database",
  },
  {
    title: "CCNAv7 Switching Routing and Wireless Essentials",
    image: "/certificates/CCNAv7 Switching Routing and Wireless Essentials.jpg",
    file: "/certificates/CCNAv7 Switching Routing and Wireless Essentials.pdf",
    issuer: "Cisco Networking Academy",
    year: "2023",
    category: "Lainnya",
  },
  {
    title: "Pemograman Web",
    image: "/certificates/Pemograman Web.jpg",
    file: "/certificates/Pemograman Web.pdf",
    issuer: "Dicoding",
    year: "2024",
    category: "Programming",
  },
  {
    title: "The Hardware Training Cash Recycling Machine Hitachi SR7500, SR7500VS, TCR, EDC, and POS",
    image: "/certificates/The Hardware Training Cash Recycling Machine Hitachi SR7500, SR7500VS, TCR, EDC, and POS.jpg",
    file: "/certificates/The Hardware Training Cash Recycling Machine Hitachi SR7500, SR7500VS, TCR, EDC, and POS.pdf",
    issuer: "Hitachi Channel Solutions Indonesia",
    year: "2025",
    category: "Lainnya",
  },
  {
    title: "Intern Programmer",
    image: "/certificates/Intern Programmer.jpg",
    file: "/certificates/Intern Programmer.pdf",
    issuer: "PT.General Buditekindo",
    year: "2024",
    category: "Lainnya",
  },
  {
    title: "CTS UI/UX Competition",
    image: "/certificates/CTS UI UX Competition.jpg",
    file: "/certificates/CTS UI UX Competitionpdf",
    issuer: "POliteknik Caltex Riau",
    year: "2023",
    category: "Lainnya",
  },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Programming",
  "Database",
  "Lainnya", // Tambah kategori Lainnya
];

const documents = [
  {
    title: "Ijazah",
    file: "/documents/Ijazah.pdf",
  },
  {
    title: "Academic Transcript",
    file: "/documents/Transkip Akademik.pdf",
  },
  {
    title: "ID Card",
    file: "/documents/KTP.pdf",
  },
];

export default function Documents() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // Tambahkan state untuk lightbox image
  const [selectedImage, setSelectedImage] = useState(null);
  const [scale, setScale] = useState(1);

  // Search and category filter
  const filteredCertificates = certificates.filter((item) => {
    const categoryMatch =
      selectedCategory === "All"
        ? true
        : selectedCategory === "Lainnya"
        ? !categories
            .filter((c) => c !== "All" && c !== "Lainnya")
            .includes(item.category)
        : item.category === selectedCategory;

    const searchMatch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.issuer.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  // Pagination
  const perPage = 6;
  const totalPages = Math.max(
    1,
    Math.ceil(filteredCertificates.length / perPage)
  );
  const currentCertificates = filteredCertificates.slice(
    (page - 1) * perPage,
    page * perPage
  );

  // Reset page to 1 if category/search change and out of bounds
  // (useEffect would be cleaner, but not required by instruction)
  if (page > totalPages && totalPages > 0) {
    setPage(1);
  }

  return (
    <section
      id="documents"
      className="bg-slate-950 text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-blue-400 font-semibold">
          Documents
        </p>

        <h2 className="text-5xl font-bold mt-3">
          Certificates & Documents
        </h2>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 mt-10">
          <div className="bg-slate-900 rounded-2xl p-8">
            <h2 className="text-4xl font-bold text-blue-400">{certificates.length}</h2>
            <p className="text-slate-400 mt-2">Certificates</p>
          </div>
          <div className="bg-slate-900 rounded-2xl p-8">
            <h2 className="text-4xl font-bold text-green-400">{documents.length}</h2>
            <p className="text-slate-400 mt-2">Documents</p>
          </div>
          <div className="bg-slate-900 rounded-2xl p-8">
            <h2 className="text-4xl font-bold text-purple-400">2026</h2>
            <p className="text-slate-400 mt-2">Latest Update</p>
          </div>
        </div>

        {/* Certificates */}
        <div className="mt-16">

          <h3 className="text-2xl font-semibold mb-8">
            Certificates
          </h3>

          {/* Search Box */}
          <div className="relative mb-8">
            <Search
              className="absolute left-4 top-3.5 text-slate-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search certificate..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="
                w-full
                bg-slate-900
                border
                border-slate-700
                rounded-xl
                py-3
                pl-12
                pr-4
                outline-none
                focus:border-blue-500
              "
            />
          </div>

          {/* Filter UI */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setPage(1);
                }}
                className={`
                  px-5
                  py-2
                  rounded-full
                  transition
                  duration-300
                  ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {currentCertificates.map((item) => (
              <motion.div
                key={item.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-700
                  bg-white/5
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-blue-500/40
                  hover:-translate-y-2
                  hover:shadow-[0_0_40px_rgba(59,130,246,.25)]
                "
                initial={{
                  opacity: 0,
                  y: 40
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: .5
                }}
                viewport={{
                  once: true
                }}
              >
                <div
                  className="
                    absolute
                    inset-0
                    rounded-3xl
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                    bg-gradient-to-r
                    from-blue-500/20
                    via-cyan-500/10
                    to-purple-500/20
                    blur-2xl
                  "
                />
                <div className="relative z-10">
                  <img
                    src={item.image}
                    alt={item.title}
                    onClick={() => {
                      setSelectedImage(item.image);
                      setScale(1);
                    }}
                    className="
                      w-full
                      h-56
                      object-cover
                      transition-all
                      duration-700
                      group-hover:scale-105
                      group-hover:brightness-110
                      cursor-pointer
                    "
                  />

                  <div className="p-6">
                    <h4 className="text-xl font-bold">
                      {item.title}
                    </h4>

                    <div className="flex items-center gap-3 mt-3">
                      <span
                        className="
                          inline-flex
                          px-3
                          py-1
                          rounded-full
                          bg-blue-500/20
                          text-blue-300
                          text-sm
                          border
                          border-blue-400/20
                          transition
                          group-hover:bg-blue-500
                          group-hover:text-white
                        "
                      >
                        {item.category}
                      </span>
                      <span className="text-slate-400 text-sm">
                        {item.issuer}
                      </span>
                      <span className="text-slate-500 text-sm">
                        {item.year}
                      </span>
                    </div>

                    <div className="flex gap-3 mt-6">

                      <a
                        href={item.file}
                        target="_blank"
                        className="
                          flex-1
                          bg-blue-600
                          hover:bg-blue-700
                          hover:scale-105
                          transition-all
                          duration-300
                          rounded-xl
                          py-3
                          flex
                          justify-center
                          items-center
                          gap-2
                          shadow-lg
                        "
                      >
                        <ExternalLink size={18} />
                        View
                      </a>

                      <a
                        href={item.file}
                        download
                        className="
                          flex-1
                          border
                          border-slate-600
                          hover:border-blue-500
                          hover:bg-slate-800
                          hover:scale-105
                          transition-all
                          duration-300
                          rounded-xl
                          py-3
                          flex
                          justify-center
                          items-center
                          gap-2
                        "
                      >
                        <Download size={18} />
                        Download
                      </a>

                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>

          {/* Pagination UI */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-4 mt-12">
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="px-5 py-2 bg-slate-800 rounded-lg disabled:opacity-50"
              >
                Previous
              </button>
              <span className="px-5 py-2">
                {page} / {totalPages}
              </span>
              <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className="px-5 py-2 bg-slate-800 rounded-lg disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* Other Documents */}

        <div className="mt-24">

          <h3 className="text-2xl font-semibold mb-8">
            Other Documents
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            {documents.map((doc) => (

              <a
                key={doc.title}
                href={doc.file}
                target="_blank"
                className="
                  bg-slate-900
                  border
                  border-slate-800
                  hover:border-blue-500
                  rounded-xl
                  p-6
                  flex
                  justify-between
                  items-center
                  transition
                "
              >

                <span className="font-semibold">
                  {doc.title}
                </span>

                <ExternalLink />

              </a>

            ))}

          </div>

        </div>

      </div>

      {/* Lightbox untuk image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setSelectedImage(null);
              setScale(1);
            }}
            onWheel={(e) => {
              e.preventDefault();
              if (e.deltaY < 0) {
                setScale((prev) => Math.min(prev + 0.2, 4));
              } else {
                setScale((prev) => Math.max(prev - 0.2, 1));
              }
            }}
            className="
              fixed
              inset-0
              bg-black/90
              z-[999]
              flex
              items-center
              justify-center
              p-8
            "
          >
            <button
              onClick={() => {
                setSelectedImage(null);
                setScale(1);
              }}
              className="
                absolute
                top-6
                right-8
                text-white
                text-5xl
                hover:text-red-500
                transition
              "
            >
              ×
            </button>
            <motion.img
              src={selectedImage}
              drag
              dragElastic={0.05}
              dragConstraints={{
                top: -500,
                left: -500,
                right: 500,
                bottom: 500,
              }}
              initial={{ scale: 0.8 }}
              animate={{
                scale: scale,
                transition: {
                  duration: 0.35
                }
              }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              onDoubleClick={() => setScale(1)}
              className="
                max-w-full
                max-h-full
                rounded-xl
                shadow-2xl
                cursor-grab
                active:cursor-grabbing
              "
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}



