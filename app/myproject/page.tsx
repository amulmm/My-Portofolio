'use client';

import { Timeline } from "../components/Timelines/Timeline";
import { BackgroundBeams } from '../components/Beams/BeamsBackground';
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

const data = [
    {
      title: "2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            For this project, I built a brain tumor detection model using TensorFlow in Python.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="/images/braintumordetection.png"
              alt="hero template"
              width={750}
              height={500}
              //className="h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            My project involved building a pharma chatbot designed to answer patients' questions regarding medicines
          </p>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="/images/Pharma-Chatbot.png"
              alt="startup template"
              width={750}
              height={500}
              //className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
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
      name: "My Projects",
      link: "/myproject",
    },
 ];

const page = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="overflow-hidden">
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
    <div className="absolute top-0 right-0 left-0 bottom-0 w-full">
        <BackgroundBeams />
    </div>
    <div className="w-full bg-black">
      <div className="w-full bg-black pt-5">
        <Timeline data={data}/>
      </div>
    </div>
    </div>
  );
}

export default page