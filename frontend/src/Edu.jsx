import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Education() {
  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-24 py-32 ">
      
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl sekuya-regular mb-24"
      >
        Education
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-32">

        {/* EDUCATION */}
        <div>
          <h2 className="text-sm tracking-widest text-gray-400 mb-10 ">
            EDUCATION
          </h2>

          {[
            {
              title: "Bachelor of Computer Applications",
              place: "Srinivas University",
              year: "2022 — 2025",
            },
            {
              title: "Higher Secondary",
              place: "NSS VHSS School Mundathicode",
              year: "2020 — 2022",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fade}
              initial="hidden"
              whileInView="show"
              custom={i}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-xl font-medium tinos-regular ">{item.title}</h3>
              <p className="text-gray-400">{item.place}</p>
              <p className="text-gray-600 text-sm">{item.year}</p>
            </motion.div>
          ))}
        </div>

        {/* CERTIFICATIONS */}
        <div>
          <h2 className="text-sm tracking-widest text-gray-400 mb-10 ">
            CERTIFICATIONS
          </h2>

          {[
            {
              title: "MERN Stack Developer",
              place: "G-TEC Computer Education",
              year: "2025",
            },
            {
              title: "React.JS Developer",
              place: "Oneroadmap",
              year: "2025",
            },
            {
              title: "Data Analyst",
              place: "Oneroadmap",
              year: "2025",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fade}
              initial="hidden"
              whileInView="show"
              custom={i}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-xl font-medium tinos-regular ">{item.title}</h3>
              <p className="text-gray-400">{item.place}</p>
              <p className="text-gray-600 text-sm">{item.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
