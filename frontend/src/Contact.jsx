import { motion } from "framer-motion";
import {assets} from './asset/assets.js';
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

export default function Contact() {
  return (
<section className="min-h-screen bg-[#060606] text-white px-6 md:px-24 py-32 overflow-hidden"> 
    <div className="grid grid-cols-1 md:grid-cols-2 gap-28">
        {/* LEFT */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}>
          <h1 className="text-5xl md:text-7xl sekuya-regular mb-10">
            Let’s Talk
          </h1>

          <p className="text-gray-400 max-w-md leading-relaxed mb-12">
            Have an idea, a project, or an opportunity?
            I’d love to hear about it.
          </p>
            <div className="space-y-4 text-gray-300 text-lg">
                <motion.a href="mailto:adhidrive46@email.com"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative pl-6 tracking-wide flex items-center hover:text-white transition cursor-pointer">
                    {/* LEFT INDICATOR */}
                    <MdAttachEmail className="absolute -left-1 text-white"/>
                    adhidrive46@email.com
                </motion.a>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                  viewport={{ once: true }}>
                  Thrissur, Kerala, India
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}>
                  Available for freelance & full-time
                </motion.p>
            </div>
        </motion.div>
        {/* RIGHT */}
        <motion.div variants={fade} initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative flex items-center justify-center">
            {/* IMAGE */}
            <motion.img
              src={assets.traffic}
              alt="Traffic Illustration"
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: -40 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="max-w-full h-auto opacity-90 -mt-32"/>

            {/* 🔴 INSTAGRAM */}
            <motion.a
              href="https://www.instagram.com/adi.hh_?igsh=aWFhbTZuNWcxYmVh"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-[16.5%] left-[38%]"
              whileHover={{ scale: 1.15 }}>
                <FaInstagram className="drop-shadow-[0_0_12px_rgba(16,185,129,0.7)]
                      w-10 h-10
                      text-red-500
                      bg-trasparent
                      opacity-90
                      rounded-full
                      mix-blend-screen
                      transition"/>
            </motion.a>
            {/* 🟡 GITHUB */}
            <motion.a href="https://github.com/adithdev-glitch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-[34%] left-[38%]"
                    whileHover={{ scale: 1.15 }}>
                    <FaGithub className="w-10 h-10 text-yellow-400
                      bg-trasparent
                      opacity-90
                      rounded-full
                      mix-blend-screen
                      transition"/>
            </motion.a>
                
            {/* 🟢 LINKEDIN */}
            <motion.a href="https://linkedin.com/in/adithtp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-[50%] left-[38.5%]"
                  whileHover={{ scale: 1.15 }}>
                  <FaLinkedin className=" w-10 h-10 text-emerald-400
                      bg-trasparent
                      opacity-90
                      drop-shadow-[0_0_12px_rgba(16,185,129,0.7)]
                      mix-blend-screen
                      transition"/>
            </motion.a>
        </motion.div>
    </div>
    <footer className="w-full -mt-10 bg-black border-t border-white/10 pt-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 flex items-center justify-between text-sm"
      >
        {/* LEFT */}
        <span className="text-gray-400 tracking-widest tinos-regular">
          Developed by ADITH TP
        </span>

        {/* RIGHT */}
        <div className="flex items-center gap-6 text-gray-500">
          <span>All rights reserved © 2026</span>

          <button
            onClick={scrollToTop}
            className="border border-white/20 px-3 py-1
              tracking-widest hover:bg-white hover:text-black
              transition"
          >
            TOP ↑
          </button>
        </div>
      </motion.div>
    </footer>
</section>
  );
}

