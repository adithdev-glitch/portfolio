import { useEffect } from "react";

export default function Loader({ onFinish }) {
  const text = "adith tp";

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <p className="text-4xl fleur-de-leah-regular">
        {text.split("").map((char, index) => (
          <span
            key={index}
            style={{
              animation: "letterColor 0.6s ease forwards",
              animationDelay: `${index * 0.2}s`,
              display: "inline-block",
              color: "white",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </p>
    </div>
  );
}
