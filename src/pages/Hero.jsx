import React from "react";
import "../styles/Hero.css"; 
import Image from "next/image";
import photo from "../assets/Container.png";
import icontick from "../assets/svg-icon.png";
import HeroSec3 from "../sections/HeroSec3";
import HeroSec2 from "@/sections/HeroSec2";


const Hero = () => {

  return (
    <div className="common">
    <div className="start">
      <div className="levelstart">
        <div className="headerstart">
          <h1 className="headtxt">Buy Memes. </h1>
          <h1 className="headtxt">In Two Clicks.</h1>
          <p className="phead">
            The fastest way to buy memes in just two clicks. <br />
            Under 1 minute to sign up and no wallet needed.
          </p>
        </div>
        <div className="content">
          <div className="stats">
            <div className="stat">
              <div className="cirdiv">
                <div className="circle"></div>
                <p className="user">Total users</p>
              </div>
              <div className="phototrade numbers">
                <Image src={photo} width={60} height={30} alt="photo" className="init"/>
                <h3 className="user">52,630</h3>
              </div>
            </div>
            <div className="stat">
              <div className="cirdiv">
                <div className="circle"></div>
                <p className="user">Trade volume</p>
              </div>
              <div className="numbers">
                <h3>$1,288,314,266</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="card-container">
      <div className="card-image">
        <Image
          src={icontick}
          alt="Badge"
          className="badge-image"
        />
      </div>
      <div className="card-content">
      <div className="card-stats">
          <div>
            <h3>VIRTUAL</h3>
          </div>
          <div className="virt">
          <div className="triangle"></div>
            <p className="per">0.59%</p>
          </div>
          </div>
        <div className="card-stats">
        
          <div className="stat1">
            <p>Price</p>
            <h4>$2.74</h4>
          </div>
          <div className="stat1">
            <p>Market Cap</p>
            <h4>$1.7B</h4>
          </div>
        </div>
      </div>
    </div>
    </div>

    <HeroSec2/>
    <HeroSec3/>
   
    </div>
  );
};

export default Hero;
