import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Space from "./public/Space";


const Hero = () => {
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow3D(true);
    }, 4000); // ⏱ 5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-screen">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center px-6 md:px-16 text-white">
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
            ABOUT <span className="text-indigo-400">ME</span>
          </h1>

          <p className="mt-4 text-gray-400 max-w-md tinos-regular">
            Hey, I’m ADITH TP — a web developer who enjoys crafting visually
            striking and performance-driven websites. I work mainly with React
            and the MERN stack, focusing on smooth UI interactions, clean code,
            and meaningful user experiences. Always curious, always building.
          </p>
          <p className="mt-4 text-gray-400 max-w-md tinos-regular">
            I love bringing ideas to life through code, turning pixels into experiences
             that feel alive. From playful animations to subtle 3D interactions, I experiment
              at the edge of technology and design to create websites that not only function 
              flawlessly but also spark curiosity and delight. Every project is a canvas, and 
              every line of code is a brushstroke.</p>
        </div>

        {/* RIGHT 3D CANVAS */}
        <div className="relative h-[80vh] lg:h-full">
          {show3D ? (
            <Canvas
              camera={{ position: [0, -5, 7], fov: 45 }}
              gl={{ toneMappingExposure: 1.3 }}
            >
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1.2} />
              <directionalLight position={[5, 5, 5]} intensity={2.5} />
              <directionalLight position={[-5, -5, -5]} intensity={1.5} />

              <Suspense fallback={null}>
                <Space />
              </Suspense>

              <Environment preset="sunset" />
            </Canvas>
          ) : (
            // OPTIONAL placeholder
            <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm tracking-widest">
              LOADING VISUAL MODULE...
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Hero;
