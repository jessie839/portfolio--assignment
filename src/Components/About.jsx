import React from "react";
import image from "../images/motion-background.jpg";
const imageAltText = "purple and blue abstract background";
const description =
  "Dedicated and proactive B.Tech student specializing in Computer Science & Business Systems. I'm a pre-final year with strong foundation in creating innovative and scalable solutions in software development and web technologies.";
const skillsList = [
  " Programming Languages : C, C++, Python",
  " Web Development : HTML, CSS, Javascript, React, Tailwind CSS",
  " Software models : Agile Technology, scrum",
  " Databases: MySQL, XAMPP",
  "Mobile user interfaces",
];
const detailOrQuote =
  "Skilled in leveraging technical expertise and problem-solving abilities to drive impactful outcomes while fostering a commitment to continuous learning and professional growth";
const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
