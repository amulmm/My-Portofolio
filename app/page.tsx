import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Squares from "./components/Squares/Squares";
import GradientText from "./components/GradientText/GradientText";
import TrueFocus from "./components/TrueFocus/TrueFocus";
import ScrollReveal from "./components/ScrollReveal/ScrollReveal";
import { Timeline } from "./components/Timelines/Timeline";
import { BackgroundBeams } from "./components/Beams/BeamsBackground";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./components/ResizableNavbar/ResizableNavbar";
import Link from "next/link";

export default function Home() {
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
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full">
        <BackgroundBeams />
      </div>
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-5">
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
          </div>
          <div className="col-span-6">
            <div className="flex items-center h-full">
              <div className="flex flex-col gap-4">
                <AnimatedContent
                  distance={150}
                  direction="horizontal"
                  reverse={false}
                  duration={1.2}
                  threshold={0.2}
                  delay={0.3}
                  ease="bounce.out"
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                >
                  <div className="flex items-center gap-2">
                    <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                      I´m Ready for Job
                    </h1>
                    <RotatingText
                      texts={[
                        "Medical Image Processing",
                        "Databases",
                        "Generative Manufacturing",
                        "Ai Development",
                      ]}
                      mainClassName="px-2 sm:px-2 md:px-3 bg-[#d9d9d9] text-[#000] overflow-hidden py-0.5 py-1 justify-center rounded-lg text-2xl font-bold inline-flex"
                      staggerFrom={"last"}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
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
                  <SplitText
                    text="I'm Achmad Miftahul Ulum"
                    className="text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold"
                    delay={50}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.2}
                    rootMargin="-50px"
                    textAlign="center"
                  />
                  <SplitText
                    text="I'm a Medical Technology Student"
                    className="text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.5}
                    rootMargin="-50px"
                    textAlign="center"
                  />
                </div>
                <div>
                  <BlurText
                    text="Hi, I'm from Indonesia and study Medical Engineering at Hochschule Bremerhaven. My studies focus on databases, generative manufacturing, programming, and medical image processing. I've gained hands-on experience optimizing operations at Amazon and working with industrial robots at Mercedes Benz."
                    delay={75}
                    animateBy="words"
                    direction="top"
                    className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans"
                  />
                  <div className="flex items-center gap-4">
                    <Link href="mailto:achmadmiftahululum9@gmail.com">
                      <GradientText
                        colors={["#D9D9D9"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="px-4 py-2 rounded-lg border top-5 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold"
                      >
                        Contact me now
                      </GradientText>
                    </Link>
                    <Link href="https://github.com/amulmm">
                      <GradientText
                        colors={["#D9D9D9"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="px-4 py-2 rounded-lg border top-5 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold"
                      >
                        My GitHub
                      </GradientText>
                    </Link>
                    <TrueFocus
                      sentence="Stay Calm"
                      manualMode={false}
                      blurAmount={5}
                      borderColor="#6344F5"
                      animationDuration={2}
                      pauseBetweenAnimations={1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          <Timeline data={data}/>
    </div>
  );
}
