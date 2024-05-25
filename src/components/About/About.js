import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <main className="about-main">
        <h2>About Us</h2>
        <p>
          Welcome to DigitalT3, where we simplify complex IT solutions with our
          targeted, technique-driven team approach. Our mission is to empower
          businesses with cutting-edge AI technology and innovative solutions.
        </p>
        <div className="about-sections">
          <div className="about-section">
            <h3 style={{ marginLeft: "70px"}}>Our Mission</h3>
            <img
                  src={"https://test.digitalt3.com/wp-content/uploads/2024/03/Tech-Services-V4.0-1.gif"}
                  alt={'logo'} width={'250px'} height={'250px'}
                />
            {/* <p>
              At DigitalT3, our mission is to leverage the power of Artificial
              Intelligence to unlock new possibilities and drive innovation in
              various industries. We aim to provide our clients with the tools
              they need to succeed in a rapidly evolving technological landscape.
            </p> */}
          </div>
          <div className="about-section">
            <h3 style={{ marginLeft: "100px"}}>Our Technique</h3>
            <img
                  src={"https://test.digitalt3.com/wp-content/uploads/2024/05/Sustainability-bot_arch.png"}
                  alt={'logo'} width={'470px'} height={'220px'}
                />
            {/* <p>
              Our vision is to be a global leader in AI technology, known for our
              ability to simplify and streamline complex IT processes. We strive
              to make advanced technology accessible and beneficial to all.
            </p> */}
          </div>
          <div className="about-section">
            <h3 style={{ marginLeft: "80px"}}>Our Team</h3>
            <img
                  src={"https://test.digitalt3.com/wp-content/uploads/2024/03/Tech-Services-2.gif"}
                  alt={'logo'} width={'250px'} height={'220px'}
                />
            {/* <p>
              Our team is composed of dedicated professionals with diverse
              backgrounds in technology, engineering, and business. We work
              collaboratively to deliver innovative solutions and exceptional
              service to our clients.
            </p> */}
          </div>
        </div>
      </main>
      <footer className="about-footer">
        <p>Join us on our journey to the future of AI!</p>
      </footer>
    </div>
  );
};

export default About;
