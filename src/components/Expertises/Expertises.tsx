import React from "react";
import ExpertiseCard from "../ExpertiseCard/ExpertiseCard";
import { LuCodeXml, LuPaintbrush, LuSmartphone } from "react-icons/lu";
import "./Expertises.css";

function Expertises() {
  return (
    <div className="expertisesContainer">
      <ExpertiseCard
        icon={LuCodeXml}
        label="Web Development"
        description="Specialized in creating dynamic web applications using modern frameworks and technologies."
      />
      <ExpertiseCard
        icon={LuPaintbrush}
        label="UI/UX Design"
        description="Creating intuitive and aesthetically pleasing user interfaces with a focus on user experience and accessibility."
      />
      <ExpertiseCard
        icon={LuSmartphone}
        label="Mobile Development"
        description="Focused on building seamless, mobile-optimized websites to capture the growing mobile audience, driving engagement where over 60% of web traffic is generated."
      />
    </div>
  );
}

export default Expertises;
