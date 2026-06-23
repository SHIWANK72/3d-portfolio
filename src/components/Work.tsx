import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
 
const projects = [
  {
    title: "Clock Gating Optimization",
    category: "61.7% Dynamic Power Reduction",
    tools: "Verilog, Synopsys PrimeTime PX, 45nm CMOS, Hybrid ICG, 200 MHz",
    image: "/images/callhq.png",
    link: "https://github.com/SHIWANK72",
  },
  {
    title: "8-Bit RISC Processor",
    category: "RTL to FPGA Hardware Deployment",
    tools: "SystemVerilog, Xilinx Vivado, Cyclone V, Self-Checking Testbench",
    image: "/images/whatsapp.png",
    link: "https://github.com/SHIWANK72",
  },
  {
    title: "Low-Power Flip-Flop Benchmarking",
    category: "69% PDP Improvement — 0.32 fJ ATC-SCDFF",
    tools: "SPICE, BSIM4, 28nm HKMG, 65nm Bulk CMOS, NTV Design",
    image: "/images/broki.png",
    link: "https://github.com/SHIWANK72",
  },
  {
    title: "6T SRAM Cell Design",
    category: "Full-Custom IC — SNM 92–108 mV",
    tools: "SPICE, Cadence Virtuoso, Multi-Corner Simulation (TT/SS/FF)",
    image: "/images/orrdr.png",
    link: "https://github.com/SHIWANK72",
  },
  {
    title: "High-Speed Digital I/O Pad",
    category: "CMOS Pad with ESD Protection",
    tools: "CMOS, ESD Structures, Parasitic Extraction, Signal Integrity",
    image: "/images/callhq.png",
    link: "https://github.com/SHIWANK72",
  },
  {
    title: "14-Day RTL-to-DV Portfolio",
    category: "FSMs · FIFO · UART · SRAM Controller · RISC",
    tools: "Verilog, Xilinx Vivado, Artix-7, Cyclone V, Board Validation",
    image: "/images/whatsapp.png",
    link: "https://github.com/SHIWANK72",
  },
];
 
const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
 
  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );
 
  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);
 
  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);
 
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
 
        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>
 
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Tech</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
 
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Work;