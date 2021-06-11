import React, { useState } from "react";
import "./style.scss";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="header">
      <div className="header-mini">
        <div className="header-mini-wrapper">
          <div className="menu-left">
            <NavLink to="/lang">
              <img
                src={require("assets/logo/global.svg").default}
                alt="global-logo"
              />
              <span>Global - English</span>
            </NavLink>
          </div>
          <div className="menu-center">
            <span>RETURNING AN ORDER?</span>
            <NavLink to="/return">Click for more info</NavLink>
          </div>
          <div className="menu-right">
            <NavLink to="/signin">Sign in</NavLink>
            <NavLink to="/signup">Sign up</NavLink>
          </div>
        </div>
      </div>
      <div className="header-main">
        <div className="mobile-actions">
          <button className="icon-button" onClick={() => setSearch("")}>
            <img
              src={require("assets/logo/menu-nav.svg").default}
              alt="drawer"
            ></img>
          </button>
          <button className="icon-button" onClick={() => setSearch("")}>
            <img
              src={require("assets/logo/search-mobile.svg").default}
              alt="search"
            ></img>
          </button>
        </div>
        <div className="nav-links">
          <NavLink to="/women">Women</NavLink>
          <NavLink to="/men" className="active">
            Men
          </NavLink>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/accessories">Accessories</NavLink>
          <NavLink to="/organic">Organic</NavLink>
        </div>
        <div className="logo">
          <Link to="/">
            <img src={require("assets/logo/gobi.svg").default} alt="logo"></img>
          </Link>
        </div>
        <div className="nav-actions">
          <div className="search">
            <img
              src={require("assets/logo/search-nav.svg").default}
              alt="search logo"
              className="search-logo"
            ></img>
            <div className="search-input">
              <input
                placeholder="Search"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button className="icon-button" onClick={() => setSearch("")}>
                  <img
                    src={require("assets/logo/search-cancel.svg").default}
                    alt="search cancel"
                  ></img>
                </button>
              )}
            </div>
          </div>
          <div className="nav-buttons">
            <Link to="/favourite">
              <img
                src={require("assets/logo/heart.svg").default}
                alt="heart"
              ></img>
            </Link>
            <Link to="/card">
              <img
                src={require("assets/logo/card.svg").default}
                alt="card"
              ></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
