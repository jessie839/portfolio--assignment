import React from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import "./styles.css";
const siteProps = {
  name: "Jessita Hannah Selvi A",
  title: "Aspiring Software Engineer",
  email: "jessitahannahselvi@gmail.com",
  gitHub: "jessie839",
  instagram: "jessitahannahh",
  linkedIn: "jessitahannahselvi",
};
const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";
const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
