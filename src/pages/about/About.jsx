import React from "react";
// import AlejandroBrunella from "../../assets/images/alejandro-brunella.png";
import AlejandroBrunella2 from "../../assets/images/croped-nobg-idea2.png";
import "./About.scss";

export default function About() {
  return (
    <>
      <div className="about__top-gradient"></div>
      <section className="about">
        <div
          className="max-content"
          data-aos="fade-in"
          data-aos-offset="400"
          data-aos-duration="2000"
          data-aos-once="false"
        >
          <div className="about__info">
            <h2
              className="about__info__title"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="500"
              data-aos-once="false"
            >
              About me
            </h2>
            <p className="about__info__text">
              Hi There! I am Alejandro Brunella, Graphic designer and Front-end
              developer based in Buenos Aires, Argentina.
            </p>
            <p className="about__info__text">
              I like building user experiences beginning to end, internet based
              products, application websites and experiments that look great and
              work even better.
            </p>
            <p className="about__info__text">
              Ive been working in the field for 12 years and have a wide variety
              of skills and usefull traits learned during this time, im self
              taught in many aspects and i enjoy learning more every day.
            </p>
          </div>
          <div className="about__picture">
            <img src={AlejandroBrunella2} alt="" />
          </div>
          <div className="about__links">
            <p className="about__links__more large-text">
              Want to know more about me?
            </p>
            <button className="button button__primary">LinkedIn Profile</button>
            <button className="button button__primary__void">
              Download my CV
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
