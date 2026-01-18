import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

import { socials } from "../constants";
import gsap from "gsap";

const Contact = () => {
  const text = `Open to freelance, internships, and full-time roles.
Let’s talk about how I can contribute to your team.`;

  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);
  return (
    <section
      id="contact"
      className="flex font-italic-fair flex-col justify-between min-h-screen bg-black"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={"You Dream It, I Code it"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />
        <div className="flex px-10 font-modern text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
          <div className="flex flex-col w-full gap-10">
            <div className="social-link">
              <h2 className="font-modern">E-mail</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">
                sapanadhami1111@gmail.com
              </p>
            </div>
       
            <div className="social-link">
              <h2>Social Media</h2>
              <div className="w-full h-px my-2 bg-white/30" />
            <div className="flex flex-wrap gap-3">
            {socials.map((social, index) => {
              const Icon = social.icon;

               return (
                 <a
            key={index}
           href={social.href}
           target="_blank"
           rel="noreferrer"
           className="flex items-center gap-2 text-xs leading-loose tracking-widest uppercase
                   md:text-sm hover:text-white/80 transition-colors duration-200"
      >
        <Icon className="w-6 h-6" />
  
        {Icon}
  
      </a>
    );
  })}
</div>

            </div>
          </div>
        </div>
      </div>
 <p className="text-xs tracking-widest text-white/40">
  © {new Date().getFullYear()} Sapana Dhami. All rights reserved.
</p>

    </section>
  );
};

export default Contact;
