import React from "react";
import Background from "../../components/background/Background";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <Background />
      <div className="max-content">
        <span className="hero__greetings">Hello, My name is</span>
        <h1 className="hero__name">Alejandro Brunella</h1>
        <h3 className="hero__role">Front-end & Graphic Design.</h3>
        <p className="hero__intro">
          12 years experience as a high-quality <br />
          web designer and User Interface interface developer.
        </p>
      </div>
      <div className="hero__bottom-gradient"></div>
    </section>
  );
}
