import React from "react";
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <main className="home-main">
        <div className="intro">
          <h2>Driving Sustainability with AI!</h2>
          <p>Discover Sustainable Solutions with Our AWS and SambaNova Powered Chatbot</p>
          <Link to="/chat" className="explore-button">
            Explore More..
            <FaArrowRightLong
            style={{fontSize: "40px", width: "120px"}} />
          </Link>
        </div>
        <div className="robot-image">
          <img src="https://test.digitalt3.com/wp-content/uploads/2024/05/landing-1.png" alt="AI Robot" />
        </div>
      </main>
      <footer className="home-footer">
        <p>Start Your AI Journey Today!</p>
      </footer>
    </div>
  );
};

export default Home;
