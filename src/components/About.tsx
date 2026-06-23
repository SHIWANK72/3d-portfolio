import "./styles/About.css";
 
const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          FPGA Developer and VLSI Design Engineer with hands-on expertise across
          the complete digital design flow — RTL coding in Verilog/SystemVerilog,
          synthesis, place & route, timing closure, testbench verification, and
          hardware board validation on Xilinx Vivado.
          <br /><br />
          Key research results: 61.7% dynamic power reduction via hybrid clock
          gating (45 nm, 200 MHz); 69% PDP improvement in flip-flop
          benchmarking across 28/65 nm CMOS nodes. Built and validated a
          14-project RTL-to-DV portfolio on Cyclone V & Artix-7 FPGA platforms.
          <br /><br />
          Diploma Gold Medalist 🥇 · Nik-Cronics· Open to global
          relocation · Immediate joiner.
        </p>
      </div>
    </div>
  );
};
 
export default About;
 