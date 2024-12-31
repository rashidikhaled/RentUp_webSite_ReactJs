import React, { useState } from "react";
import { nav } from "../../data/data";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [navList, setNavList] = useState(false);
  console.log(navList);
  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src="./images/logo.png" />
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((navItem, index) => (
                <li key={index}>
                  <Link to={navItem.path}>{navItem.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex button">
            <h4>
              <span>2</span>
              <text>my app</text>
            </h4>
            <button className="btn1">
              <li className="fa fa-sign-in"></li>
              signIn
            </button>
          </div>
          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <li className="fa fa-bars"></li>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
