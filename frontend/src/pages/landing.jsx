import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
export default function LandingPage() {
  const router = useNavigate();

  const handleGetStarted = () => {
    const isLoggedIn = localStorage.getItem("token");
    if (isLoggedIn) {
      router("/home");
    } else {
      router("/auth");
    }
  };

  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>Zync</h2>
        </div>
        <div className="navlist">
          <p onClick={ () => {
            router("/m17a11")
          }}>Join as Guest</p>

          <p onClick={ () => {
            router("/auth")
          }}>Register</p>

          <div role="button">
            <p onClick={ () => {
            router("/auth")
          }}>Login</p>

          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1><span style={{color : "#FF9839"}}>Connect</span> with your loved Ones</h1>
          <p>Cover a Distance with Zync</p>
          <div role="button">
            <p onClick={handleGetStarted}>Get Started</p>
          </div>
        </div>
        <div>
          <img src="/mobile.png" alt=""/>
        </div>
      </div>
    </div>
  );
}
