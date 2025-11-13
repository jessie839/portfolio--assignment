

import React from "react";

import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "Elim Wellness",
    description:
      "A web platform showcasing homecare services like ICU care and baby care, designed to provide comfort and professional medical assistance at home.",
    url: "https://github.com/jessie839/elim-patient-homecare-service",
  },
  {
    title: "Grace Cottage",
    description:
      "A memory-sharing website where users can upload and view photos for events such as birthdays, weddings, and festive celebrations.",
    url: "https://github.com/jessie839/GraceCottage-Appartment-Website",
  },
  {
    title: "AI Chatbot",
    description:
      "An interactive chatbot project built to simulate real-time conversations and provide user assistance using intelligent responses.",
    url: "https://github.com/jessie839/peekuchat",
  },
  {
    title: "Socket.io Real-Time Communication",
    description:
      "A real-time web communication project using Socket.io to enable instant message exchange and live updates between connected users.",
    url: "https://github.com/jessie839/realtimechat",
  },
];


const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
