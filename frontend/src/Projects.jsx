import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { assets } from "./asset/assets.js"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: "E-Learning Platform",
    description:
      "A MERN-based e-learning platform designed to make online learning seamless and engaging. It features secure authentication, dynamic course management, interactive lectures, and smooth payment integration. With an intuitive interface and responsive design, Eonix empowers learners to access quality education anytime, anywhere.",
    image: assets.project_1,
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    link: "https://github.com/adithdev-glitch/E-LearningApp",
  },
  {
    title: "E-Commerce Platform",
    description:
      "U-Fashion is a modern e-commerce platform built with the MERN stack, featuring secure payment integration for a seamless checkout experience. Users can browse products, add items to the cart, and complete purchases with confidence, while the platform ensures smooth, reliable transactions and a polished shopping interface.",
    image: assets.project_2,
    tech: ["React", "Node.js", "MongoDB", "Express", "Cloudinary", "JWT", "OAuth"],
    link: "https://github.com/adithdev-glitch/e-commerce",
  },
  {
    title: "HeyChat",
    description:
    "A full-stack real-time chat application built using the MERN stack that allows users to communicate instantly through text messages and image sharing. The application features secure user authentication, real-time messaging using Socket.IO, online user status, media upload support, responsive chat UI, and cloud-based image storage.",
    image: assets.project_3,
    tech: ["React", "Node.js", "MongoDB", "Express", "Cloudinary", "Socket.IO", "JWT"],
    link: "https://github.com/adithdev-glitch/chatApp",
  },
  
]

export default function Projects() {
  const containerRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        let fromProps = {}

        if (i === 0) fromProps = { x: -200, rotation: -5, opacity: 0 }
        if (i === 1) fromProps = { y: 200, opacity: 0 }
        if (i === 2) fromProps = { x: 200, rotation: 5, opacity: 0 }

        gsap.fromTo(
          card,
          fromProps,
          {
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 60%",
              toggleActions: "play reverse play reverse",
            },
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-white px-6 md:px-28 py-32 overflow-hidden"
    >
      <h1 className="text-5xl md:text-6xl sekuya-regular mb-12 text-black ">
        Featured Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <div
            key={project.title}
            ref={(el) => (cardsRef.current[i] = el)}
            className="border border-black/10 rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
          >
            <div className="w-full h-48 md:h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover  transition duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm border border-black/20 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="text-sm font-medium border-b border-black pb-1 hover:opacity-60 transition"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
