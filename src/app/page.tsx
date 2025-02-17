"use client";

import AdvantagesCards from "../components/AdvantagesCards/AdvantagesCards";
import Hero from "../components/Hero/Hero";
import MainValuesCards from "../components/MainValuesCards/MainValuesCards";
import TeamPresentation from "../components/TeamPresentation/TeamPresentation";
import Testimonials from "../components/Testimonials/Testimonials";
import Image from "next/image";
import purplesCircles from "../../public/img/purpulesCircles.webp";
// import Projects from "@/components/Projects/Projects";

import { motion as m } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import Expertises from "../components/Expertises/Expertises";
import ProjectsClient from "../components/Projects/ProjectsClient";
import Bubble from "../components/Bubble/Bubble";
import UserForm from "../components/UserFrom/UserForm";

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <section className="sectionHero">
        <Hero />
      </section>
      <section className="sectionAdvantages">
        <AdvantagesCards />
      </section>
      <section className="sectionMainValues">
        <MainValuesCards />
        <Image
          className="backgroundCirclesImage"
          src={purplesCircles}
          alt="background design image"
        />
      </section>
      <section className="sectionExpertise">
        <h2>Our Expertise</h2>
        <p>
          Our team is specialized in 3 areas to cover all spectra of the web,
          from design to maintenance!
        </p>
        <Expertises />
      </section>
      <section className="sectionProjects">
        <h2>Our Projects</h2>
        <ProjectsClient />
      </section>
      <section className="sectionTestimonials">
        <h2>Testimonials</h2>
        <Testimonials />
      </section>
      <section className="sectionTeamPresentation">
        <h2>Team Presentation</h2>
        <TeamPresentation />
      </section>
      <section className="sectionTeamPresentation">
        <h2>Our Stack</h2>
        <Bubble>
          <m.div className="testtets">
            <FaQuoteLeft />
          </m.div>
        </Bubble>
      </section>
      <section className="sectionContact">
        <h2>Contact Us</h2>
        <UserForm />
      </section>
    </div>
  );
}
