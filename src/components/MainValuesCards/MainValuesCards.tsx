import React from "react";
import "./MainValuesCards.css";

import MainValueCard from "../MainValueCard/MainValueCard";

function MainValuesCards() {
  return (
    <div className="mainValuesCards">
      <MainValueCard label="Project Done" value="50+" icon="check" />
      <MainValueCard label="Client Satisfaction" value="4.8/5" icon="star" />
      <MainValueCard label="Online Traffic" value="+250%" icon="work" />
    </div>
  );
}

export default MainValuesCards;
