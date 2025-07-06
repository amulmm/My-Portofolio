import Image from "next/image";
"use client";
import Lanyard from "../components/Lanyard/Lanyard";
import RotatingText from "../components/RotatingText/RotatingText";
import SplitText from "../components/SplitText/SplitText";
import BlurText from "../components/BlurText/BlurText";
import AnimatedContent from "../components/AnimatedContent/AnimatedContent";
import Squares from "../components/Squares/Squares";
import GradientText from "../components/GradientText/GradientText";
import TrueFocus from "../components/TrueFocus/TrueFocus";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";
import { Timeline } from "../components/Timelines/Timeline";
import { BackgroundBeams } from "../components/Beams/BeamsBackground";
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
} from "../components/ResizeableNavibars/ResizeableNavibar";
import Link from "next/link";
import React, { useState } from "react";

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
      link: "/resume/Lebenslauf_Achmad.pdf",
    },
    {
      name: "My Projetcs",
      link: "/myproject",
    },
 ];

const about = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
    <div className="overflow-y-auto">
        <Navbar className="md:top-20">
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <NavbarButton>
            <Link href="https://www.linkedin.com/in/achmad-miftahul-ulum-84b92a237">
             LinkedIn
            </Link>
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
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full">
        <BackgroundBeams />
      </div>
      <div className="container mx-auto text-center flex flex-col items-center justify-center grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-12 md:pt-36 pb-8 h-full">
        <div className="md:col-span-1">
           <img
              src="/images/ulum.png"
              alt="startup template"
              width={750}
              height={500}
            />
        </div>
        <div className="relative flex flex-col gap-7 md:col-span-2 items-start">
            <div className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-xl md:text-3xl text-center font-sans font-bold top-20 px-4 md:px-0">
            About me...
            </div>
                <div className="flex flex-col gap-4">
                    <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-start font-sans text-sm md:text-base px-4 md:px-0">
                    My name is Achmad Miftahul Ulum, and I grew up in Bima, a small city on Sumbawa Island, Indonesia. From a young age, I was a creative and athletic child, with a particular fondness for mathematics. In elementary school, my passion for numbers led me to compete in the city-wide Math Olympics, where I proudly secured third place in Bima.
                    </h1>
                    <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-start font-sans text-sm md:text-base px-4 md:px-0">
                    I continued my junior high education at MTsN 1 Bima, where I forged many lasting friendships that I still cherish today. After junior high, I made the significant decision to move to Java Island, specifically to Bogor. This city held special meaning as it was where my mother pursued her undergraduate degree. In Bogor, I enrolled in a boarding school, a transformative experience where I lived away from home, only returning during semester breaks. This environment exposed me to a diverse group of friends from all over Indonesia, allowing me to learn about various customs and traditions from different ethnic groups. Sharing stories and experiences with them was truly wonderful.
                    </h1>
                    <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-start font-sans text-sm md:text-base px-4 md:px-0">
                    Following my time in Bogor, I decided to pursue higher education in Germany. Currently, I'm living in Bremerhaven, a city in northern Germany renowned for having one of Europe's largest ports. Here, I'm specializing in Medical Engineering with a focus on Medical Informatics.
                    </h1>
                  </div>
             </div>
                </div>
              </div>
          );
  }

export default about