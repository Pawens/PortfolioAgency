import React from "react";
import FaqCard, { FaqItem } from "../FaqCard/FaqCard";
import "./Faq.css";

const faqData: FaqItem[] = [
  {
    id: "panel1",
    title: "Collapsible Group Item #1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: "panel2",
    title: "Collapsible Group Item #2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
];

function Faq() {
  return (
    <div className="faqCard">
      <div className="faqTitle">
        <h2>FAQ</h2>
        <p>Vos questions les plus courantes:</p>
      </div>
      <div>
        <FaqCard items={faqData} />
      </div>
    </div>
  );
}

export default Faq;
