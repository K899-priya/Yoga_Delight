
import React, { useState } from 'react';  
import { Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";  // Import signInWithPopup from Firebase
import { auth, provider } from "../../components/Firebase";  // Correct path

import first from "./images/th.jpeg"
import second from "./images/7202105.jpg"
import m1 from "./images/lotus.png"
import m2 from "./images/yoga.png"
import m3 from "./images/improve.png"
import m4 from "./images/release.png"
import m5 from "./images/yogapose.png"
import m6 from "./images/cobra.png"

import "./Home.css";

export default function Home() {
  const [isSignedIn, setIsSignedIn] = useState(false);  // Track the sign-in status

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("User signed in: ", user);
        setIsSignedIn(true);  // Update sign-in status to true
      })
      .catch((error) => {
        console.error("Error during sign-in: ", error.message);
      });
  };

  const handleSignOut = () => {
    auth.signOut().then(() => {
      setIsSignedIn(false);  // Update sign-in status to false
    });
  };


  return (
    <div>
      <section
        className="colored-section"
        id="title"
        style={{ backgroundColor: "skyblue" }}
      >
        <div className="container-fluid">
          {/* Nav Bar */}
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href>
              yoga delight
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
                  <a className="nav-link active" href="#footer">
                    Home
                  </a>
                </li>
                <Link to='/about' style={{textDecoration:"none"}}>
                <li className="nav-item nav-link">
                  <a className="nav-link" href="#footer">
                    About Us
                  </a>
                </li>
                </Link>
                <Link to='/contact' style={{textDecoration:"none"}}>
                <li className="nav-item nav-link">
                  <a className="nav-link" href="#footer">
                    Contact Us
                  </a>
                </li>
                </Link>
                <button 
                  className="nav-item nav-link btn btn-primary" 
                  onClick={isSignedIn ? handleSignOut : handleSignIn}  // Toggle Sign-In/Sign-Out
                >
                  {isSignedIn ? 'Sign Out' : 'Sign In'}  {/* Dynamic button text */}
                </button>
                {/* <li className="nav-item">
                  <a className="nav-link" href="#pricing">
                    Contact Us
                  </a>
                </li> */}
              </ul>
            </div>
          </nav>
          {/* Title */}
          <div className="row">
            <div className="col-lg-6">
              <h1
                className="big-heading"
                
              >
                Life is Better with Yoga.
              </h1>
              <Link to='/start'>
                        {/* <button
                            className="btn start-btn"
                        >Let's Start</button> */}
                        <button
                        type="button"
                        className="btn btn-outline-light btn-lg download-button"
                        data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration={2000}> TRY NOW
                        </button>
              </Link>
              {/* <button
                type="button"
                className="btn btn-outline-light btn-lg download-button"
                data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration={2000}
              > TRY NOW
              </button> */}
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-duration={3000}
            >
              {/* C:\Users\Sanya\Desktop\yogi\YogaIntelliJ\frontend\src\pages\Home\Home.js
            C:\Users\Sanya\Desktop\yogi\YogaIntelliJ\frontend\src\pages\Home\images\lotus.png */}
                <img src={first} alt="hii" />
            </div>
          </div>
        </div>
      </section>

      <section className="white-section" id="features">
        <div className="container-fluid">
          <div className="row">
            <div
              className="feature-box col-lg-4"
              data-aos="flip-left"
              data-aos-duration={3000}
            >
              <i className="icon fas fa-check-circle fa-4x" />
              <h3 className="feature-title">Easy to use.</h3>
              <p>So easy to use, even your kid could do it.</p>
            </div>
            <div
              className="feature-box col-lg-4"
              data-aos="flip-left"
              data-aos-duration={3000}
            >
              <i className="icon fas fa-bullseye fa-4x" />
              <h3 className="feature-title">Elite Clientele</h3>
            </div>
            <div
              className="feature-box col-lg-4"
              data-aos="flip-left"
              data-aos-duration={3000}
            >
              <i className="icon fas fa-heart fa-4x" />
              <h3 className="feature-title">Guaranteed to work.</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="colored-section">
        <div
          className="container-fluid"
          data-aos="zoom-in"
          data-aos-duration={3000}
        >
          <img src={second} alt="" width="900px" height="500px" />
        </div>
      </section>

      <section>
        <h1 style={{ fontSize: "60px" }}>
          <span data-aos="fade-up" data-aos-duration={3000}>
            Join
          </span>
          <span
            style={{ color: "rgb(97, 190, 227)" }}
            data-aos="fade-down"
            data-aos-duration={1500}
          >
            AI Yoga
          </span>
        </h1>
      </section>

      <section className="white-section" id="features">
        <div className="container-fluid">
          <div className="row">
            <div
              className="feature-box col-lg-4"
              data-aos="flip-left"
              data-aos-duration={1000}
            >
              <img src={m1} alt="" width="70px" height="70px" />
              <h4 className="feature-title">
                Improve Strength and Flexibility
              </h4>
            </div>
            <div
              className="feature-box col-lg-4"
              data-aos="flip-left"
              data-aos-duration={1000}
            >
              <img src={m2} alt="" width="70px" height="70px" />
              <h4 className="feature-title">Improve Body Awareness</h4>
            </div>
            <div
              className="feature-box col-lg-4"
              data-aos="flip-left"
              data-aos-duration={1000}
            >
              <img src={m3}
                alt=""
                width="70px"
                height="70px"
              />
              <h4 className="feature-title">Improve Breathing</h4>
            </div>
          </div>
          <div className="row">
            <div
              className="feature-box col-lg-4"
              data-aos="flip-left"
              data-aos-duration={3000}
            >
              <img
                src={m4}
                alt=""
                width="70px"
                height="70px"
              />
              <h4 className="feature-title">Release Tension and Blockage</h4>
            </div>
            <div
              className="feature-box col-lg-4"
              data-aos="flip-left"
              data-aos-duration={3000}
            >
              <img
                src={m5}
                alt=""
                width="70px"
                height="70px"
              />
              <h4 className="feature-title">Release Stress and Anxiety</h4>
            </div>
            <div
              className="feature-box col-lg-4"
              data-aos="flip-left"
              data-aos-duration={3000}
            >
              <img src={m6} alt="" width="70px" height="70px" />
              <h4 className="feature-title">Release Emotion and Trauma</h4>
            </div>
          </div>
        </div>
      </section>

      <footer className="white-section" id="footer" data-aos="flip-up" data-aos-duration={1000}>
        <div className="container-fluid">
          <i className="social-icon fab fa-facebook-f" />
          <i className="social-icon fab fa-twitter" />
          <i className="social-icon fab fa-instagram" />
          <i className="social-icon fas fa-envelope" />
          <p>© Copyright 2023 Yoga Delight</p>
        </div>
      </footer>
    </div>
  );
}
/*
{
   <div className='home-container'>
            <div className='home-header'>
                <h1 className='home-heading'>YogaIntelliJ</h1>
                <Link to='/about'>
                    <button 
                        className="btn btn-secondary" 
                        id="about-btn"
                    >
                        About
                    </button>
                </Link>
            </div>

            <h1 className="description">A Yoga AI Trainer</h1>
            <div className="home-main">
                <div className="btn-section">
                    <Link to='/start'>
                        <button
                            className="btn start-btn"
                        >Let's Start</button>
                    </Link>
                    <Link to='/tutorials'>
                        <button
                            className="btn start-btn"
                        >Tutorials</button>
                    </Link>

                </div>
            </div>
        </div>
}    */
