import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import "./Testimonial.css";

interface TestimonialProps {
  description: string;
  name: string;
  role: string;
}

function Testimonial({ description, name, role }: TestimonialProps) {
  const testimonialRef = useRef(null);
  const isInView = useInView(testimonialRef, {
    margin: "-20% 0px -20% 0px",
    once: true,
  });

  return (
    <motion.div
      ref={testimonialRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="testimonial"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <FaQuoteLeft className="quoteIcon" />
      </motion.div>

      <motion.p
        className="testimonialDescription"
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        {description}
      </motion.p>

      <motion.div
        className="testimonialInfo"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
      >
        <p className="testimonialName">{name}</p>
        <p className="testimonialRole">{role}</p>
      </motion.div>
    </motion.div>
  );
}

export default Testimonial;
