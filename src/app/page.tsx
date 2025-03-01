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

export default function Home() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  return (
    <div style={{ position: "relative" }}>
      <FormProvider>
        <ConfirmationPopup />
        <section className="section sectionHero">
          <BackgroundCircles
            numCircles={2}
            colors={["rgba(255, 100, 100, 0.6)", "rgba(50, 50, 200, 0.6)"]}
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
            scrollSpeedFactor={200}
          />
          <Hero />
        </section>
        <section className="section sectionAdvantages">
          <BackgroundCircles
            numCircles={1}
            colors={["rgba(53, 14, 159, 0.66)"]}
            minSize={500}
            maxSize={500}
            blurAmount={110}
            initialPositions={[{ top: -55, left: -10 }]}
            moveDistances={[{ x: 0, y: 400 }]}
            sides={["bottom"]}
            sectionRef={section2Ref}
            scrollSpeedFactor={500}
          />
          <AdvantagesCards />
        </section>
        <section className="section sectionMainValues">
          <MainValuesCards />
        </section>
        <section className="section sectionProjectsSteps">
          <h2>How do we work ?</h2>
          <ProjectsSteps />
        </section>
        <section className="section sectionExpertise">
          <h2>Our Expertise</h2>
          <p>
            Our team is specialized in 3 areas to cover all spectra of the web,
            from design to maintenance!
          </p>
          <Expertises />
        </section>
        <section className="section sectionFlex sectionProjects">
          <BackgroundCircles
            numCircles={3}
            colors={[
              "rgb(31, 74, 27)",
              "rgb(119, 118, 106)",
              "rgb(94, 25, 25)",
            ]}
            minSize={500}
            maxSize={500}
            blurAmount={160}
            initialPositions={[
              { top: 100, left: 0 },
              { top: 0, left: 0 },
              { top: 0, left: 0 },
            ]}
            moveDistances={[
              { x: 0, y: 3 },
              { x: 0, y: 800 },
              { x: 300, y: 0 },
            ]}
            sides={["bottom", "bottom", "right"]}
            sectionRef={section2Ref}
            scrollSpeedFactor={1}
          />

          <h2>Our Projects</h2>
          <ProjectsClient />
        </section>

        <section className="section sectionFlex sectionTestimonials">
          <h2>Testimonials</h2>
          <Testimonials />
        </section>
        <section className="section sectionFlex sectionTeamPresentation">
          <h2>Team Presentation</h2>
          <TeamPresentation />
        </section>
        <section className="section sectionFlex sectionTeamStack">
          <h2>Our Stack</h2>
          <div className="stackContainer">
            <div className="stackLine">
              <Bubble>
                <NextSvg />
              </Bubble>
              <Bubble>
                <ReactSvg />
              </Bubble>
              <Bubble>
                <StrapiSvg />
              </Bubble>
              <Bubble>
                <NodeSvg />
              </Bubble>
              <Bubble>
                <ShopifySvg />
              </Bubble>
              <Bubble>
                <PostgreeSvg />
              </Bubble>
            </div>
          </div>
        </section>
        <section className="section sectionFaq">
          <Faq />
        </section>
        <section className="section sectionFlex sectionContact">
          <h2>Contact Us</h2>
          <ContactForm />
        </section>
      </FormProvider>
    </div>
  );
}
