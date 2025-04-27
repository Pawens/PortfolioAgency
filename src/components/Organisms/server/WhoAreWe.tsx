import React from 'react';
import MemberCard from '@/components/Molecules/server/MemberCard';
import ScrollingText from '@/components/Atoms/client/ScrollingText';

function WhoAreWe() {
  return (
    <section
      className="flex flex-col justify-around items-center gap-16 min-h-screen p-8"
      style={{ backgroundColor: 'var(--color-primary)' }}
    >
      <ScrollingText />
      <div className="flex flex-row justify-around items-center w-full gap-16">
        <MemberCard
          name="ROMAIN PARISOT"
          role="Fondateur de Pawens"
          job="Développeur FullStack"
          imageUrl="/temp/adam.png"
        />
        <MemberCard
          name="ADAM SIMON"
          role="Co-Fondateur de Pawens"
          job="Développeur FullStack"
          imageUrl="/temp/adam.png"
        />
      </div>
    </section>
  );
}

export default WhoAreWe;
