"use client";
import React, { useState , useEffect} from "react";
import Image from "next/image";
import aboutone from "../assets/about1.png";
import abouttwo from "../assets/about2.png";
import aboutthree from "../assets/about3.png";
import aboutfour from "../assets/tbd.png";
import '../styles/HeroSec3.css'
const cardsData = [
  {
    id: 1,
    image: aboutone,
    name:'one'
  },
  {
    id: 2,
    image: abouttwo,
    name:'two'
  },
  {
    id: 3,
    image: aboutthree,
    name:'three'
  },
  {
    id: 4,
    image: aboutfour,
    name:'four'
  },
];

const MobileCardSliderone = ({ cardsData }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePaginationClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="mobile-slider-containerabout">
      <h2 className="trend-title trend1">Learn More</h2>
      <div
        className="mobile-cards-sliderabout"
        style={{
          transform: `translateX(-${activeIndex * 85}%)`,
        }}
      >
        {cardsData.map((card) => (
          <div className="mobile-cardabout" key={card.id}>
            <div className="mobile-card-imageabout">
              <Image
                src={card.image}
                alt={card.name}
                width={210}
                height={80}
                className="mobimabout"
              />
            </div>
           
          </div>
        ))}
      </div>

      <div className="mobile-paginationabout">
        {cardsData.map((_, index) => (
          <button
            key={index}
            className={`pagination-tababout ${
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

const DesktopCardLayoutone = ({ cardsData }) => {
  return (
    <div className="desktop-card-containerabout">
      <h2 className="trend-title">Learn More</h2>
      <div className="desktop-cardsabout">
        {cardsData.map((card) => (
          <div className="desktop-cardabout" key={card.id}>
            <div className="desktop-card-imageabout">
              <Image
                src={card.image}
                alt={card.name}
                width={"100%"}
                height={120}
              />
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

const Learn = ({ cardsData }) => {
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
          <MobileCardSliderone cardsData={cardsData} />
        ) : (
          <DesktopCardLayoutone cardsData={cardsData} />
        )}
      </div>
    );
  };
const HeroSec3 = () => {
  return <Learn cardsData={cardsData} />
};
export default HeroSec3;
