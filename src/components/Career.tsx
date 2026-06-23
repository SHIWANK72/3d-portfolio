import "./styles/Career.css";
 
const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
 
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>FPGA & RTL Design Engineer</h4>
                <h5>Nik-Coronics · Panchkula</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Independent R&D: 14-project RTL-to-DV portfolio on Xilinx Vivado
              (Cyclone V / Artix-7). Achieved 61.7% dynamic power reduction via
              hybrid clock gating on a 32-bit RISC datapath at 45 nm, 200 MHz.
              Full-custom 6T SRAM in SPICE — SNM 92–108 mV across TT/SS/FF corners.
            </p>
          </div>
 
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer Intern</h4>
                <h5>Samsung SDS India · Gurgaon</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Mar–Jul 2025. Python-based data pipeline development and workflow
              automation within a global semiconductor-affiliated engineering
              organization. Gained exposure to enterprise-scale engineering
              operations at a world-class semiconductor company.
            </p>
          </div>
 
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>VLSI Design Intern</h4>
                <h5>Kurukshetra University</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Jul–Aug 2024. CMOS schematic design and post-layout simulation in
              Cadence Virtuoso. Applied DRC/LVS checking and transistor-level
              circuit optimization. Awarded formal Letter of Recommendation.
            </p>
          </div>
 
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ASIC Design Trainee</h4>
                <h5>TeamLease Services</h5>
              </div>
              <h3>2022–25</h3>
            </div>
            <p>
              3-year structured industry training program (60 hrs/month) concurrent
              with B.Tech: digital ASIC design, RTL coding, logic synthesis, EDA
              verification, timing analysis, and design-rule compliance aligned with
              commercial ASIC flow requirements.
            </p>
          </div>
 
        </div>
      </div>
    </div>
  );
};
 
export default Career;
 