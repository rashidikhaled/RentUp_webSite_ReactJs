import React from "react";
import "./hero.css";
import Heading from "../../common/Heading";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading title="Search Your next Home" subTitle="Finde New" />
          <form className="flex">
            <div className="box">
              <span>city/street</span>
              <input type="text" placeholder="city/street" />
            </div>
            <div className="box">
              <span>Propert type</span>
              <input type="text" placeholder="Propert type" />
            </div>{" "}
            <div className="box">
              <span>Price Range</span>
              <input type="text" placeholder="Price Range" />
            </div>
            <div className="box">
              <h4>Addvanced Filter</h4>
            </div>
            <button className="btn">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
