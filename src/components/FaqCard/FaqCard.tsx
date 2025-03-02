"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./FaqCard.css";

export interface FaqItem {
  title: string;
  description: string;
  id: string;
}

interface FaqCardProps {
  items: FaqItem[];
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({}) => ({
  color: "white",
  borderTop: "1px solid rgba(255, 255, 255, .125)",
  padding: "16px",
  backgroundColor: "transparent",

  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "transparent",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  color: "#999999",
}));

function FaqItemComponent({ item, index }: { item: FaqItem; index: number }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    margin: "-30% 0px -30% 0px",
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      key={item.id}
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
    >
      <Accordion>
        <AccordionSummary
          aria-controls={`${item.id}-content`}
          id={`${item.id}-header`}
          className="faqCardSummary"
        >
          <Typography component="span">{item.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="faqCardDetails">{item.description}</Typography>
        </AccordionDetails>
      </Accordion>
    </motion.div>
  );
}

export default function FaqCard({ items }: FaqCardProps) {
  return (
    <div>
      {items.map((item, index) => (
        <FaqItemComponent key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}
