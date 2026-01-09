import { useEffect, useRef } from "react"
import gsap from "gsap"
import { BiLogoVisualStudio } from "react-icons/bi";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJsSquare,
} from "react-icons/fa"
import {
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiFramer,
  SiGreensock,
  SiGithub,
  SiPostman,
} from "react-icons/si"

const icons = [
  FaReact,
  FaJsSquare,
  SiTypescript,
  FaNodeJs,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiFramer,
  SiGreensock,
  FaGitAlt,
  SiGithub,
  SiMongodb,
  SiMysql,
  SiPostman,
  BiLogoVisualStudio,
]

const iconColors = [
    "#61DAFB", // React
    "#F7DF1E", // JavaScript
    "#3178C6", // TypeScript
    "#68A063", // Node
    "#000000", // Express (keep subtle)
    "#38BDF8", // Tailwind
    "#7952B3", // Bootstrap
    "#E6E6E6", // Framer Motion
    "#88CE02", // GSAP
    "#F05032", // Git
    "#181717", // GitHub
    "#47A248", // MongoDB
    "#00758F", // MySQL
    "#FF6C37", // Postman
    "#007ACC", // VS Code
  ]
  

export default function FloatingIcon() {
  const iconsRef = useRef([])

  useEffect(() => {
    iconsRef.current.forEach((icon, i) => {
      gsap.fromTo(
        icon,
        {
          y: gsap.utils.random(-30, 30),
          x: gsap.utils.random(-30, 30),
        },
        {
          y: gsap.utils.random(-80, 80),
          x: gsap.utils.random(-80, 80),
          duration: gsap.utils.random(6, 12),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.3,
        }
      )
    })
  }, [])

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {icons.map((Icon, i) => (
        <div
          key={i}
          ref={(el) => (iconsRef.current[i] = el)}
          className="absolute text-white/10 opacity-30"
          style={{
            color: iconColors[i],
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
            fontSize: `${Math.random() * 40 + 40}px`,
          }}
        >
          <Icon />
        </div>
      ))}
    </div>
  )
}
