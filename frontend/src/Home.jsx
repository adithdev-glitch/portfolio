import { motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect } from "react"
import {assets} from "./asset/assets.js"


const name = "ADITH TP"

export default function Home() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const parallaxX = useTransform(mouseX, [0, window.innerWidth], [-20, 20])
  const parallaxY = useTransform(mouseY, [0, window.innerHeight], [-20, 20])

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden font-mono">
      {/* ⬇ DOWNLOAD CV */}
      <motion.a
        href="/ADITH_TP.pdf"
        download
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.08 }}
        className="fixed top-6 right-6 z-30 border border-white px-5 py-2 text-xs tracking-[0.35em]
        hover:bg-white hover:text-black transition"
      >
        DOWNLOAD CV
      </motion.a>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-screen px-6 md:px-20 items-center">

        {/* 🧠 LEFT */}
        <motion.div
          style={{ x: parallaxX, y: parallaxY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          {/* LETTER REVEAL */}
          <h1 className="flex text-4xl md:text-6xl font-bold tracking-[0.35em] luckiest-guy-regular">
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.08 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          <motion.h2 initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1 }} className="text-lg md:text-2xl tracking-widest text-gray-300 crimson-text-regular">
            MERN STACK DEVELOPER
          </motion.h2>

          <motion.p initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.5 }} className="text-gray-400 max-w-md leading-relaxed">
            “Exploring the universe of code, one pixel at a time.”
          </motion.p>

          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.7 }} className="text-gray-500 text-xs tracking-widest">
            SYSTEM STATUS: <span className="text-green-400">ONLINE ▢▢▢</span>
          </motion.div>
        </motion.div>

{/* 📸 RIGHT IMAGE — ENHANCED */}
{/* 📸 RIGHT IMAGE — BIG HERO FRAME */}
<motion.div
  initial={{ x: 80, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1.1, ease: "easeOut" }}
  className="flex justify-center lg:justify-end mt-20 lg:mt-0"
>
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    whileHover={{ scale: 1.03 }}
    className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px]"
  >
    {/* 🌌 DEEP AMBIENT GLOW */}
    <div className="absolute inset-0 rounded-2xl blur-3xl opacity-30
      bg-gradient-to-br from-white/40 via-transparent to-transparent" />

    {/* 🧊 MAIN HUD FRAME */}
    <motion.div
      animate={{ opacity: [0.25, 0.55, 0.25] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0 rounded-2xl border border-white/40"
    />

    {/* ⚡ CORNER MARKERS */}
    {["tl", "tr", "bl", "br"].map((corner) => (
      <span
        key={corner}
        className={`absolute w-4 h-4 border-white/70 ${
          corner === "tl" && "top-0 left-0 border-l-2 border-t-2"
        } ${
          corner === "tr" && "top-0 right-0 border-r-2 border-t-2"
        } ${
          corner === "bl" && "bottom-0 left-0 border-l-2 border-b-2"
        } ${
          corner === "br" && "bottom-0 right-0 border-r-2 border-b-2"
        }`}
      />
    ))}

    {/* 👤 IMAGE */}
    <img
      src={assets.me}
      alt="Adith TP"
      className="absolute inset-6 w-[calc(100%-48px)] h-[calc(100%-48px)]
      object-cover rounded-xl grayscale hover:grayscale-0 transition duration-700"
    />
  </motion.div>
</motion.div>


      </div>

      {/* 📺 SCANLINES */}
      <div className="pointer-events-none absolute inset-0
        bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.05)_100%)]
        bg-[length:100%_3px] opacity-10" />
        {/* <Hero/> */}
    </div>
    
  )
}
