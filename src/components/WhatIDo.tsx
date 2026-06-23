import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";

const cards = [
  {
    title: "RTL & FPGA DESIGN",
    subtitle: "From Netlist to Bitstream",
    desc: "Full FPGA design flow — RTL coding, synthesis, place & route, timing closure, and hardware board validation on Xilinx Vivado. 14-project portfolio on Cyclone V & Artix-7.",
    highlights: [
      "61.7% Dynamic Power Reduction — published research result",
      "8-bit RISC CPU implemented end-to-end in Verilog",
      "UART, I2C & SPI controllers with hardware-validated testbench",
      "SDC constraint-driven timing closure on Artix-7 & Cyclone V",
    ],
    tags: ["Verilog", "SystemVerilog", "Xilinx Vivado", "Timing Closure", "UART / I2C / SPI", "ModelSim"],
    bottomLine: true,
  },
  {
    title: "LOW-POWER VLSI",
    subtitle: "CMOS Design & Power Optimization",
    desc: "Clock gating (ICG), power gating, multi-VTH, and NTV design for dynamic and static power reduction at 28/45/65 nm CMOS nodes. Verified via Synopsys PrimeTime PX and SPICE simulation.",
    highlights: [
      "69% PDP (Power-Delay Product) improvement — published research",
      "Multi-VTH cell assignment across 28nm / 45nm / 65nm nodes",
      "Power gating with sleep transistors — static leakage minimized",
      "Sign-off via Synopsys PrimeTime PX & HSPICE / BSIM4 models",
    ],
    tags: ["Clock Gating (ICG)", "Cadence Virtuoso", "Synopsys PrimeTime", "SPICE / BSIM4", "STA", "DRC / LVS"],
    bottomLine: false,
  },
];

const WhatIDo = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // ✅ Fix: store handler per card so removeEventListener works
  const handlersRef = useRef<(() => void)[]>([]);

  useEffect(() => {
    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("what-card-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      observer.observe(card);

      // ✅ Fix: named handler stored in ref
      const handler = () => {
        card.classList.toggle("what-content-active");
        cardRefs.current.forEach((sibling, j) => {
          if (j !== i && sibling) {
            sibling.classList.remove("what-content-active");
            sibling.classList.add("what-sibling");
          }
        });
        // Remove sibling class from clicked card
        card.classList.remove("what-sibling");
      };

      handlersRef.current[i] = handler;
      card.addEventListener("click", handler);
    });

    return () => {
      cardRefs.current.forEach((card, i) => {
        if (card && handlersRef.current[i]) {
          card.removeEventListener("click", handlersRef.current[i]);
        }
      });
      observer.disconnect();
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>

          {cards.map((card, i) => (
            <div
              key={i}
              className="what-content"
              ref={(el) => (cardRefs.current[i] = el)}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="what-border1">
                <svg height="100%">
                  <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                  {card.bottomLine && (
                    <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                  )}
                </svg>
              </div>

              <div className="what-corner"></div>

              <div className="what-content-in">
                <h3>{card.title}</h3>
                <h4>{card.subtitle}</h4>
                <p>{card.desc}</p>

                {/* ✅ Expandable section */}
                <div className="what-expanded">
                  <ul className="what-highlights">
                    {card.highlights.map((point, j) => (
                      <li key={j}>
                        <span className="what-dot" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <h5>Skillset & tools</h5>
                <div className="what-content-flex">
                  {card.tags.map((tag, j) => (
                    <div key={j} className="what-tags">{tag}</div>
                  ))}
                </div>

                <div className="what-arrow"></div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;