import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import img1 from "./images/img.jpg";
import bg from "./images/bg.jpg";

export default function Contact() {
  return (
    <div>
      <section>
        <div style={{ padding: "5% 9%" }}>
          {/* Nav Bar */}
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="/">
              Yoga Delight
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link " href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link to="/contact" className="nav-link" >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div></div>
        </div>
      </section>
      <section className="contact-section">
        <div className="contact-bg" style={{ backgroundImage: `url(${bg})` }}>
          <h3>Get in Touch with Us</h3>
          <h2>Contact Us</h2>
          <div className="line">
            <div />
            <div />
            <div />
          </div>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            iste facilis quos impedit fuga nobis modi debitis laboriosam velit
            reiciendis quisquam alias corporis, maxime enim, optio ab dolorum
            sequi qui.
          </p>
        </div>
        <div className="contact-body">
          <div className="contact-info">
            <div data-aos="zoom-in" data-aos-duration={2000}>
              <span>
                <i className="fas fa-mobile-alt" />
              </span>
              <span>Phone No.</span>
              <span className="text">1-2392-23928-2</span>
            </div>
            <div data-aos="zoom-in" data-aos-duration={2000}>
              <span>
                <i className="fas fa-envelope-open" />
              </span>
              <span>E-mail</span>
              <span className="text">mail@company.com</span>
            </div>
            <div data-aos="zoom-in" data-aos-duration={2000}>
              <span>
                <i className="fas fa-map-marker-alt" />
              </span>
              <span>Github</span>
              <span className="text">https://github.com/k899-priya</span>
            </div>
          </div>
          <div style={{ padding: "5% 9%" }} className="contact-form container-fluid" data-aos="flip-up" data-aos-duration={3000}>
            <form>
              <div>
                <input type="text" className="form-control" placeholder="First Name" />
                <input type="text" className="form-control" placeholder="Last Name" />
              </div>
              <div>
                <input type="email" className="form-control" placeholder="E-mail" />
                <input type="text" className="form-control" placeholder="Phone" />
              </div>
              <textarea rows={5} placeholder="Message" className="form-control" />
              <input type="submit" className="send-btn" value="Send Message" />
            </form>
            <div>
              <img src={img1} alt="Contact" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
