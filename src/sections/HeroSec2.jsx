"use client";
import React, { useState , useEffect} from "react";
import Image from "next/image";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import '../styles/HeroSec2.css'
import tickImage from "../assets/svgone.png";
const cardsData = [
  {
    id: 1,
    name: "VIRTUAL",
    price: "$2.74",
    marketCap: "$1.7B",
    percentage: "0.59%",
    t:"yes",
    image: one,
    tick:"no"
  },
  {
    id: 2,
    name: "AI16Z",
    price: "$0.0873",
    marketCap: "$962K",
    percentage: "11.59%",
    t:"no",
    image: two,
    tick:"yes"
  },
  {
    id: 3,
    name: "TICKER3",
    price: "$0.1232",
    marketCap: "$701M",
    percentage: "",
    t:"",
    image: three,
    tick:"yes"
  },
  {
    id: 4,
    name: "TICKER4",
    price: "$25.51",
    marketCap: "$988",
    percentage: "",
    t:"",
    image: four,
    tick:"no"
  },
];
const MobileCardSlider = ({ cardsData }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePaginationClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="mobile-slider-container">
      <h2 className="trend-title trend1">Trending</h2>
      <div
        className="mobile-cards-slider"
        style={{
          transform: `translateX(-${activeIndex * 85}%)`,
        }}
      >
        {cardsData.map((card) => (
          <div className="mobile-card" key={card.id}>
            <div className="mobile-card-image">
              <Image
                src={card.image}
                alt={card.name}
                width={200}
                height={160}
              />
            </div>
            <div className="desktop-card-content">
              <div className="deskinfo">
                <div className="mobti">
                <h3>{card.name}</h3>
                {card.tick === "yes" && (
                                    <Image
                                      src={tickImage}
                                      alt="Tick"
                                      width={16}
                                      height={16}
                                      className="tick-icon"
                                    />)}
                                    </div>
                <div className="trend-percentage-container">
                  {card.t === "yes" && (
                    <span className="triangle green-triangle"></span>
                  )}
                  {card.t === "no" && (
                    <span className="triangle red-triangle"></span>
                  )}
                  <p
                    className={`trend-percentage ${
                      card.t === "yes"
                        ? "percentage-green"
                        : card.t === "no"
                        ? "percentage-red"
                        : ""
                    }`}
                  >
                    {card.percentage}
                  </p>
                </div>
              </div>
              <div className="desktop-card-stats">
                <div>
                  <p className="des">Price</p>
                  <h4 className="des1">{card.price}</h4>
                </div>
                <div>
                  <p className="des">Market Cap</p>
                  <h4 className="des1">{card.marketCap}</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mobile-pagination">
        {cardsData.map((_, index) => (
          <button
            key={index}
            className={`pagination-tab ${
              index === activeIndex ? "active-tab" : ""
            }`}
            onClick={() => handlePaginationClick(index)}
          >
            
          </button>
        ))}
      </div>
    </div>
  );
};
const DesktopCardLayout = ({ cardsData }) => {
  return (
    <div className="desktop-card-container">
      <h2 className="trend-title">Hottest</h2>
      <div className="desktop-cards">
        {cardsData.map((card) => (
          <div className="desktop-card" key={card.id}>
            <div className="desktop-card-image">
              <Image
                src={card.image}
                alt={card.name}
                width={300}
                height={200}
              />
            </div>
            <div className="desktop-card-content">
              <div className="deskinfo">
                <h3>
                  {card.name}
                  {card.tick === "yes" && (
                    <Image
                      src={tickImage}
                      alt="Tick"
                      width={16}
                      height={16}
                      className="tick-icon"
                    />
                  )}
                </h3>
                <div className="trend-percentage-container">
                  {card.t === "yes" && (
                    <span className="triangle green-triangle"></span>
                  )}
                  {card.t === "no" && (
                    <span className="triangle red-triangle"></span>
                  )}
                  <p
                    className={`trend-percentage ${
                      card.t === "yes"
                        ? "percentage-green"
                        : card.t === "no"
                        ? "percentage-red"
                        : ""
                    }`}
                  >
                    {card.percentage}
                  </p>
                </div>
              </div>
              <div className="desktop-card-stats">
                <div>
                  <p className="des">Price</p>
                  <h4 className="des1">{card.price}</h4>
                </div>
                <div>
                  <p className="des">Market Cap</p>
                  <h4 className="des1">{card.marketCap}</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TrendHottest = ({ cardsData }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 600); 
      };
  
      window.addEventListener("resize", handleResize);
      handleResize();
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    return (
      <div>
        {isMobile ? (
          <MobileCardSlider cardsData={cardsData} />
        ) : (
          <DesktopCardLayout cardsData={cardsData} />
        )}
      </div>
    );
  };
const HeroSec2 = () => {
  return <TrendHottest cardsData={cardsData} />
};
export default HeroSec2;
