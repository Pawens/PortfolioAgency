import React, { Suspense } from "react";
import MainValuesCardsServer from "../MainValuesCards/MainValuesCardsServer";

function SectionMainValuesCards() {
  return (
    <section className="section sectionMainValues">
      <Suspense fallback={<p>Loading values...</p>}>
        <MainValuesCardsServer />
      </Suspense>
    </section>
  );
}

export default SectionMainValuesCards;
