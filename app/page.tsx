"use client";

import Image from "next/image";
import Link from "next/link";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavToggle,
  MobileNavMenu,
  MobileNavHeader,
} from "./components/ResizeableNavibars/ResizeableNavibar";
import React, { useState } from "react";
import { BackgroundBeams } from "./components/Beams/BeamsBackground";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About me",
      link: "/about",
    },
    {
      name: "Resume",
      link: "/resume/Lebenslauf-ulum.pdf",
    },
    {
      name: "My Projects",
      link: "/myproject",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="overflow-auto md:overflow-hidden md:h-screen md:w-screen">
      <Navbar className="md:top-20">
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <NavbarButton>
            <a href="https://www.linkedin.com/in/achmad-miftahul-ulum-84b92a237" target="_blank" rel="noopener noreferrer">
             LinkedIn
            </a>
          </NavbarButton>
        </NavBody>
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <NavItems items={navItems} onItemClick={() => setIsMobileMenuOpen(false)} isMobile />
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full hidden md:block pointer-events-none">
        <BackgroundBeams />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-0 md:pt-5 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          <div className="md:col-span-5 flex justify-center items-center md:block">
            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
          </div>
          <div className="md:col-span-7 flex flex-col justify-center items-start text-left">
            <div className="flex items-center h-full py-4 md:py-0">
              <div className="flex flex-col gap-4">
                <AnimatedContent
                  distance={150}
                  direction="horizontal"
                  reverse={false}
                  duration={0.8}
                  threshold={0.2}
                  delay={0.3}
                  ease="power2.out"
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                >
                  <div className="flex items-center gap-2">
                    <h1 className="bg-clip-text items-start text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold text-xl sm:text-xl md:text-4xl lg:text-4xl">
                      I´m Ready for Job
                    </h1>
                    <RotatingText
                      texts={[
                        "Medical Image Processing",
                        "Databases",
                        "Generative Manufacturing",
                        "Ai Development",
                      ]}
                      mainClassName="px-2 sm:px-2 md:px-3 bg-[#d9d9d9] text-[#000] overflow-hidden py-0.5 py-1 justify-center rounded-lg text-base sm:text-lg md:text-xl lg:text-2xl font-bold inline-flex"
                      staggerFrom={"last"}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      transition={{
                        type: "spring",
                        damping: 30,
                        stiffness: 400,
                      }}
                      rotationInterval={2000}
                    />
                  </div>
                </AnimatedContent>
                <div className="flex flex-col items-start">
                  <h1 className="bg-clip-text items-start text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold text-xl sm:text-xl md:text-4xl lg:text-4xl">
                    I'm Achmad Miftahul Ulum
                  </h1>
                  <h1 className="bg-clip-text items-start text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold text-xl sm:text-xl md:text-4xl lg:text-4xl">
                    I'm a Medical Technology Student
                  </h1>
                </div>
                <div>
                  <div className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-left font-sans text-sm sm:text-base md:text-lg">
                    Hi, I'm from Indonesia and study Medical Engineering at Hochschule Bremerhaven. My studies focus on databases, generative manufacturing, programming, and medical image processing. I've gained hands-on experience optimizing operations at Amazon and working with industrial robots at Mercedes Benz.
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                    <a
                      href="mailto:achmadmiftahululum9@gmail.com"
                      className="px-4 py-2 rounded-lg border top-5 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold text-sm sm:text-base"
                    >
                        Contact me now
                    </a>
                    <a
                      href="https://github.com/amulmm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg border top-5 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold text-sm sm:text-base"
                    >
                        My GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
