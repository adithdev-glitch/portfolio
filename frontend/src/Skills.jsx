import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import FloatingIcon from "./FloatingIcon"


gsap.registerPlugin(ScrollTrigger)

const skills = [
  {
    title: "Languages",
    items: ["JavaScript", "HTML", "CSS", "TypeScript"],
  },
  {
    title: "Libraries & Frameworks",
    items: [
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Bootstrap",
      "Framer Motion",
      "GSAP",
      "Three.js",
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "JWT",
      "RESTful APIs",
      "Cloudinary",
      "Vercel",
      "Render",
    ],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "Productivity Tools",
    items: [
      "Microsoft Word",
      "Excel",
      "PowerPoint",
      "Google Docs",
      "Google Sheets",
    ],
  },
]

export default function Skills() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current

    const scrollLength = track.scrollWidth - window.innerWidth

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${scrollLength}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        onUpdate: (self) => {
          gsap.to(track, {
            x: -scrollLength * self.progress,
            ease: "none",
            overwrite: "auto",
          })
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-screen h-screen bg-black text-white overflow-hidden"
    >
        <FloatingIcon />
      {/* HORIZONTAL TRACK */}
      <div
        ref={trackRef}
        className="flex h-full will-change-transform"
      >
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="w-screen h-full flex items-center px-8 md:px-32"
          >
            <div className="max-w-xl">
              

              {/* TITLE */}
              <h1 className="text-5xl md:text-6xl font-semibold mt-3 mb-8">
                {skill.title}
              </h1>

              {/* ITEMS */}
              <div className="flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 border border-black/20 rounded-full text-sm
                    hover:bg-black hover:text-white transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
