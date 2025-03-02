"use client";

import AdvantagesCards from "../components/AdvantagesCards/AdvantagesCards";
import Hero from "../components/Hero/Hero";
import MainValuesCards from "../components/MainValuesCards/MainValuesCards";
import TeamPresentation from "../components/TeamPresentation/TeamPresentation";
import Testimonials from "../components/Testimonials/Testimonials";
import Expertises from "../components/Expertises/Expertises";
import ProjectsClient from "../components/Projects/ProjectsClient";
import ReactSvg from "../../public/svg/ReactSvg";
import NextSvg from "../../public/svg/NextSvg";
import NodeSvg from "../../public/svg/NodeSvg";
import ShopifySvg from "../../public/svg/ShopifySvg";
import PostgreeSvg from "../../public/svg/PostgreeSvg";
import StrapiSvg from "../../public/svg/StrapiSvg";
import Bubble from "../components/Bubble/Bubble";
import ProjectsSteps from "../components/ProjectsSteps/ProjectsSteps";
import ContactForm from "../components/ContactForm/ContactForm";
import { FormProvider } from "../context/ConfirmationPopupContext";
import ConfirmationPopup from "../components/ConfirmationPopup/ConfirmationPopup";
import Faq from "../components/Faq/Faq";
import BackgroundCircles from "../components/BackgroundCircles/BackgroundCircles";
import { useRef } from "react";
import LanguageSelector from "@/components/LanguageSelector/LanguageSelector";
import { useLanguage } from "@/context/LanguageContext";
import translations from "../../public/translation";
import { motion } from "framer-motion";

const bubbles = [
  { key: "next", component: <NextSvg /> },
  { key: "react", component: <ReactSvg /> },
  { key: "strapi", component: <StrapiSvg /> },
  { key: "node", component: <NodeSvg /> },
  { key: "shopify", component: <ShopifySvg /> },
  { key: "postgree", component: <PostgreeSvg /> },
];

