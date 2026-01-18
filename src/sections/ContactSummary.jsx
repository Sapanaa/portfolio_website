import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import gsap from "gsap";
import { useRef } from "react";

const ContactSummary = () => {
  const cardsRef = useRef([]);

  const text = `Education is a lifelong journey`;

  useGSAP(() => {
    gsap.from(cardsRef.current, {
      y: 120,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.25,
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top center",
      },
    });
  }, []);

  return (
    <section
      id="education"
      className="flex flex-col justify-between min-h-screen bg-black text-white"
    >
      {/* Header */}
      <AnimatedHeaderSection
        subTitle={"Learning Never Stops"}
        title={"Education"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />

      {/* Education Cards */}
      <div className="flex px-10 mb-20 font-light uppercase lg:text-[28px] text-[22px] leading-snug">
        <div className="flex flex-col w-full gap-12">
          
          {/* Masters */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="border-b border-white/30 pb-8"
          >
            <h2 className="font-modern">Master’s Degree</h2>
            <p className="mt-4 text-sm tracking-wider normal-case text-white/70">
              MSc in Data Science & Advanced Analytics — currently pursuing at NOVA IMS,
              with a focus on data-driven problem solving, analytics, and
              applied computing.
            </p>
          </div>

          {/* Bachelor */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="border-b border-white/30 pb-8"
          >
            <h2 className="font-modern">Bachelor’s Degree</h2>
            <p className="mt-4 text-sm tracking-wider normal-case text-white/70">
              Bachelor of Science in Informatics Engineering — completed at Institute Politechnic of Braganca
building a strong technical foundation in software engineering, problem-solving,
and modern web development.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ContactSummary;
