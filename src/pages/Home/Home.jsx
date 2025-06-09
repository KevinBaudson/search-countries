import React, { useState, useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import Slide from "../../components/Slide/Slide";

import CardContinent from "../../components/CardContinent/CardContinent";

import america from "../../assets/america.png";
import asia from "../../assets/asia.png";
import europe from "../../assets/europa.png";
import africa from "../../assets/africa.png";

import "../Home/Home.css";

import Top10Populous from "../../components/Top10Populous/Top10Populous";
import Top10Biggest from "../../components/Top10Biggest/Top10Biggest";
const Home = () => {
  const continents = [
    { name: "America", image: america, description:'Divided into North, Central, and South America, it is a vast and diverse continent. Home to countries like the United States, Brazil, and Mexico. Rich in biodiversity and influential in global technology, pop culture, agriculture, and economy.' },
    { name: "Asia", image: asia, description:'The largest and most populous continent. Home to ancient civilizations such as China, India, and Mesopotamia. It offers vast cultural, linguistic, and religious diversity, and includes modern economic powers like Japan, China, and South Korea.' },
    { name: "Europa", image: europe, description:'Famous for its rich history, art, philosophy, and scientific revolutions. Birthplace of Ancient Greece, the Roman Empire, and the Renaissance. Today, it remains a political and economic powerhouse with countries like Germany, France, and the United Kingdom.' },
    { name: "Africa", image: africa, description:'The second-largest continent in the world, known for its cultural diversity, natural resources (like diamonds and oil), and incredible wildlife. It is considered the cradle of humanity and features deserts like the Sahara, savannas, tropical forests, and a wide range of peoples and languages.' }
  ];

  return (
    <>
      <main className="hero">
        <h1 className="title-home">
          <span className="highlight">Discover</span> the world, one fact at a{" "}
          <span className="highlight">time</span>!
        </h1>
      </main>
      <section>
       
      </section>
      <section>
        <div className="countries-list">
          <Top10Populous />
          <Top10Biggest />
        </div>
      </section>
    </>
  );
};

export default Home;
