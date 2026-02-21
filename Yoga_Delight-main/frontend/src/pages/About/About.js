import React from "react";
import "./About.css";
import img1 from "./images/img2.jpg";
import img2 from "./images/img1.jpg";

//check the href link of about ,home and contact


export default function About() {
  return (
    <div>
      <section>
        <div style={{ padding: '5% 9%' }}>
          {/* Nav Bar */}
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/" style={{ fontSize: '40px', paddingTop: '0px' }}>Yoga Delight</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/about">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-bg" style={{ backgroundImage: `url(${img1})` }}>
          <h2>About Us</h2>
          <div className="line">
            <div />
            <div />
            <div />
          </div>
        </div>

        <div className="row" style={{ padding: '5% 9%' }}>
          <div className="col-lg-6">
            <h4 style={{ color: 'black', textAlign: 'left' }} data-aos="fade-right" data-aos-duration={2000}>
              This is a real-time AI-based Yoga Trainer that detects how well you are performing a pose. AI first predicts keypoints or coordinates of different body parts in an image and then uses another classification model to classify the pose. If AI detects a pose with more than 95% accuracy, it notifies you that you're performing it correctly by making the virtual skeleton green. The TensorFlow library's pretrained Movenet model predicts the keypoints, and a neural network built on top of that uses these coordinates to classify the yoga pose. The model is trained in Python, and thanks to TensorFlow.js, we can run it in the browser by converting the Keras/TensorFlow model to TensorFlow.js.
            </h4>
          </div>

          <div className="col-lg-1"></div>

          <div className="col-lg-5" data-aos="fade-left" data-aos-duration={2000}>
            <img src={img2} alt="Yoga Pose" width="500px" height="500px" />
          </div>
        </div>

        <div className="contact-footer">
          <h3>Follow Us</h3>
          <div className="contact-footer">
  <h3>Follow Me</h3>
  <div className="social-links">
    <a href="https://linkedin.com/in/sanjeev-prasad-41146025b" className="fab fa-linkedin-in"></a>
    <a href="https://github.com/sanjeev22004" className="fab fa-github"></a>
    <a href="mailto:sanjeevprasad2004@gmail.com" className="fa fa-envelope"></a>
  </div>
</div>

        </div>
      </section>
    </div>
  );
}
