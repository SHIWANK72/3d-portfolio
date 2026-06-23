import { MdCopyright, MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaWhatsapp } from "react-icons/fa6";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">

          <div className="contact-box">
            <h4>Education</h4>
            <p>
              B.Tech — Electronics & Communication Engineering,<br />
              UIET Kurukshetra University — 2022–2025
            </p>
            <p>
              Diploma — Electrical Engineering (Gold Medalist 🥇),<br />
              Govt. Polytechnic College Nanakpur — 2019–2022
            </p>
          </div>

          <div className="contact-box">
            <h4>Social</h4>
            <div className="social-grid">
              <a href="https://github.com/SHIWANK72"
                target="_blank" rel="noreferrer"
                data-cursor="disable" className="contact-social">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/guptashiwank/"
                target="_blank" rel="noreferrer"
                data-cursor="disable" className="contact-social">
                <FaLinkedinIn />
              </a>
              <a href="mailto:gupta.shiwank09@gmail.com"
                target="_blank" rel="noreferrer"
                data-cursor="disable" className="contact-social">
                <FaEnvelope />
              </a>
              <a href="mailto:NIKORONICS@proton.me"
                target="_blank" rel="noreferrer"
                data-cursor="disable" className="contact-social">
                <FaEnvelope />
              </a>
              <a href="tel:+917832070538"
                data-cursor="disable" className="contact-social">
                <MdPhone />
              </a>
              <a href="https://wa.me/919466402876"
                target="_blank" rel="noreferrer"
                data-cursor="disable" className="contact-social">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Shiwank Gupta</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;