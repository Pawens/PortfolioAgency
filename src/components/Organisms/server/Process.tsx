import Count from "@/components/Atoms/client/Count";
import SquareProcess from "@/components/Molecules/server/SquareProcess";
import React from "react";
import { processData } from "@/utils/MocksProcess";
import AnimateProcessObserver from "@/components/Molecules/client/AnimateProcessObserver";

function Process() {
  return (
    <section className="text-[var(--color-secondary)] bg-[var(--color-primary)] pt-[192px]">
      <div className="px-[88px] flex flex-col gap-[64px]">
        <div className="flex items-top justify-start gap-[8px]">
          <h2 className="text-[46px] italic">PROCESS DE TRAVAIL</h2>
          <Count manualCount={7} />
        </div>

        <div className="grid grid-cols-2 w-max mx-auto">
          {processData.map((item, i) => {
            const colClass = i % 2 === 0 ? "col-start-1" : "col-start-2";
            const rowClass =
              i % 2 === 0
                ? `row-start-${Math.floor(i / 2) * 2 + 1}`
                : `row-start-${Math.floor(i / 2) * 2 + 2}`;
            const direction = i % 2 === 0 ? "left" : "right";
            return (
              <div
                key={i}
                className={`process-square opacity-0 ${colClass} ${rowClass}`}
                data-index={i}
                data-direction={direction}
              >
                <SquareProcess title={item.title} list={item.list} index={i} />
              </div>
            );
          })}
          <AnimateProcessObserver selector=".process-square" stagger={120} />
        </div>
      </div>
    </section>
  );
}

export default Process;
