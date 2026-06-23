import { PropsWithChildren, useEffect, useRef } from "react";
import { useLoading } from "../context/LoadingProvider";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const { isLoading } = useLoading();
  const hasPlayed = useRef(false);

  useEffect(() => {
    // Jaise hi loading khatam ho — ek baar auto play
    if (!isLoading && !hasPlayed.current) {
      hasPlayed.current = true;
      setTimeout(() => {
        const audio = new Audio("/intro.mp3");
        audio.volume = 1;
        audio.play().catch(() => {});
      }, 600); // landing animation settle hone do
    }
  }, [isLoading]);

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              SHIWANK
              <br />
              <span>GUPTA</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>FPGA Developer &</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">VLSI</div>
              <div className="landing-h2-2">Engineer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Engineer</div>
              <div className="landing-h2-info-1">VLSI</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;