export default function Home() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);
  const section8Ref = useRef(null);
  const section9Ref = useRef(null);

  const { selectedLanguage } = useLanguage();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const bubbleVariants = {
    hidden: (index: number) => {
      const directions = ["left", "right", "top", "bottom"];
      const direction = directions[index % directions.length];

      switch (direction) {
        case "left":
          return { opacity: 0, x: -100 };
        case "right":
          return { opacity: 0, x: 100 };
        case "top":
          return { opacity: 0, y: -100 };
        case "bottom":
          return { opacity: 0, y: 100 };
        default:
          return { opacity: 0, y: 100 };
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <div style={{ position: "relative" }}>
      <FormProvider>
        <ConfirmationPopup />
        <LanguageSelector />
        <section className="section sectionHero" ref={section1Ref}>
          <BackgroundCircles
            numCircles={2}
            colors={["rgba(252, 109, 54, 0.6)", "rgb(50, 43, 225, 0.6)"]}
            minSize={1000}
            maxSize={1000}
            blurAmount={110}
            initialPositions={[
              { top: -75, left: 0 },
              { top: -60, left: 60 },
            ]}
            moveDistances={[
              { x: 280, y: 0 },
              { x: 290, y: 0 },
            ]}
            sides={["left", "right"]}
            sectionRef={section1Ref}
            scrollSpeedFactor={100}
          />
          <Hero />
        </section>
        <section className="section sectionAdvantages" ref={section2Ref}>
          <BackgroundCircles
            numCircles={1}
            colors={["rgb(50, 43, 225, 0.6)"]}
            minSize={500}
            maxSize={500}
            blurAmount={110}
            initialPositions={[{ top: -0, left: -10 }]}
            moveDistances={[{ x: 0, y: 400 }]}
            sides={["bottom"]}
            sectionRef={section2Ref}
            scrollSpeedFactor={200}
          />
          <AdvantagesCards />
        </section>
        <section className="section sectionMainValues">
          <MainValuesCards />
        </section>
        <section className="section sectionProjectsSteps" ref={section9Ref}>
          <BackgroundCircles
            numCircles={1}
            colors={["rgba(252, 109, 54, 0.6)"]}
            minSize={400}
            maxSize={400}
            blurAmount={170}
            initialPositions={[{ top: 0, left: 90 }]}
            moveDistances={[{ x: 0, y: 400 }]}
            sides={["bottom"]}
            sectionRef={section9Ref}
            scrollSpeedFactor={100}
          />
          <h2>{translations[selectedLanguage].projectsSteps.title}</h2>
          <ProjectsSteps />
        </section>
        <section className="section sectionExpertise">
          <h2>{translations[selectedLanguage].expertise.title}</h2>
          <p>{translations[selectedLanguage].expertise.description}</p>
          <Expertises />
        </section>
        <section
          className="section sectionFlex sectionProjects"
          ref={section3Ref}
        >
          <BackgroundCircles
            numCircles={2}
            colors={["rgba(252, 109, 54, 0.6)", "rgb(50, 43, 225, 0.6)"]}
            minSize={1000}
            maxSize={1000}
            blurAmount={160}
            initialPositions={[
              { top: 100, left: 0 },
              { top: 0, left: 0 },
            ]}
            moveDistances={[
              { x: 0, y: 400 },
              { x: 300, y: 0 },
            ]}
            sides={["bottom", "right"]}
            sectionRef={section3Ref}
            scrollSpeedFactor={100}
          />

          <h2>{translations[selectedLanguage].projects.title}</h2>
          <ProjectsClient />
        </section>

        <section
          className="section sectionFlex sectionTestimonials"
          ref={section4Ref}
        >
          <BackgroundCircles
            numCircles={1}
            colors={["rgb(50, 43, 225, 0.6)"]}
            minSize={800}
            maxSize={800}
            blurAmount={160}
            initialPositions={[{ top: 0, left: 80 }]}
            moveDistances={[{ x: 400, y: 0 }]}
            sides={["left"]}
            sectionRef={section4Ref}
            scrollSpeedFactor={100}
          />
          <h2>{translations[selectedLanguage].testimonials.title}</h2>
          <Testimonials />
        </section>
        <section
          className="section sectionFlex sectionTeamPresentation"
          ref={section5Ref}
        >
          <BackgroundCircles
            numCircles={2}
            colors={["rgba(252, 109, 54, 0.6)", "rgb(50, 43, 225, 0.6)"]}
            minSize={300}
            maxSize={600}
            blurAmount={170}
            initialPositions={[
              { top: 0, left: 80 },
              { top: 0, left: 0 },
            ]}
            moveDistances={[
              { x: 0, y: 200 },
              { x: 0, y: 400 },
            ]}
            sides={["top", "bottom"]}
            sectionRef={section5Ref}
            scrollSpeedFactor={100}
          />
          <h2>{translations[selectedLanguage].team.title}</h2>
          <TeamPresentation />
        </section>
        <section
          className="section sectionFlex sectionTeamStack"
          ref={section6Ref}
        >
          <BackgroundCircles
            numCircles={1}
            colors={["rgba(252, 109, 54, 0.6)"]}
            minSize={400}
            maxSize={400}
            blurAmount={170}
            initialPositions={[{ top: 0, left: 80 }]}
            moveDistances={[{ x: 600, y: 0 }]}
            sides={["left"]}
            sectionRef={section6Ref}
            scrollSpeedFactor={100}
          />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {translations[selectedLanguage].stack.title}
          </motion.h2>

          <motion.div
            className="stackContainer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div className="stackLine" variants={containerVariants}>
              {bubbles.map((item, index) => (
                <motion.div
                  key={item.key}
                  variants={bubbleVariants}
                  custom={index}
                >
                  <Bubble>{item.component}</Bubble>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <section className="section sectionFaq" ref={section7Ref}>
          <BackgroundCircles
            numCircles={1}
            colors={["rgba(252, 109, 54, 0.6)"]}
            minSize={400}
            maxSize={400}
            blurAmount={170}
            initialPositions={[{ top: 0, left: 0 }]}
            moveDistances={[{ x: 0, y: 400 }]}
            sides={["bottom"]}
            sectionRef={section7Ref}
            scrollSpeedFactor={100}
          />
          <Faq />
        </section>
        <section
          className="section sectionFlex sectionContact"
          ref={section8Ref}
        >
          <BackgroundCircles
            numCircles={2}
            colors={["rgb(50, 43, 225, 0.6)", "rgba(252, 109, 54, 0.6)"]}
            minSize={700}
            maxSize={700}
            blurAmount={110}
            initialPositions={[
              { top: 0, left: 0 },
              { top: 0, left: 60 },
            ]}
            moveDistances={[
              { x: 500, y: 0 },
              { x: 500, y: 0 },
            ]}
            sides={["left", "right"]}
            sectionRef={section8Ref}
            scrollSpeedFactor={100}
          />
          <h2>{translations[selectedLanguage].contact.title}</h2>
          <ContactForm />
        </section>
      </FormProvider>
    </div>
  );
}
