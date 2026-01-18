import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const techRows = [
 
  ["React", "Next.js", "TypeScript"],
  ["JavaScript", "GSAP", "Three.js"],
  ["Tailwind CSS", "HTML", "CSS"],
  ["Node.js", "Git", "Vite"],
];

const ServiceSummary = () => {
  const rowsRef = useRef([]);

  useGSAP(() => {
    rowsRef.current.forEach((row, index) => {
      gsap.to(row, {
        xPercent: index % 2 === 0 ? 30 : -30,
        ease: "none",
        scrollTrigger: {
          trigger: row,
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive ">
       
      {techRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          ref={(el) => (rowsRef.current[rowIndex] = el)}
          className="flex text-xs md:text-2xl flex-wrap items-center justify-center gap-6"
        >
          {row.map((tech, techIndex) => (
            <span
              key={techIndex}
              className={`
                uppercase tracking-widest
                ${tech === "React" || tech === "Next.js" ? "font-normal" : ""}
                ${tech === "GSAP" || tech === "Three.js" ? "italic" : ""}
              `}
            >
              {tech}
            </span>
          ))}
        </div>
      ))}
    </section>
  );
};

export default ServiceSummary;
